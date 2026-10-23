import Link from "next/link";

interface InstitutionalBannerProps {
  institutionName?: string;
  portalUrl?: string;
  subAgency?: string;
}

export function InstitutionalBanner({
  institutionName = "Gobierno de la República",
  portalUrl = "https://www.gob.example",
  subAgency = "Secretaría de Innovación y Tecnología",
}: InstitutionalBannerProps) {
  return (
    <aside
      aria-label="Cintillo institucional oficial"
      className="w-full border-b border-border/40 bg-muted/60 text-muted-foreground backdrop-blur-sm"
    >
      <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-3 text-[11px] sm:h-9 sm:px-4 md:text-xs">
        <div className="flex min-w-0 items-center gap-2">
          <span
            className="icon-[lucide--landmark] size-3.5 shrink-0 text-foreground/80 sm:size-4"
            aria-hidden="true"
          />

          <div className="flex min-w-0 items-center gap-1.5 truncate">
            <span className="truncate font-semibold tracking-tight text-foreground">
              {institutionName}
            </span>

            <span
              className="hidden text-muted-foreground/60 sm:inline"
              aria-hidden="true"
            >
              |
            </span>
            <span className="hidden truncate text-muted-foreground/90 sm:inline">
              {subAgency}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 font-medium transition-colors hover:bg-background/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <span className="sm:hidden">Portal</span>
            <span className="hidden sm:inline">Portal Oficial</span>
            <span
              className="icon-[lucide--external-link] size-3 opacity-70"
              aria-hidden="true"
            />
            <span className="sr-only">Abre en una nueva ventana</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
