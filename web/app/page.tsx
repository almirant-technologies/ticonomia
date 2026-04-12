import { getLatestExchangeRates, getDisplayedEntities, ExchangeRate, DisplayedEntity } from "@/lib/services/exchange";
import { CurrencyConverter } from "@/components/currency-converter";

export default async function Home() {
  let exchangeRates: ExchangeRate[] | null = null;
  let displayedEntities: DisplayedEntity[] | null = null;
  let error;
  try {
    const [fetchedRates, fetchedEntities] = await Promise.all([
      getLatestExchangeRates(),
      getDisplayedEntities(),
    ]);
    exchangeRates = fetchedRates;
    displayedEntities = fetchedEntities;
  } catch (err: any) {
    error = err;
  }

  return (
    <div className="w-full flex-1 flex flex-col gap-12">
      <div className="flex flex-col gap-6 mt-8">
        {error ? (
          <div className="p-6 border rounded-lg bg-card shadow-sm">
            <h2 className="font-medium text-xl mb-2 text-destructive">Error cargando tipos de cambio</h2>
            <p className="text-sm text-destructive">{error.message}</p>
          </div>
        ) : (
          <CurrencyConverter exchangeRates={exchangeRates || []} displayedEntities={displayedEntities || []} />
        )}
      </div>
    </div>
  );
}
