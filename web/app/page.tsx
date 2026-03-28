import { Hero } from "@/components/hero";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("v_latest_exchange_board").select("*");

  return (
    <div className="w-full flex-1 flex flex-col gap-12">
      <Hero />
      <div className="flex flex-col gap-6 mt-8">
        <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
          <h2 className="font-medium text-xl mb-2">Prueba de Conexión a Supabase</h2>
          {error ? (
            <p className="text-destructive text-sm">Error: {error.message}</p>
          ) : (
            <p>
              Se recuperaron <span className="font-bold text-primary">{data?.length || 0}</span> registros de <code>v_latest_exchange_board</code>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
