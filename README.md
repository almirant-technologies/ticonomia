# Ticonomía

Ticonomía es un conversor de monedas y visor de tipos de cambio centrado en Costa Rica. El proyecto incluye información obtenida de distintas entidades financieras para ofrecer información actualizada y herramientas útiles directamente en [ticonomia.com](https://ticonomia.com).

## 🗂️ Estructura del Proyecto

* `/web`: Contiene la aplicación web creada con Next.js y Tailwind CSS.
* `/database`: Contiene el esquema y vistas de la base de datos (PostgreSQL).
* `/scripts`: Tareas programadas e importación de datos.

---

## 🚀 Tecnologías Principales

- **Framework:** Next.js (App Router)
- **Estilos:** Tailwind CSS
- **Base de Datos:** Supabase (PostgreSQL)
- **Despliegue:** Vercel

---

## 🛠️ Entorno de Desarrollo (Local)

El código fuente se encuentra disponible públicamente para fines ilustrativos. Para ejecutar la aplicación localmente, se requiere acceso a las variables de entorno (base de datos y API) que no están incluidas en este repositorio.

```bash
cd web
npm install
npm run dev
```

Aplicación disponible en [http://localhost:3000](http://localhost:3000).

---

## 📝 Cómo crear un nuevo artículo del Blog

Para publicar una nueva entrada en el blog de Ticonomía, sigue estos dos sencillos pasos:

1. **Crear el archivo de contenido:**
   Crea un nuevo archivo con extensión `.md` (Markdown) dentro de la carpeta `web/content/blogs/`. El nombre del archivo debe ser el "slug" (identificador en la URL) de tu artículo. Por ejemplo: `web/content/blogs/mi-nuevo-articulo.md`.
   Escribe el cuerpo del post utilizando el formato Markdown.

2. **Registrar la metadata:**
   Abre el archivo `web/lib/blogs.ts` y agrega un nuevo objeto al inicio del arreglo `publishedBlogs` con toda la información de la publicación. Asegúrate de que el campo `file` apunte exactamente al archivo que acabas de crear.

```typescript
{
  slug: "mi-nuevo-articulo",
  title: "El Título de mi Nuevo Artículo",
  subtitle: "Un subtítulo descriptivo que aparecerá en la tarjeta.",
  headerImage: "/blog-images/mi-imagen.jpg", // Asegúrate de que exista en /web/public
  datePublished: "2026-05-01",
  readingTime: "5 min",
  author: "Tu Nombre",
  file: "content/blogs/mi-nuevo-articulo.md",
}
```

---

## 📄 Licencia

Este proyecto se distribuye bajo una licencia de software **propietario**. El código es público por transparencia, pero **no es de código abierto (Open Source)**.

El uso, modificación, distribución o copia no autorizada de este código, en parte o en su totalidad, está estrictamente prohibido. Para obtener más información, consulta el archivo [LICENSE](./LICENSE).

