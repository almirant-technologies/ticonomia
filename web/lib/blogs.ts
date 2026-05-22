import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  headerImage: string;
  datePublished: string;
  readingTime: string;
  author: string;
  file: string;
  content: string; // This could be HTML or Markdown
}

export const publishedBlogs: Omit<BlogPost, 'content'>[] = [
  {
    slug: "ahorro-elegir-mejor-tipo-cambio",
    title: "¿Qué tanto se puede ahorrar eligiendo el mejor tipo de cambio?",
    subtitle: "Analizamos el impacto que tiene comparar y elegir el mejor tipo de cambio en Costa Rica.",
    headerImage: "/blog-images/ahorro-minimo.jpg",
    datePublished: "2026-04-28",
    readingTime: "4 min",
    author: "Jose Aguilar",
    file: "content/blogs/ahorro-elegir-mejor-tipo-cambio.md",
  },
  {
    slug: "record-reservas-internacionales",
    title: "Costa Rica alcanza un nuevo récord en reservas internacionales",
    subtitle: "Las reservas internacionales de Costa Rica alcanzan un nuevo récord, superando los $20 mil millones por primera vez en la historia.",
    headerImage: "/blog-images/banco-central.jpg", // Asegúrate de que exista en /web/public
    datePublished: "2026-05-06",
    readingTime: "5 min",
    author: "Ignacio Garcia",
    file: "content/blogs/record-reservas-internacionales.md",
  },
  {
  slug: "TPM-TBP",
  title: "La Relacion entre la TPM y la TBP en Costa Rica",
  subtitle: "Analizamos la relación entre la Tasa de Política Monetaria (TPM) y la Tasa Básica Pasiva (TBP) en Costa Rica.",
  headerImage: "/blog-images/monedas-bandera.jpg", // Asegúrate de que exista en /web/public
  datePublished: "2026-05-22",
  readingTime: "5 min",
  author: "Ignacio Garcia",
  file: "content/blogs/tpm-tbp.md",
},
  {
    slug: "escudo-financiero",
    title: "El Escudo Financiero de Costa Rica",
    subtitle: "¿Por qué las Reservas Internacionales del BCCR alcanzan récords históricos?",
    headerImage: "/blog-images/grafica-reservas.png", // Asegúrate de que exista en /web/public
    datePublished: "2026-05-22",
    readingTime: "5 min",
    author: "Ignacio Garcia",
    file: "content/blogs/escudo-financiero.md",
  },
];


export function getAllBlogs(): BlogPost[] {
  return publishedBlogs.map((blog) => {
    let content = "";
    try {
      const filePath = path.join(process.cwd(), blog.file);
      content = fs.readFileSync(filePath, "utf8");
    } catch (e) {
      console.warn(`Could not read markdown file for blog ${blog.slug}`);
    }
    return { ...blog, content };
  });
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const blog = publishedBlogs.find((b) => b.slug === slug);
  if (!blog) return undefined;

  let content = "";
  try {
    const filePath = path.join(process.cwd(), blog.file);
    content = fs.readFileSync(filePath, "utf8");
  } catch (e) {
    console.warn(`Could not read markdown file for blog ${blog.slug}`);
  }

  return { ...blog, content };
}
