import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  try {
    // 1. Initialize Supabase Client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 2. Fetch the Web Page
    const url = "https://gee.bccr.fi.cr/IndicadoresEconomicos/Cuadros/frmConsultaTCVentanilla.aspx";
    const response = await fetch(url);
    const html = await response.text();

    // 3. Parse the HTML
    const document = new DOMParser().parseFromString(html, "text/html");
    if (!document) throw new Error("Could not parse HTML");

    const table = document.querySelector("#DG");
    if (!table) throw new Error("Exchange rate table not found");

    const rows = table.querySelectorAll("tr");
    const dataToInsert = [];
    let currentCategory = "";

    // Skip header row (index 0)
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].querySelectorAll("td");
      if (cells.length < 6) continue;

      // Extract raw text
      const typeText = cells[0].textContent.trim().replace(/\u00a0/g, ""); // Clean &nbsp;
      const entityName = cells[1].textContent.trim();
      const buyRaw = cells[2].textContent.trim();
      const sellRaw = cells[3].textContent.trim();
      const spreadRaw = cells[4].textContent.trim();
      const updatedRaw = cells[5].textContent.trim().replace(/\u00a0/g, " ");

      // Carry forward logic for "Tipo de Entidad"
      if (typeText !== "") {
        currentCategory = typeText;
      }

      // Skip rows that aren't actual bank data (like the empty footer row)
      if (!entityName || buyRaw === "") continue;

      // Data Transformation
      dataToInsert.push({
        entity_type: currentCategory,
        entity_name: entityName,
        buy_rate: parseCostaRicanNumber(buyRaw),
        sell_rate: parseCostaRicanNumber(sellRaw),
        spread: parseCostaRicanNumber(spreadRaw),
        source_updated_at: parseBCCRDate(updatedRaw)
      });
    }

    // 4. Insert into Database
    const { error } = await supabase
      .from('exchange_rates')
      .insert(dataToInsert);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, count: dataToInsert.length }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
});

// --- Helper Functions ---

function parseCostaRicanNumber(val) {
  // Converts "458,00" -> 458.00
  return parseFloat(val.replace(/\./g, "").replace(",", "."));
}

function parseBCCRDate(dateStr) {
  // Format: "26/03/2026 08:39 a.m."
  try {
    const [datePart, timePart, ampm] = dateStr.split(/\s+/);
    const [day, month, year] = datePart.split("/");
    
    // Standardize AM/PM for JS Date constructor
    const standardizedAMPM = ampm.toLowerCase().includes("a") ? "AM" : "PM";
    
    // Create an ISO string format: YYYY-MM-DDTHH:mm:00
    // Note: This assumes the server time is aligned with Costa Rica (CST)
    const date = new Date(`${year}-${month}-${day} ${timePart} ${standardizedAMPM}`);
    return date.toISOString();
  } catch {
    return null;
  }
}