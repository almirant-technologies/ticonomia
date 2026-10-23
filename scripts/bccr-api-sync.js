import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CSRF_ENDPOINT = "https://apim.bccr.fi.cr/SDDE/api/Bccr.GE.SDDE.IndicadoresSitioExterno.ServiciosUsuario.API/Token/GenereCSRF";
const VENTANILLA_ENDPOINT = "https://apim.bccr.fi.cr/SDDE/api/Bccr.GE.SDDE.IndicadoresSitioExterno.GrupoVariables.API/CuadroPersonalizadoGrupoVariables/ObtenerDatosCuadroPersonalizado";
const BCCR_REFERENCIA_URL = "https://apim.bccr.fi.cr/SDDE/api/Bccr.GE.SDDE.Publico.Indicadores.API/cuadro/1/series";

serve(async (req) => {
  try {
    // 1. Initialize Supabase Client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const bccrToken = Deno.env.get("BCCR_SDDE_TOKEN");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    }
    if (!bccrToken) {
      throw new Error("Missing BCCR_SDDE_TOKEN secret");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 2. Compute execution date in Costa Rica timezone (UTC-6)
    const dateCR = getCostaRicaDate();
    const dateSlash = dateCR.replace(/-/g, "/");

    // 3. Generate CSRF token for BCCR SDDE external endpoints
    const csrfResponse = await fetch(CSRF_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bccrToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!csrfResponse.ok) {
      const errorText = await csrfResponse.text();
      throw new Error(`Failed to generate CSRF token (${csrfResponse.status}): ${errorText}`);
    }

    const rawCsrf = await csrfResponse.text();
    const csrfToken = rawCsrf.replace(/^"|"$/g, "").trim();

    // 4. Fetch Ventanilla exchange rates (Group Variable 1015) and BCCR Reference rates in parallel
    const [ventanillaResponse, referenciaResponse] = await Promise.all([
      fetch(`${VENTANILLA_ENDPOINT}?idGrupoVariable=1015&fechaAConsultar=${dateCR}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${bccrToken}`,
          Token_CSRF: csrfToken,
          "Content-Type": "application/json",
        },
      }),
      fetch(`${BCCR_REFERENCIA_URL}?fechaInicio=${dateSlash}&fechaFin=${dateSlash}&idioma=ES`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${bccrToken}`,
          "Content-Type": "application/json",
        },
      }),
    ]);

    const dataToInsert = [];

    // 5. Parse Ventanilla Exchange Rates (all authorized financial entities)
    if (ventanillaResponse.ok) {
      const ventanillaData = await ventanillaResponse.json();
      const rawRows = ventanillaData?.datos?.indicadores || [];
      let currentCategory = "";

      for (const row of rawRows) {
        if (!Array.isArray(row) || row.length === 0) continue;

        // Skip table header row
        if (row[0]?.valorEspanol === "Entidad autorizada") continue;

        // Category header row: e.g. "Bancos públicos", "Bancos privados", "Cooperativas"
        if (row.length === 1 && row[0]?.valorEspanol) {
          currentCategory = row[0].valorEspanol.trim();
          continue;
        }

        // Entity rate row: [0] Entity, [1] Compra, [2] Venta, [3] Diferencial, [4] Actualización
        if (row.length >= 5) {
          const entityName = row[0].valorEspanol?.trim();
          const buyRaw = row[1].valorEspanol?.trim();
          const sellRaw = row[2].valorEspanol?.trim();
          const spreadRaw = row[3].valorEspanol?.trim();
          const updatedRaw = row[4].valorEspanol?.trim();

          if (!entityName || !buyRaw) continue;

          const buyRate = parseCostaRicanNumber(buyRaw);
          const sellRate = parseCostaRicanNumber(sellRaw);
          const spread = spreadRaw
            ? parseCostaRicanNumber(spreadRaw)
            : parseFloat((sellRate - buyRate).toFixed(2));

          dataToInsert.push({
            entity_type: currentCategory,
            entity_name: entityName,
            buy_rate: buyRate,
            sell_rate: sellRate,
            spread: spread,
            source_updated_at: parseBCCRDate(updatedRaw),
          });
        }
      }
    } else {
      console.error(
        `Ventanilla fetch failed (${ventanillaResponse.status}): ${await ventanillaResponse.text()}`
      );
    }

    // 6. Parse BCCR Reference Rate (Indicators 317 compra / 318 venta)
    if (referenciaResponse.ok) {
      const refData = await referenciaResponse.json();
      const indicators = refData?.datos?.[0]?.indicadores || [];
      const buyRate =
        indicators.find((i) => i.codigoIndicador === "317")?.series?.[0]?.valorDatoPorPeriodo || 0;
      const sellRate =
        indicators.find((i) => i.codigoIndicador === "318")?.series?.[0]?.valorDatoPorPeriodo || 0;

      if (buyRate > 0 || sellRate > 0) {
        dataToInsert.push({
          entity_type: "Referencia BCCR",
          entity_name: "Banco Central de Costa Rica",
          buy_rate: buyRate,
          sell_rate: sellRate,
          spread: parseFloat((sellRate - buyRate).toFixed(2)),
          source_updated_at: new Date().toISOString(),
        });
      }
    } else {
      console.error(
        `Referencia fetch failed (${referenciaResponse.status}): ${await referenciaResponse.text()}`
      );
    }

    if (dataToInsert.length === 0) {
      throw new Error("No exchange rate records could be parsed from BCCR API");
    }

    // 7. Insert records into Supabase exchange_rates table
    const { error: dbError } = await supabase.from("exchange_rates").insert(dataToInsert);

    if (dbError) throw dbError;

    return new Response(
      JSON.stringify({
        status: "success",
        date: dateCR,
        inserted_count: dataToInsert.length,
        categories: [...new Set(dataToInsert.map((d) => d.entity_type))],
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});

// --- Helper Functions ---

function getCostaRicaDate() {
  const now = new Date();
  const crFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Costa_Rica",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return crFormatter.format(now);
}

function parseCostaRicanNumber(val) {
  if (!val) return 0;
  return parseFloat(val.replace(/\./g, "").replace(",", "."));
}

function parseBCCRDate(dateStr) {
  if (!dateStr) return null;
  try {
    const [datePart, timePart, ampm] = dateStr.trim().split(/\s+/);
    const [day, month, year] = datePart.split("/");
    const standardizedAMPM = ampm.toLowerCase().includes("a") ? "AM" : "PM";
    const date = new Date(`${year}-${month}-${day} ${timePart} ${standardizedAMPM} -06:00`);
    return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
  } catch {
    return new Date().toISOString();
  }
}
