export const metadata = {
  title: "Términos y Condiciones | Ticonomía",
  description: "Términos y condiciones de uso de Ticonomía.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col gap-6">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">Términos y Condiciones</h1>
        <p className="text-lg text-muted-foreground">
          Al usar Ticonomía, aceptas que la información publicada tiene fines informativos y que
          los tipos de cambio pueden variar sin previo aviso según la entidad financiera.
        </p>
      </div>

      <section className="space-y-4 text-sm leading-7 text-muted-foreground">
        <p>
          Hacemos un esfuerzo razonable por mostrar datos actualizados y consistentes, pero no
          garantizamos exactitud absoluta, disponibilidad continua ni idoneidad para decisiones
          financieras específicas.
        </p>
        <p>
          Antes de realizar una transacción, te recomendamos confirmar directamente con la entidad
          financiera correspondiente los tipos de compra, venta y cualquier comisión aplicable.
        </p>
        <p>
          El uso continuado del sitio después de cambios relevantes en estas condiciones implica la
          aceptación de la versión más reciente publicada.
        </p>
      </section>
    </div>
  );
}