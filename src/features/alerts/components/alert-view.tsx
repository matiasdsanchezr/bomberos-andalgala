"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type AlertCategory = "all" | "fire" | "weather" | "traffic" | "resolved";
export type AlertSeverity =
  | "critical"
  | "warning"
  | "caution"
  | "info"
  | "resolved";

export interface AlertIncident {
  id: string;
  title: string;
  category: "fire" | "weather" | "traffic";
  severity: AlertSeverity;
  status: string;
  location: string;
  timestamp: string;
  description: string;
  recommendations: string[];
  deployedUnits?: string[];
  isResolved?: boolean;
}

const ACTIVE_ALERTS: AlertIncident[] = [
  {
    id: "ALT-2025-001",
    title: "Alerta Naranja por Viento Zonda y Sequía Extrema",
    category: "weather",
    severity: "critical",
    status: "Alerta Vigente",
    location: "Departamento Andalgalá (Valle central y faldeos del Aconquija)",
    timestamp: "Actualizado hace 18 min",
    description:
      "Se registran ráfagas continuas de 50 a 75 km/h con humedad relativa inferior al 12%. Índice de ignición en valores críticos. Prohibición total de cualquier tipo de fuego al aire libre.",
    recommendations: [
      "No encender fuego bajo ninguna circunstancia (ni quema de basura ni desmonte).",
      "Asegurar chapas, carteles y elementos que puedan desprenderse por las ráfagas.",
      "Evitar circular cerca de arbolado añoso o postes de tendido eléctrico.",
      "Ante columnas de humo o corte de cables, dar aviso urgente al 911 o al cuartel.",
    ],
    deployedUnits: ["Guardia de Prevención", "Móvil 02 Forestal"],
  },
  {
    id: "ALT-2025-002",
    title: "Incendio de Pastizales en Interfase de Quebrada",
    category: "fire",
    severity: "warning",
    status: "En Combate Activo",
    location: "Sector Huaco - Camino a la Toma de Agua",
    timestamp: "Actualizado hace 42 min",
    description:
      "Dotación de ataque rápido se encuentra trabajando en flanco izquierdo para frenar el avance del fuego hacia zonas pobladas y fincas productivas. Terreno pedregoso con ráfagas cambiantes.",
    recommendations: [
      "Facilitar el paso de autobombas y unidades de emergencia sobre el camino principal.",
      "Cerrar puertas y ventanas si el humo se desplaza hacia viviendas linderas.",
      "Evitar acercarse como observador a la línea de combate del fuego.",
    ],
    deployedUnits: ["Móvil 01 Pesada", "Móvil 02 4x4", "8 Efectivos"],
  },
  {
    id: "ALT-2025-003",
    title: "Calzada Reducida por Derrumbe Menor",
    category: "traffic",
    severity: "caution",
    status: "Precaución al Transitar",
    location: "Ruta Provincial 46 - Tramo Cuesta de la Chilca (Km 44)",
    timestamp: "Actualizado hace 2 horas",
    description:
      "Desprendimiento de material pétreo sobre media calzada a raíz de fuertes vientos. Vialidad provincial y dotación preventiva trabajan en el despeje y señalización.",
    recommendations: [
      "Reducir la velocidad a menos de 30 km/h al transitar por el sector de curvas.",
      "Mantener luces bajas encendidas y distancia preventiva.",
      "No detenerse en banquinas inestables ni zonas con peligro de caída de rocas.",
    ],
    deployedUnits: ["Móvil 03 Rescate Técnico"],
  },
  {
    id: "ALT-2025-004",
    title: "Foco de Quema de Rastrojos Sofocado",
    category: "fire",
    severity: "resolved",
    status: "Extinguido / Guardia de Cenizas",
    location: "Distrito Chaquiago Norte",
    timestamp: "Finalizado hace 4 horas",
    description:
      "Incidente controlado y extinguido tras 2 horas de labores de enfriamiento y cortafuegos. Se labraron actuaciones preventivas a los propietarios del predio.",
    recommendations: [
      "Se recuerda que rige la ordenanza municipal que sanciona las quemas a cielo abierto.",
    ],
    deployedUnits: ["Móvil 01 Pesada"],
    isResolved: true,
  },
];

const CATEGORY_TABS: { label: string; value: AlertCategory; icon: string }[] = [
  { label: "Todas", value: "all", icon: "icon-[lucide--layers]" },
  { label: "Incendios", value: "fire", icon: "icon-[lucide--flame]" },
  { label: "Meteorológicas", value: "weather", icon: "icon-[lucide--wind]" },
  { label: "Vialidad / Rutas", value: "traffic", icon: "icon-[lucide--car]" },
  { label: "Resueltas", value: "resolved", icon: "icon-[lucide--check-check]" },
];

