export const InteractiveMap = () => {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-border/80 bg-card shadow-xs">
      <div className="flex items-center justify-between border-b border-border/70 bg-muted/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <span
            className="icon-[lucide--map-pin] size-4 text-primary"
            aria-hidden="true"
          />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
            Ubicación del Cuartel Central
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          -27.580397, -66.314680
        </span>
      </div>
      <div className="relative h-80 w-full sm:h-95 lg:h-105">
        <iframe
          title="Ubicación de Bomberos Voluntarios de Andalgalá"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=es&q=-27.580397,%20-66.314680+(Bomberos%20Voluntarios%20de%20Andalgal%C3%A1)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          className="h-full w-full border-0 grayscale-10 contrast-[1.05] transition-all duration-300 hover:grayscale-0"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  );
};
