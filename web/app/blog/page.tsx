import { getAllBlogs } from "@/lib/blogs";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "Artículos sobre economía, tipo de cambio y finanzas personales en Costa Rica.",
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Descubre los últimos artículos sobre economía, el tipo de cambio y finanzas en Costa Rica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`} className="transition-transform hover:-translate-y-1">
            <Card className="h-full flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-muted/50 hover:border-lime-500/50 transition-colors">
              <div className="relative w-full h-48">
                <Image
                  src={blog.headerImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="flex-1 pb-4">
                <div className="flex flex-wrap items-center gap-4 mb-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <UserIcon className="w-3 h-3" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-3 h-3" />
                    <span>{new Date(blog.datePublished).toLocaleDateString("es-CR", { year: "numeric", month: "long", day: "numeric" })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-3 h-3" />
                    <span>{blog.readingTime}</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-2 hover:text-lime-500 transition-colors">
                  {blog.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-2">
                  {blog.subtitle}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
