import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const BCCR_API_URL = "https://apim.bccr.fi.cr/SDDE/api/Bccr.GE.SDDE.Publico.Indicadores.API/cuadro/1/series";

serve(async (req) => {
  try {
    // 1. Setup execution date in yyyy/mm/dd format [cite: 267]
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0].replace(/-/g, '/');

    // 2. Initialize Supabase Client [cite: 60]
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // 3. Retrieve the BCCR Token from Secrets [cite: 42, 56]
    const bccrToken = Deno.env.get('BCCR_SDDE_TOKEN');
    if (!bccrToken) throw new Error("Missing BCCR_SDDE_TOKEN secret");

    // 4. Fetch data using HTTPS and Bearer Authentication [cite: 48, 751]
    const url = `${BCCR_API_URL}?fechaInicio=${formattedDate}&fechaFin=${formattedDate}&idioma=ES`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${bccrToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`BCCR API Error (${response.status}): ${errorText}`); // [cite: 778]
    }

    const bccrData = await response.json();
    
    // 5. Map updated JSON structure [cite: 313, 315, 318]
    // Accessing the first element of the 'datos' array as seen in your response
    const indicators = bccrData.datos[0].indicadores;
    
    // Extract values using the specific 'valorDatoPorPeriodo' key
    const buyRate = indicators.find((i) => i.codigoIndicador === "317")?.series[0]?.valorDatoPorPeriodo || 0;
    const sellRate = indicators.find((i) => i.codigoIndicador === "318")?.series[0]?.valorDatoPorPeriodo || 0;
    
    const payload = {
      entity_type: "Referencia BCCR",
      entity_name: "Banco Central de Costa Rica",
      buy_rate: buyRate,
      sell_rate: sellRate,
      spread: parseFloat((sellRate - buyRate).toFixed(2)),
      source_updated_at: today.toISOString()
    };

    // 6. Insert the record into your table
    const { error: dbError } = await supabase
      .from('exchange_rates')
      .insert([payload]);

    if (dbError) throw dbError;

    return new Response(JSON.stringify({ status: "success", data: payload }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    return new Response(JSON.stringify({ status: "error", message: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
})