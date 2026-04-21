import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fuente de Datos | BCCR y Bancos",
  description: "Descubre cómo obtenemos los datos oficiales del tipo de cambio del dólar en el Banco Central de Costa Rica (BCCR) y entidades financieras costarricenses.",
  keywords: ["bccr", "banco central de costa rica", "fuente de datos", "indicadores económicos", "tipo de cambio oficial", "bancos costa rica"],
};

export default function FuenteDatosPage() {
  return (
    <div className="w-full flex flex-col gap-12 animate-in fade-in zoom-in duration-500">
      <div className="text-center max-w-2xl mx-auto mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Fuente de Datos</h1>
        <p className="text-lg text-muted-foreground">
          En Ticonomía nos comprometemos a brindar información precisa y actualizada sobre los tipos de cambio en Costa Rica. Para lograr esto, obtenemos nuestros datos de fuentes oficiales e implementamos estrategias para optimizar las consultas.
        </p>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-8 w-full">
        <div>
          <h3 className="text-2xl font-bold mb-2">¿De dónde obtenemos la información?</h3>
          <p className="text-muted-foreground mb-4">
            Toda la información referente a la compra y venta de divisas en las ventanillas de las entidades financieras es consultada directamente desde el servicio oficial del Banco Central de Costa Rica (BCCR).
          </p>
          <p className="text-muted-foreground">
            El origen específico de nuestros datos proviene de la ventanilla del BCCR:{" "}
            <a
              href="https://gee.bccr.fi.cr/IndicadoresEconomicos/Cuadros/frmConsultaTCVentanilla.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline break-all transition-all"
            >
              https://gee.bccr.fi.cr/IndicadoresEconomicos/Cuadros/frmConsultaTCVentanilla.aspx
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Frecuencia de Actualización</h3>
          <p className="text-muted-foreground mb-4">
            Con el objetivo de reducir el volumen de transacciones en nuestros servidores y en el BCCR, hemos configurado un sistema de actualización programada que obedece a las horas de mayor relevancia comercial y bancaria en Costa Rica (GMT-6).
          </p>
          <p className="text-muted-foreground mb-4">
            Sincronizamos los datos a diario en los siguientes horarios locales:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-muted-foreground bg-secondary/20 p-6 rounded-lg border border-border">
            <li><strong>07:00 a. m.</strong></li>
            <li><strong>09:00 a. m.</strong></li>
            <li><strong>11:00 a. m.</strong></li>
            <li><strong>01:00 p. m.</strong></li>
            <li><strong>03:00 p. m.</strong></li>
            <li><strong>05:00 p. m.</strong></li>
          </ul>
          <p className="text-muted-foreground">
            Seleccionamos estas horas específicas porque garantizan disponer de la información más actualizada al abrir el mercado y a lo largo de la jornada de mayor interés bancario. Al mismo tiempo, realizamos un uso responsable y eficiente de los recursos tecnológicos.
          </p>
        </div>
      </div>
    </div>
  );
}