export const AlertView = () => {
  const [activeCategory, setActiveCategory] = useState<AlertCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlerts = useMemo(() => {
    return ACTIVE_ALERTS.filter((item) => {
      const matchesCategory =
        activeCategory === "all"
          ? !item.isResolved
          : activeCategory === "resolved"
            ? item.isResolved
            : item.category === activeCategory && !item.isResolved;

      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-16">
      {/* BANNER INSTITUCIONAL DEL CENTRO DE ALERTAS */}
      <section className="relative overflow-hidden border-b border-primary/30 bg-primary py-12 text-primary-foreground md:py-16">
        {/* Gradiente radial de iluminación en profundidad */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.22),transparent_65%)]"
        />

        {/* Grilla técnica milimétrica en blanco sutil */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[24px_24px]"
        />

        {/* Destello ambiental inferior */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-0 size-96 rounded-full bg-black/15 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                Centro de Alertas
              </h1>
              <span className="mt-0.5 block text-lg font-black tracking-widest uppercase text-amber-300 sm:text-2xl">
                Monitoreo Operativo & Protección Civil
              </span>
              <p className="mt-4 max-w-2xl text-balance text-xs leading-relaxed text-white/90 sm:text-sm md:text-base">
                Monitoreo permanente de incendios de pastizales, eventos
                climáticos por viento Zonda, estados de transitabilidad en rutas
                de montaña y contingencias civiles en Andalgalá.
              </p>
            </div>

            {/* CAJA RÁPIDA DE EMERGENCIA 911 */}
            <div className="w-full shrink-0 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md md:w-72 md:text-left">
              <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                Canal Crítico Directo
              </span>
              <p className="mt-1 text-xs font-semibold text-white">
                Si estás observando un foco de fuego activo o colisión vial:
              </p>
              <div className="mt-3.5 flex items-center justify-center gap-2 md:justify-start">
                <a
                  href="tel:911"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-destructive px-3.5 py-2 text-xs font-black text-destructive-foreground shadow-xs transition-all hover:bg-destructive/90 active:scale-95"
                >
                  <span
                    className="icon-[lucide--phone-call] size-3.5"
                    aria-hidden="true"
                  />
                  <span>Llamar 911</span>
                </a>
                <a
                  href="tel:0383515523987"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/30 bg-white/10 px-3.5 py-2 text-xs font-bold text-white shadow-xs backdrop-blur-xs transition-colors hover:bg-white/20 active:scale-95"
                >
                  <span>Guardia Cuartel</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÍNDICE DE PELIGRO DE INCENDIOS Y ESTADO OPERATIVO */}
      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tarjeta: Riesgo de Incendio */}
          <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-shadow hover:shadow-md">
            <div>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Riesgo de Incendios
              </span>
              <h3 className="mt-1 text-sm font-bold text-destructive sm:text-base">
                Extremo (Alerta Roja)
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Baja humedad + Ráfagas Zonda
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <span
                className="icon-[lucide--flame] size-5"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Tarjeta: Estado de Rutas */}
          <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-shadow hover:shadow-md">
            <div>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Ruta Provincial 46
              </span>
              <h3 className="mt-1 text-sm font-bold text-amber-600 dark:text-amber-400 sm:text-base">
                Precaución en Cuesta
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Chilca con material en banquina
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <span
                className="icon-[lucide--traffic-cone] size-5"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Tarjeta: Guardia Cuartel */}
          <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-shadow hover:shadow-md">
            <div>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Guardia Activa
              </span>
              <h3 className="mt-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 sm:text-base">
                Dotación 100% Lista
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                12 brigadistas + 3 móviles
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <span
                className="icon-[lucide--shield-check] size-5"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTROLES: FILTROS Y BÚSQUEDA */}
      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-xs md:flex-row md:items-center md:justify-between">
          {/* Botonera de Categorías */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveCategory(tab.value)}
                  className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground active:scale-95"
                  }`}
                >
                  <span className={`${tab.icon} size-3.5`} aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Campo de Búsqueda */}
          <div className="relative w-full md:w-72">
            <span
              className="icon-[lucide--search] absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground/60"
              aria-hidden="true"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por zona o motivo..."
              className="w-full rounded-xl border border-border bg-muted/20 py-2.5 pr-3.5 pl-9 text-xs text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* LISTADO DE ALERTAS Y REPORTES */}
      <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredAlerts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-card py-16 text-center shadow-xs">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-muted/40 text-muted-foreground">
              <span
                className="icon-[lucide--shield-check] size-6"
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-3 text-base font-bold text-foreground">
              No hay alertas activas en esta categoría
            </h3>
            <p className="mt-1 max-w-sm text-xs leading-relaxed text-muted-foreground">
              No se registran novedades críticas bajo los filtros seleccionados.
              Mantené la precaución y reportá cualquier incidente sospechoso.
            </p>
            {(searchQuery !== "" || activeCategory !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 active:scale-95"
              >
                Restablecer todos los filtros
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredAlerts.map((incident) => {
              const isCrit = incident.severity === "critical";
              const isWarn = incident.severity === "warning";
              const isCaution = incident.severity === "caution";
              const isResolved = incident.severity === "resolved";

              const badgeColor = isCrit
                ? "border-destructive/30 bg-destructive/10 text-destructive"
                : isWarn
                  ? "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                  : isCaution
                    ? "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    : "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";

              return (
                <article
                  key={incident.id}
                  className={`flex flex-col justify-between rounded-2xl border bg-card p-5 shadow-xs transition-shadow hover:shadow-md sm:p-6 ${
                    isCrit
                      ? "border-destructive/40 ring-1 ring-destructive/20"
                      : "border-border/80"
                  }`}
                >
                  <div>
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
                            isCrit
                              ? "bg-destructive/10 text-destructive"
                              : isWarn
                                ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                : isCaution
                                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                  : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          }`}
                        >
                          <span
                            className={`size-5 ${
                              incident.category === "fire"
                                ? "icon-[lucide--flame]"
                                : incident.category === "weather"
                                  ? "icon-[lucide--wind]"
                                  : "icon-[lucide--car]"
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${badgeColor}`}
                            >
                              {!isResolved && (
                                <span className="mr-1.5 inline-block size-1.5 animate-ping rounded-full bg-current" />
                              )}
                              {incident.status}
                            </span>
                            <span className="font-mono text-[11px] text-muted-foreground">
                              {incident.id}
                            </span>
                          </div>
                          <h2 className="mt-2 text-sm font-bold text-foreground sm:text-base">
                            {incident.title}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 font-mono text-[11px] font-medium text-muted-foreground sm:text-right">
                        <span
                          className="icon-[lucide--clock] size-3.5"
                          aria-hidden="true"
                        />
                        <span>{incident.timestamp}</span>
                      </div>
                    </div>

                    {/* Geolocalización */}
                    <div className="mt-3.5 flex items-center gap-2 rounded-xl border border-border/60 bg-muted/20 px-3 py-2 text-xs font-semibold text-foreground">
                      <span
                        className="icon-[lucide--map-pin] size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{incident.location}</span>
                    </div>

                    {/* Descripción técnica */}
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {incident.description}
                    </p>

                    {/* Recomendaciones Operativas para la Comunidad */}
                    {incident.recommendations.length > 0 && (
                      <div className="mt-4 rounded-xl border border-border/70 bg-muted/20 p-4">
                        <span className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-foreground sm:text-xs">
                          <span
                            className="icon-[lucide--shield-alert] size-4 text-primary"
                            aria-hidden="true"
                          />
                          Instrucciones de Seguridad Ciudadana
                        </span>
                        <ul className="mt-2.5 space-y-1.5 text-xs text-muted-foreground">
                          {incident.recommendations.map((rec, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span
                                className="icon-[lucide--check] mt-0.5 size-3.5 shrink-0 text-primary"
                                aria-hidden="true"
                              />
                              <span className="leading-relaxed">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Footer de Tarjeta: Recursos desplegados y botón de reporte */}
                  <div className="mt-5 flex flex-col justify-between gap-3 border-t border-border/70 pt-3.5 sm:flex-row sm:items-center">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Recursos en terreno:
                      </span>
                      {incident.deployedUnits &&
                      incident.deployedUnits.length > 0 ? (
                        incident.deployedUnits.map((unit) => (
                          <span
                            key={unit}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-muted/30 px-2.5 py-1 font-mono text-[10px] font-semibold text-foreground"
                          >
                            <span
                              className="icon-[lucide--truck] size-3 text-primary"
                              aria-hidden="true"
                            />
                            <span>{unit}</span>
                          </span>
                        ))
                      ) : (
                        <span className="font-mono text-[11px] text-muted-foreground">
                          Monitoreo pasivo
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href="https://wa.me/5493835695028?text=Consulta%20sobre%20la%20alerta%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-xs transition-all hover:bg-muted active:scale-95"
                      >
                        <span
                          className="icon-[ri--whatsapp-fill] size-4 text-emerald-600 dark:text-emerald-400"
                          aria-hidden="true"
                        />
                        <span>Consultar Cuartel</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* LLAMADO A LA ACCIÓN: DIFUSIÓN Y PREVENCIÓN */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs sm:p-8">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                Red Comunitaria de Alertas
              </span>
              <h3 className="mt-1 text-lg font-black text-foreground sm:text-xl">
                ¿Querés recibir novedades urgentes en tu teléfono?
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Seguí el canal oficial de WhatsApp de los Bomberos Voluntarios
                de Andalgalá para avisos de corte de ruta y viento Zonda.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row">
              <a
                href="https://wa.me/5493835695028"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-emerald-700 active:scale-95"
              >
                <span
                  className="icon-[ri--whatsapp-fill] size-4"
                  aria-hidden="true"
                />
                <span>Unirme al Canal</span>
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-xs font-bold text-foreground transition-colors hover:bg-muted active:scale-95"
              >
                <span>Ver Canales de Radio</span>
                <span
                  className="icon-[lucide--chevron-right] size-3.5 text-muted-foreground"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
