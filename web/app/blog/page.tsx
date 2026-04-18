export const metadata = {
  title: "Noticias | Ticonomía",
  description: "Lee nuestras últimas noticias y análisis sobre el mercado cambiario.",
};

export default function BlogPage() {
  return (
    <div className="w-full flex flex-col gap-8 animate-in fade-in zoom-in duration-500">
      <div>
        <article className="grid gap-5 border bg-secondary/40 p-4 sm:p-5 lg:grid-cols-[1.1fr_1fr] lg:gap-7 lg:p-6">
          <div className="relative min-h-[220px] overflow-hidden bg-slate-800 sm:min-h-[280px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#60a5fa_0%,transparent_38%),radial-gradient(circle_at_80%_70%,#1d4ed8_0%,transparent_40%),linear-gradient(135deg,#0b1320_0%,#111827_60%,#0f172a_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0.15))]" />
            <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-slate-100/90">
              Imagen principal de apertura para la noticia destacada.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Mercado</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground lg:text-[2.15rem]">
              El dólar abre con presión moderada mientras el mercado local anticipa mayor volatilidad.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Entidades financieras reportan ajustes leves entre compra y venta, con señales mixtas en la jornada y expectativas de movimientos graduales durante la semana.
            </p>
            <div className="mt-6 text-sm text-foreground">
              <p>
                Por <span className="font-bold">Equipo Ticonomía</span>
              </p>
              <p className="text-muted-foreground">17 de abril, 2026</p>
            </div>
          </div>
        </article>

        <div className="mt-9 grid gap-8 lg:grid-cols-3">
          <article className="group flex flex-col gap-4">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,#93c5fd_0%,transparent_42%),linear-gradient(120deg,#0f172a_0%,#1e293b_65%,#0b1220_100%)] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Economia</p>
            <h3 className="text-3xl leading-tight tracking-tight text-foreground">
              Dolar y tasas locales: tres señales que estan definiendo la semana cambiaria.
            </h3>
            <div className="space-y-1 text-sm leading-5">
              <p className="text-foreground">Por <span className="font-bold">Sofia Calderon</span></p>
              <p className="text-muted-foreground">17 de abril, 2026</p>
            </div>
          </article>

          <article className="group flex flex-col gap-4">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_26%,#86efac_0%,transparent_34%),linear-gradient(130deg,#14532d_0%,#166534_48%,#052e16_100%)] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Analisis</p>
            <h3 className="text-3xl leading-tight tracking-tight text-foreground">
              Bancos y casas de cambio ajustan spreads mientras sube la demanda en ventanilla.
            </h3>
            <div className="space-y-1 text-sm leading-5">
              <p className="text-foreground">Por <span className="font-bold">Daniel Murillo</span></p>
              <p className="text-muted-foreground">17 de abril, 2026</p>
            </div>
          </article>

          <article className="group flex flex-col gap-4">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_32%,#fca5a5_0%,transparent_36%),linear-gradient(140deg,#7f1d1d_0%,#991b1b_52%,#450a0a_100%)] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Opinion</p>
            <h3 className="text-3xl leading-tight tracking-tight text-foreground">
              Que tan util es mirar promedios semanales cuando el mercado entra en ruido.
            </h3>
            <div className="space-y-1 text-sm leading-5">
              <p className="text-foreground">Por <span className="font-bold">Eva Rodriguez</span></p>
              <p className="text-muted-foreground">17 de abril, 2026</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
