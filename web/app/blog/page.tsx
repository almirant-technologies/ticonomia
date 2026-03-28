export const metadata = {
  title: "Blog | Ticonomia",
  description: "Lee nuestras últimas actualizaciones sobre conversión de divisas.",
};

export default function BlogPage() {
  return (
    <div className="w-full flex flex-col gap-8 animate-in fade-in zoom-in duration-500">
      <div className="prose dark:prose-invert">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Nuestro Blog</h1>
        <p className="text-lg text-muted-foreground mb-8">
          ¡Bienvenido al blog de Ticonomia! Aquí encontrarás las últimas noticias, actualizaciones y análisis profundos sobre las tendencias de las divisas.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Dummy Post 1 */}
          <article className="border rounded-xl p-6 shadow-sm bg-card hover:shadow-md transition-shadow">
            <p className="text-sm text-muted-foreground mb-2">28 de marzo de 2026</p>
            <h2 className="text-xl font-bold mb-3">Entendiendo los Diferenciales Cambiarios</h2>
            <p className="text-muted-foreground mb-4 line-clamp-3">
              Aprende los conceptos básicos de los tipos de compra y venta, cómo los bancos calculan sus diferenciales cambiarios y qué significa esto para tu bolsillo al cambiar efectivo.
            </p>
            <button className="text-primary font-medium hover:underline">Leer más →</button>
          </article>

          {/* Dummy Post 2 */}
          <article className="border rounded-xl p-6 shadow-sm bg-card hover:shadow-md transition-shadow">
            <p className="text-sm text-muted-foreground mb-2">15 de marzo de 2026</p>
            <h2 className="text-xl font-bold mb-3">Los 5 Mejores Lugares para Cambiar Moneda</h2>
            <p className="text-muted-foreground mb-4 line-clamp-3">
              Analizamos los datos de v_latest_exchange_board para descubrir qué instituciones ofrecen consistentemente los mejores tipos de cambio.
            </p>
            <button className="text-primary font-medium hover:underline">Leer más →</button>
          </article>

          {/* Dummy Post 3 */}
          <article className="border rounded-xl p-6 shadow-sm bg-card hover:shadow-md transition-shadow">
            <p className="text-sm text-muted-foreground mb-2">28 de febrero de 2026</p>
            <h2 className="text-xl font-bold mb-3">Por Qué Importan los Tipos de Cambio Históricos</h2>
            <p className="text-muted-foreground mb-4 line-clamp-3">
              Un análisis profundo de las tendencias de datos históricos y cómo mirar hacia el pasado puede ayudarte a tomar mejores decisiones financieras en el futuro.
            </p>
            <button className="text-primary font-medium hover:underline">Leer más →</button>
          </article>
        </div>
      </div>
    </div>
  );
}
