"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Conversor de Monedas" },
  { href: "/blog", label: "Blog" },
  { href: "/nosotros", label: "Nosotros" },
];

export function HeaderNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
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
              className={`absolute -bottom-2 left-0 h-0.5 w-full bg-lime-500 transition-opacity ${
                active ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}