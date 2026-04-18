import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";

function getSupabasePublicConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error(
      "Faltan variables de entorno de Supabase. Configure NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY en web/.env.local."
    );
  }

  return { url, publishableKey };
}

// Type definition for the data retrieved from the v_latest_exchange_board view
export type ExchangeRate = {
  entity_type: string;
  entity_name: string;
  buy_rate: number;
  sell_rate: number;
  spread: number | null;
  source_updated_at: string | null;
  created_at: string;
};

/**
 * Fetches the latest exchange rates from Supabase.
 * The results are cached using Next.js unstable_cache, greatly reducing DB loads
 * since this data doesn't update very frequently.
 */
export const getLatestExchangeRates = unstable_cache(
  async (): Promise<ExchangeRate[]> => {
    const { url, publishableKey } = getSupabasePublicConfig();
    const supabase = createClient(url, publishableKey);
    const { data, error } = await supabase
      .from("v_latest_exchange_board")
      .select("*");

    if (error) {
      console.error("Error fetching exchange rates:", error);
      throw new Error(error.message);
    }

    return data as ExchangeRate[];
  },
  ["latest-exchange-rates"], // Cache key
  {
    revalidate: 3600, // Revalidate cache every 1 hour (3600 seconds)
    tags: ["exchange-rates"], // Tag for on-demand revalidation if needed
  }
);

// Type definition for the data retrieved from the vw_displayed_entities view
export type DisplayedEntity = {
  id: string;
  entity_name: string;
  entity_type: string;
  preferred_entity: boolean;
};

/**
 * Fetches the displayed entities from Supabase.
 * The results are cached using Next.js unstable_cache.
 */
export const getDisplayedEntities = unstable_cache(
  async (): Promise<DisplayedEntity[]> => {
    const { url, publishableKey } = getSupabasePublicConfig();
    const supabase = createClient(url, publishableKey);
    const { data, error } = await supabase
      .from("vw_displayed_entities")
      .select("*");

    if (error) {
      console.error("Error fetching displayed entities:", error);
      throw new Error(error.message);
    }

    return data as DisplayedEntity[];
  },
  ["displayed-entities"], // Cache key
  {
    revalidate: 3600, // Revalidate cache every 1 hour (3600 seconds)
    tags: ["displayed-entities"], // Tag for on-demand revalidation if needed
  }
);
