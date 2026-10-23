"use client";

import { Bell, Home, Phone, Shield, Siren } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

interface NavItem {
  label: string;
  href: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Alertas", href: "/alertas", icon: Bell },
  { label: "Institucional", href: "/institucional", icon: Shield },
  { label: "Contacto", href: "/contacto", icon: Phone },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* DESKTOP (>= 768px) */}
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/80 max-md:hidden">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Identidad Institucional */}
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="relative size-10 overflow-hidden rounded-full border border-border bg-white shadow-xs">
              <Logo />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                Andalgalá
              </span>
              <span className="text-sm font-extrabold tracking-tight text-foreground uppercase">
                Bomberos Voluntarios
              </span>
            </div>
          </Link>

          {/* Menú de Enlaces */}
          <nav
            aria-label="Navegación principal desktop"
            className="flex items-center gap-1"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Botón de Emergencia 911 */}
          <div className="flex items-center gap-3">
            <span
              aria-label="Llamar al número de emergencias 911"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2 text-xs font-black text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-md active:scale-95 cursor-default"
            >
              <Siren className="size-4 animate-pulse" />
              <span>EMERGENCIA 911</span>
            </span>
          </div>
        </div>
      </header>

      {/* MOBILE (< 768px) */}
      <nav
        aria-label="Navegación inferior móvil"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/85 pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <div className="mx-auto grid h-16 max-w-md grid-cols-4 items-center px-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 py-1.5 transition-colors ${
                  isActive
                    ? "font-bold text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div
                  className={`flex size-8 items-center justify-center rounded-xl transition-all ${
                    isActive ? "bg-primary/10 text-primary" : ""
                  }`}
                >
                  <Icon
                    className={`size-5 transition-transform ${
                      isActive ? "scale-105 stroke-[2.5]" : "stroke-[1.8]"
                    }`}
                  />
                </div>
                <span className="text-[11px] leading-none tracking-tight">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
