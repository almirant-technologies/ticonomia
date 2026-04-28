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
