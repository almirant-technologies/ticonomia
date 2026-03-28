import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { EnvVarWarning } from "@/components/env-var-warning";
import { hasEnvVars } from "@/lib/utils";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Ticonomia | Conversor de Monedas",
  description: "La forma más rápida de comparar tipos de cambio en Costa Rica.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

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
                    <Link href={"/"} className="text-lg">Ticonomia</Link>
                    <div className="hidden sm:flex items-center gap-4 text-muted-foreground ml-4">
                      <Link href={"/"} className="hover:text-foreground transition-colors">Conversor de Monedas</Link>
                      <Link href={"/blog"} className="hover:text-foreground transition-colors">Blog</Link>
                      <Link href={"/nosotros"} className="hover:text-foreground transition-colors">Nosotros</Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {!hasEnvVars && <EnvVarWarning />}
                  </div>
                </div>
              </nav>
              
              <div className="flex-1 w-full flex flex-col gap-10 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t py-8 text-sm gap-8 mt-16">
                <p>
                  Desarrollado con {" "}
                  <a
                    href="https://supabase.com"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
