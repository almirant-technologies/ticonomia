"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { href: "/", label: "Conversor de Monedas" },
  { href: "/nosotros", label: "Nosotros" },
];

export function HeaderNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <div className="hidden sm:flex items-center gap-8 ml-4">
        {items.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="relative inline-flex items-center py-1 font-bold text-black transition-colors hover:text-black/75 dark:text-white dark:hover:text-white/75"
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-lime-500 transition-opacity ${
                  active ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <div className="sm:hidden flex items-center ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -mr-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-foreground/10 p-4 flex flex-col items-end gap-4 shadow-lg z-50">
            {items.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className="relative inline-flex w-fit items-center py-2 font-bold text-black transition-colors hover:text-black/75 dark:text-white dark:hover:text-white/75"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-1 left-0 h-0.5 w-full bg-lime-500 transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}