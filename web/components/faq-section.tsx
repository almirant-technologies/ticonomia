"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "¿Qué es el tipo de cambio de compra y de venta?",
    answer:
      "El tipo de cambio de compra es el precio al que un banco le compra dólares a usted (usted vende dólares y recibe colones). El tipo de cambio de venta es el precio al que le venden dólares (usted entrega colones y recibe dólares). La diferencia entre ambos es la ganancia del intermediario.",
  },
  {
    question: "¿Con qué frecuencia se actualizan los tipos de cambio?",
    answer:
      "Los tipos de cambio se actualizan de forma diaria con los datos publicados por el Banco Central de Costa Rica (BCCR) y las entidades financieras participantes. Le recomendamos verificar siempre el tipo de cambio vigente antes de realizar cualquier transacción.",
  },
  {
    question: "¿De dónde provienen los datos?",
    answer:
      "Los datos son obtenidos directamente del Banco Central de Costa Rica (BCCR), la fuente oficial del tipo de cambio en el país. Para más detalles, puede visitar nuestra sección de Fuente de Datos.",
  },
  {
    question: "¿Cuál entidad ofrece el mejor tipo de cambio?",
    answer:
      "El mejor tipo de cambio depende de si usted desea comprar o vender dólares y del momento en que realice la transacción. Use nuestra calculadora para comparar las diferentes entidades y encontrar la que más le convenga según su necesidad.",
  },
  {
    question: "¿Los tipos de cambio mostrados son exactamente los que aplican en ventanilla?",
    answer:
      "Los valores mostrados reflejan los tipos de cambio publicados oficialmente por cada entidad. Sin embargo, el tipo de cambio aplicado en ventanilla o en transferencias puede variar ligeramente. Siempre confirme el tipo de cambio vigente directamente con su banco antes de realizar una operación.",
  },
  {
    question: "¿Puedo usar esta calculadora para transacciones en otros países?",
    answer:
      "No. Esta herramienta está diseñada exclusivamente para el mercado costarricense, mostrando los tipos de cambio entre el colón costarricense (CRC) y el dólar estadounidense (USD) en bancos y entidades financieras de Costa Rica.",
  },
];

function FaqItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`border rounded-xl px-5 py-4 transition-colors ${isOpen ? "bg-card" : "bg-card hover:bg-muted/50"}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-4 text-left text-sm font-medium"
        aria-expanded={isOpen}
      >
        <span className={isOpen ? "" : "text-muted-foreground"}>{item.question}</span>
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-lime-500 shrink-0">
          <ChevronDown
            className={`w-4 h-4 text-white transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>
      {isOpen && (
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
      )}
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-labelledby="faq-heading" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* Left: heading block */}
      <div className="flex flex-col gap-4">
        <h2 id="faq-heading" className="text-3xl font-bold leading-tight tracking-tight">
          Preguntas{" "}
          <span className="text-lime-500">Frecuentes</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Resolvemos las dudas más comunes sobre el tipo de cambio, los datos que usamos y cómo sacarle el mayor provecho a nuestra calculadora.
        </p>
      </div>

      {/* Right: accordion */}
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            item={faq}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
