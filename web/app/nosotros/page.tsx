export const metadata = {
  title: "Nosotros | Ticonomía",
  description: "Aprende más sobre el equipo detrás de Ticonomía.",
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

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-muted rounded-2xl p-8 aspect-video flex items-center justify-center">
          {/* Placeholder for a nice image or illustration */}
          <p className="text-muted-foreground font-medium">[ Ilustración del Equipo de Oficina ]</p>
        </div>

        <div className="flex flex-col gap-6">
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

          <div className="mt-4 pt-4 border-t">
            <p className="italic text-sm text-muted-foreground">
              "Brindando transparencia donde importa."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
