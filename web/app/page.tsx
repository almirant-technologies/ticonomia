import { getLatestExchangeRates, ExchangeRate } from "@/lib/services/exchange";
import { CurrencyConverter } from "@/components/currency-converter";

export default async function Home() {
  let data: ExchangeRate[] | null = null;
  let error;
  try {
    data = await getLatestExchangeRates();
  } catch (err: any) {
    error = err;
  }

  // Find the required entity "Banco Central de Costa Rica"
  const bccr = data?.find((d) => d.entity_name === "Banco Central de Costa Rica");
  
  // Default values if data not found (to ensure SSR doesn't fail)
  const defaultBuyRate = bccr?.buy_rate || 500;
  const defaultSellRate = bccr?.sell_rate || 510;

  return (
    <div className="w-full flex-1 flex flex-col gap-12">
      <div className="flex flex-col gap-6 mt-8">
        {error ? (
          <div className="p-6 border rounded-lg bg-card shadow-sm">
            <h2 className="font-medium text-xl mb-2 text-destructive">Error cargando tipos de cambio</h2>
            <p className="text-sm text-destructive">{error.message}</p>
          </div>
        ) : (
          <CurrencyConverter buyRate={defaultBuyRate} sellRate={defaultSellRate} />
        )}
      </div>
    </div>
  );
}
