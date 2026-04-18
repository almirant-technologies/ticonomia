export const metadata = {
  title: "Política de Cookies | Ticonomía",
  description: "Información sobre el uso de cookies en Ticonomía.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col gap-6">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">Política de Cookies</h1>
        <p className="text-lg text-muted-foreground">
          Ticonomía utiliza cookies esenciales y analíticas básicas para recordar preferencias,
          mantener la experiencia del usuario y entender cómo se usa la plataforma.
        </p>
      </div>

      <section className="space-y-4 text-sm leading-7 text-muted-foreground">
        <p>
          Las cookies esenciales permiten que funciones clave del sitio operen correctamente,
          incluyendo la persistencia de algunas preferencias de navegación.
        </p>
        <p>
          También podemos usar medición agregada para entender qué secciones consultan más los
          usuarios y mejorar la forma en que presentamos tipos de cambio, comparaciones y contenido.
        </p>
        <p>
          Puedes borrar cookies desde tu navegador en cualquier momento. Ten en cuenta que algunas
          preferencias podrían restablecerse después de hacerlo.
        </p>
      </section>
    </div>
  );
}