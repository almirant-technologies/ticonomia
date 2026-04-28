import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);
  if (!blog) return { title: "Not Found" };

  return {
    title: blog.title,
    description: blog.subtitle,
    openGraph: {
      title: blog.title,
      description: blog.subtitle,
      images: [blog.headerImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="w-full max-w-4xl mx-auto px-4 py-8">
      <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Volver a todos los blogs
      </Link>

      <div className="space-y-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight lg:leading-tight">
          {blog.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {blog.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <UserIcon className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            <time dateTime={blog.datePublished}>
              {new Date(blog.datePublished).toLocaleDateString("es-CR", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            <span>{blog.readingTime}</span>
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg border border-border/50">
        <Image
          src={blog.headerImage}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-lime-500 hover:prose-a:text-lime-600 prose-img:rounded-xl">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </article>
  );
}
