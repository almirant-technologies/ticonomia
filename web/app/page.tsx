import { getLatestExchangeRates, getDisplayedEntities, ExchangeRate, DisplayedEntity } from "@/lib/services/exchange";
import { CurrencyConverter } from "@/components/currency-converter";
import { HowToSection } from "@/components/how-to-section";
import { FaqSection } from "@/components/faq-section";

function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ticonomía",
    alternateName: "Tipo de Cambio Costa Rica",
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000",
    description: "Comparador de tipo de cambio del dólar y colón en bancos físicos y entidades financieras de Costa Rica.",
    inLanguage: "es-CR"
  };
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
      />
      <h1 className="sr-only">Tipo de Cambio del Dólar a Colón en Bancos de Costa Rica</h1>
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
      <HowToSection />
      <div className="py-6">
        <FaqSection />
      </div>
    </div>
  );
}
