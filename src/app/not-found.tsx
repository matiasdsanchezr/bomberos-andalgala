import { Logo } from "@/components/logo";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-muted/20 px-4 py-12 pb-24 sm:px-6 md:pb-16 lg:px-8">
      {/* Contenedor Principal Estilo Tarjeta Táctica */}
      <div className="w-full max-w-xl rounded-3xl border border-border/80 bg-card p-6 text-center shadow-xs sm:p-10">
        {/* Identidad y Escudo */}
        <div className="relative mx-auto size-20 overflow-hidden rounded-full border-2 border-border bg-white shadow-xs sm:size-24">
          <Logo />
        </div>

        {/* Badge Táctico de Estado */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-destructive">
          <span
            className="icon-[lucide--radio-tower] size-3.5 animate-pulse"
            aria-hidden="true"
          />
          <span>Error 404</span>
        </div>

        {/* Titular */}
        <h1 className="mt-4 text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl">
          Página no encontrada
        </h1>

        {/* Explicación Operativa */}
        <p className="mt-3 text-balance text-xs leading-relaxed text-muted-foreground sm:text-sm">
          La página o el reporte al que intentás acceder no existe, ha sido
          reubicado o se encuentra temporalmente fuera de servicio.
        </p>

        {/* Módulo de Advertencia de Emergencias */}
        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-left">
          <div className="flex items-start gap-3">
            <span
              className="icon-[lucide--siren] mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div className="flex flex-col text-xs">
              <span className="font-bold text-foreground">
                ¿Buscabas reportar un siniestro o solicitar auxilio?
              </span>
              <p className="mt-0.5 text-muted-foreground">
                No pierdas tiempo buscando enlaces. Comunicate de inmediato con
                la guardia permanente al{" "}
                <a
                  href="tel:0383515523987"
                  className="font-bold text-primary underline"
                >
                  03835 15-52-3987
                </a>{" "}
                o al servicio de emergencias{" "}
                <a href="tel:911" className="font-bold text-primary underline">
                  911
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Botonera de Redirección y Acciones Rápidas */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:bg-primary/90 active:scale-95"
          >
            <span className="icon-[lucide--home] size-4" aria-hidden="true" />
            Volver a Inicio
          </Link>

          <Link
            href="/alertas"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 px-5 py-3 text-xs font-bold text-foreground transition-all hover:bg-muted active:scale-95"
          >
            <span
              className="icon-[lucide--bell] size-4 text-amber-600"
              aria-hidden="true"
            />
            Centro de Alertas
          </Link>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 px-5 py-3 text-xs font-bold text-foreground transition-all hover:bg-muted active:scale-95"
          >
            <span
              className="icon-[lucide--phone] size-4 text-emerald-600"
              aria-hidden="true"
            />
            Canales de Guardia
          </Link>
        </div>

        {/* Pie de Coordenadas */}
        <div className="mt-8 border-t border-border/70 pt-4 font-mono text-[11px] text-muted-foreground/80">
          Jurisdicción Operativa Andalgalá • Catamarca
        </div>
      </div>
    </div>
  );
}
