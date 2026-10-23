import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border/80 bg-card py-10 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          {/* Identidad y Escudo */}
          <div className="flex flex-col items-start gap-3 md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative size-10 overflow-hidden rounded-full border border-border bg-white shadow-xs">
                <Logo />
              </div>
              <div>
                <span className="block text-[10px] font-bold tracking-wider uppercase text-muted-foreground">
                  Cuerpo Activo
                </span>
                <span className="block text-sm font-extrabold tracking-tight">
                  Bomberos Voluntarios Andalgalá
                </span>
              </div>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              Abnegación, valor y servicio constante protegiendo el Valle de
              Andalgalá y sus alrededores las 24 horas del día, los 365 días del
              año.
            </p>
          </div>

          {/* Ubicación y Vías de Contacto */}
          <div className="flex flex-col gap-2.5 text-xs text-muted-foreground md:col-span-4">
            <span className="text-xs font-bold tracking-wider uppercase text-foreground">
              Sede Central & Contacto
            </span>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>AV. Jose Pascual Jais s/n, Andalgalá, Argentina, 4740</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              <span>
                Celular:{" "}
                <a
                  href="tel:0383515523987"
                  className="font-medium text-foreground hover:underline"
                >
                  03835 15-52-3987
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="size-4 shrink-0 text-emerald-600" />
              <span>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/5493835695028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  +54 9 3835 69-5028
                </a>
              </span>
            </div>
          </div>

          {/* Redes Sociales y Aviso de Emergencia */}
          <div className="flex flex-col gap-3 md:col-span-3">
            <span className="text-xs font-bold tracking-wider uppercase text-foreground">
              Canales Oficiales
            </span>
            <div className="flex items-center gap-2">
              {/* Enlace WhatsApp (Iconify Remix Icon) */}
              <a
                href="https://wa.me/5493835695028"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a Bomberos Andalgalá por WhatsApp"
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground transition-colors hover:border-emerald-500/50 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950/40"
              >
                <span
                  className="icon-[ri--whatsapp-fill] size-4.5"
                  aria-hidden="true"
                />
              </a>

              {/* Enlace Facebook (Iconify Remix Icon) */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Página de Facebook Bomberos Voluntarios Andalgalá"
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground transition-colors hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/40"
              >
                <span
                  className="icon-[ri--facebook-fill] size-4.5"
                  aria-hidden="true"
                />
              </a>

              {/* Enlace Instagram (Iconify Remix Icon) */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de Instagram Bomberos Voluntarios Andalgalá"
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground transition-colors hover:border-pink-500/50 hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950/40"
              >
                <span
                  className="icon-[ri--instagram-fill] size-4.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
              <p className="text-[11px] leading-tight text-muted-foreground">
                Ante emergencias con riesgo de vida o fuego declarado, llame
                urgente al{" "}
                <strong className="font-extrabold text-primary">911</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Separador y Créditos Legales */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/80 pt-6 text-[11px] text-muted-foreground sm:flex-row">
          <p>
            &copy; 2026 Asociación de Bomberos Voluntarios de Andalgalá. Todos
            los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/institucional" className="hover:underline">
              Institucional
            </Link>
            <Link href="/contacto" className="hover:underline">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
