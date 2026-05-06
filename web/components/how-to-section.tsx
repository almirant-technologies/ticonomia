import { Coins, ArrowLeftRight, Building2, Calculator } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Coins className="w-5 h-5" />,
    title: "Elige la moneda de origen",
    description:
      'Selecciona si tienes colones o dólares usando el botón de intercambio en el encabezado de la calculadora. El título cambiará para confirmar tu selección: "Tengo colones" o "Tengo dólares".',
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    title: "Ingresa el monto",
    description:
      "Escribe la cantidad que deseas convertir en el campo de la izquierda. El resultado equivalente aparecerá automáticamente en el campo de la derecha. También puedes escribir en el campo derecho para calcular a la inversa.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Selecciona una entidad financiera",
    description:
      "Debajo de la calculadora verás las entidades disponibles. Haz clic en un banco o financiera para ver el tipo de cambio que aplica ese ente. Si no ves tu banco, usa el botón «Ver todas» para mostrar la lista completa.",
  },
  {
    icon: <ArrowLeftRight className="w-5 h-5" />,
    title: "Compara compra y venta",
    description:
      "Cada entidad muestra dos tasas: compra (lo que el banco te paga por tus dólares) y venta (lo que el banco cobra por darte dólares). La calculadora usa automáticamente la tasa correcta según la dirección de tu conversión.",
  },
];

export function HowToSection() {
  return (
    <section aria-labelledby="how-to-heading" className="flex flex-col gap-6">
      <h2 id="how-to-heading" className="text-3xl font-bold leading-tight tracking-tight">
        ¿Cómo usar la{" "}
        <span className="text-lime-500">calculadora?</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex gap-4 p-5 border rounded-lg bg-card"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
              {step.icon}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Paso {index + 1}
                </span>
              </div>
              <h3 className="font-medium text-sm">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
