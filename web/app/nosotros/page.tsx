export const metadata = {
  title: "Nosotros",
  description: "Conoce al equipo detrás de Ticonomía, tu comparador de tipo de cambio de dólares a colones en Costa Rica. Creado para brindar transparencia financiera.",
  keywords: ["sobre ticonomía", "equipo", "quiénes somos", "tipo de cambio costa rica", "transparencia de bancos", "bancos en costa rica"],
};

export default function AboutUsPage() {
  return (
    <div className="w-full flex flex-col gap-12 animate-in fade-in zoom-in duration-500">
      <div className="text-center max-w-2xl mx-auto mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Sobre Ticonomía</h1>
        <p className="text-lg text-muted-foreground">
          Nos dedicamos a brindar transparencia a los tipos de cambio, facilitando a los usuarios cotidianos la búsqueda de las mejores ofertas.
        </p>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-8 w-full">
        <div>
          <h3 className="text-2xl font-bold mb-2">Nuestra Misión</h3>
          <p className="text-muted-foreground">
            Creemos que los datos financieros deben ser accesibles para todos. Al analizar datos en tiempo real de varios bancos públicos y privados, proporcionamos una pizarra de cambios unificada para ayudarte a ahorrar dinero.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Por Qué Empezamos</h3>
          <p className="text-muted-foreground">
            El proyecto comenzó como una idea sencilla: eliminar las conjeturas al cambiar divisas. Recopilar tipos de cambio diarios manualmente es tedioso. Ticonomía automatiza este proceso de forma nativa.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Contáctanos</h3>
          <p className="text-muted-foreground">
            ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte. Puedes contactarnos en{" "}
            <a href="mailto:ticonomia@proton.me" className="font-medium text-primary hover:underline transition-all">
              ticonomia@proton.me
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
