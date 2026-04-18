import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";
import { CookieTermsBanner } from "@/components/cookie-terms-banner";
import { HeaderNav } from "@/components/header-nav";
import { ThemeSwitcher } from "@/components/theme-switcher";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Ticonomía | Conversor de Monedas",
  description: "La forma más rápida de comparar tipos de cambio en Costa Rica.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const footerSections = [
  {
    title: "Explorar",
    links: [
      { href: "/", label: "Inicio" },
      { href: "/", label: "Conversor de monedas" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Contenido",
    links: [
      { href: "/", label: "Tipos de cambio" },
      { href: "/", label: "Compra y venta" },
      { href: "/", label: "Comparar entidades" },
    ],
  },
  {
    title: "Ticonomía",
    links: [
      { href: "/nosotros", label: "Nosotros" },
      { href: "/nosotros", label: "Nuestra misión" },
      { href: "/nosotros", label: "Transparencia" },
      { href: "/blog", label: "Columna de opinion" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-6 items-center font-semibold">
                    <Link href={"/"} className="flex items-center" aria-label="Ticonomía home">
                      <Image
                        src="/logos/ticonomia%20logo.svg"
                        alt="Ticonomía"
                        width={148}
                        height={36}
                        priority
                        className="h-9 w-auto dark:brightness-0 dark:invert"
                      />
                    </Link>
                    <HeaderNav />
                  </div>
                  <div className="flex items-center gap-4">
                  </div>
                </div>
              </nav>

              <div className="flex-1 w-full flex flex-col gap-10 max-w-5xl px-5 pb-5 pt-8">
                {children}
              </div>

              <CookieTermsBanner />

              <footer className="w-full border-t border-foreground/10 mt-16 bg-secondary/20">
                <div className="mx-auto flex w-full max-w-6xl flex-col px-8 py-14 md:px-10 md:py-16">
                  <div className="grid gap-14 border-b border-foreground/10 pb-14 md:grid-cols-[148px_1fr] md:gap-20 lg:grid-cols-[148px_repeat(3,minmax(0,1fr))]">
                    <div className="flex flex-col gap-4">
                      <Link href="/" className="inline-flex w-fit items-center" aria-label="Ticonomía home">
                        <Image
                          src="/logos/ticonomia%20logo.svg"
                          alt="Ticonomía"
                          width={96}
                          height={96}
                          className="h-12 w-auto dark:brightness-0 dark:invert"
                        />
                      </Link>
                      <p className="max-w-[11rem] text-xs leading-5 text-muted-foreground">
                        Herramienta Financiera y contenido independiente.
                      </p>
                    </div>

                    {footerSections.map((section) => (
                      <div key={section.title} className="space-y-4">
                        <h2 className="text-sm font-semibold text-foreground">
                          {section.title}
                        </h2>
                        <ul className="space-y-3 text-[13px] leading-5 text-foreground/90">
                          {section.links.map((link) => (
                            <li key={`${section.title}-${link.label}`}>
                              <Link
                                href={link.href}
                                className="transition-colors hover:text-foreground/60"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-7 py-9 text-[11px] leading-5 text-muted-foreground md:flex-row md:items-end md:justify-between">
                    <div className="max-w-4xl space-y-2">
                      <p>
                        &copy; 2026 Ticonomía. Todos los derechos reservados. El uso de este sitio implica la aceptación de nuestros{" "}
                        <Link href="/terminos" className="underline decoration-foreground/30 underline-offset-2 hover:text-foreground">
                          términos y condiciones
                        </Link>{" "}
                        y la{" "}
                        <Link href="/cookies" className="underline decoration-foreground/30 underline-offset-2 hover:text-foreground">
                          política de cookies
                        </Link>
                        .
                      </p>
                      <p>
                        Ticonomía reúne datos públicos de entidades financieras para facilitar la comparación de tipos de cambio en Costa Rica. La información puede cambiar sin previo aviso.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 md:justify-end">
                      <ThemeSwitcher />
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
