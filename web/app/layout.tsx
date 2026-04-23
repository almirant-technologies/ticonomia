import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";
import { CookieTermsBanner } from "@/components/cookie-terms-banner";
import { HeaderNav } from "@/components/header-nav";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Script from "next/script";

const defaultUrl = process.env.NODE_ENV === "production"
  ? "https://ticonomia.com"
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";


export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Tipo de Cambio en Costa Rica | Ticonomía",
    template: "%s | Ticonomía"
  },
  description: "La forma más rápida de comparar tipos de cambio del dólar en bancos de Costa Rica. Entérate del precio de compra y venta del dólar a colones y viceversa en tiempo real.",
  keywords: ["tipo de cambio costa rica", "precio del dolar costa rica", "dólar a colón", "colón a dólar", "cambio de dolares costa rica", "compra y venta de dolares", "bancos costa rica", "conversión de moneda", "tipo de cambio bccr"],
  authors: [{ name: "Ticonomía" }],
  creator: "Ticonomía",
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: defaultUrl,
    title: "Ticonomía | Precio del Dólar en Bancos de Costa Rica",
    description: "Compara al instante el tipo de cambio del dólar a colón en las principales entidades financieras y bancos de Costa Rica.",
    siteName: "Ticonomía",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticonomía | Tipo de Cambio Costa Rica",
    description: "Comparador del precio del dólar en bancos de Costa Rica.",
  },
  alternates: {
    canonical: defaultUrl,
  }
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
      { href: "/", label: "Conversor de monedas" },
    ],
  },
  {
    title: "Ticonomía",
    links: [
      { href: "/nosotros", label: "Nosotros" },
      { href: "/fuente-datos", label: "Fuente de datos" },
      { href: "/cookies", label: "Política de cookies" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CR" suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-28EL9LWGDY" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-28EL9LWGDY');
          `}
        </Script>
      </head>
      <body className={`${geistSans.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm font-semibold">
                  <Link href={"/"} className="flex items-center" aria-label="Ticonomía home">
                    <Image
                      src="/logos/ticonomia-logo.svg"
                      alt="Ticonomía"
                      width={132}
                      height={32}
                      priority
                      className="h-8 w-auto dark:brightness-0 dark:invert"
                    />
                  </Link>
                  <HeaderNav />
                </div>
              </nav>

              <div className="flex-1 w-full flex flex-col gap-10 max-w-5xl px-5 pb-5 pt-8">
                {children}
              </div>

              <CookieTermsBanner />

              <footer className="w-full border-t border-foreground/10 mt-8 bg-secondary/20">
                <div className="mx-auto flex w-full max-w-6xl flex-col px-8 py-8 md:px-10 md:py-8">
                  <div className="flex flex-col gap-8 border-b border-foreground/10 pb-8 md:flex-row md:gap-16 lg:gap-24">
                    <div className="flex flex-col gap-4">
                      <Link href="/" className="inline-flex w-fit items-center" aria-label="Ticonomía home">
                        <Image
                          src="/logos/ticonomia-logo.svg"
                          alt="Ticonomía"
                          width={132}
                          height={32}
                          className="h-8 w-auto dark:brightness-0 dark:invert"
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

                  <div className="flex flex-col gap-4 py-6 text-[11px] leading-5 text-muted-foreground md:flex-row md:items-end md:justify-between">
                    <div className="max-w-4xl space-y-2">
                      <p>
                        &copy; 2026 Ticonomía. Todos los derechos reservados. El uso de este sitio implica la aceptación de nuestra{" "}
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
