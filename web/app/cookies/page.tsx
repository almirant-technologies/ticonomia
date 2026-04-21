export const metadata = {
  title: "Política de Cookies",
  description: "Información sobre el uso de cookies en Ticonomía.",
};

export default function CookiesPage() {
  return (
    <div className="w-full flex flex-col gap-12 animate-in fade-in zoom-in duration-500">
      <div className="text-center max-w-2xl mx-auto mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Política de Cookies</h1>
        <p className="text-lg text-muted-foreground">
          Ticonomía utiliza cookies esenciales y analíticas básicas para recordar preferencias,
          mantener la experiencia del usuario y entender cómo se usa la plataforma.
        </p>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-8 w-full">
        <div>
          <h3 className="text-2xl font-bold mb-2">Cookies Esenciales</h3>
          <p className="text-muted-foreground">
            Las cookies esenciales permiten que funciones clave del sitio operen correctamente,
            incluyendo la persistencia de algunas preferencias de navegación.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Medición y Análisis</h3>
          <p className="text-muted-foreground">
            También podemos usar medición agregada para entender qué secciones consultan más los
            usuarios y mejorar la forma en que presentamos tipos de cambio, comparaciones y contenido.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Control de Cookies</h3>
          <p className="text-muted-foreground">
            Puedes borrar cookies desde tu navegador en cualquier momento. Ten en cuenta que algunas
            preferencias podrían restablecerse después de hacerlo.
          </p>
        </div>
      </div>
    </div>
  );
}