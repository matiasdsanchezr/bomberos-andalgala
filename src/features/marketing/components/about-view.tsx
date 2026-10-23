import { Logo } from "@/components/logo";
import Link from "next/link";
import { InteractiveMap } from "./interactive-map";

interface Milestone {
  year: string;
  act: string;
  title: string;
  description: string;
}

interface AuthorityGroup {
  division: string;
  caption: string;
  members: {
    role: string;
    name: string;
    hierarchy: string;
    detail: string;
  }[];
}

interface MobileUnit {
  code: string;
  model: string;
  type: string;
  callsign: string;
  specs: string[];
  purpose: string;
}

const HISTORICAL_MILESTONES: Milestone[] = [
  {
    year: "1971",
    act: "Acta Fundacional N° 01",
    title: "Creación de la Asociación Civil",
    description:
      "Vecinos, comerciantes y profesionales de Andalgalá constituyen formalmente la institución para dar respuesta comunitaria autónoma ante incendios forestales y de interfase.",
  },
  {
    year: "2004",
    act: "Disposición Operativa",
    title: "Primera Autobomba Forestal 4x4",
    description:
      "Se incorpora un móvil adaptado para sortear los arenales y pendientes pronunciadas de Huaco, Malli y las quebradas bajas del Aconquija.",
  },
  {
    year: "2015",
    act: "Habilitación de Infraestructura",
    title: "Inauguración del Cuartel Central",
    description:
      "Apertura formal de las instalaciones sobre la Av. José Pascual Jais, dotando al cuartel de sala de radio VHF, guardia 24hs y pañol de materiales.",
  },
  {
    year: "2021",
    act: "Resolución de Jefatura",
    title: "Brigada de Rescate Agreste (BREM)",
    description:
      "Capacitación técnica y certificación del personal en operaciones de cuerda, rescate en altura sobre la Cuesta de la Chilca y rastreo en zonas de alta montaña.",
  },
];

const LEADERSHIP: AuthorityGroup[] = [
  {
    division: "Cuerpo Activo (Mando Operativo)",
    caption: "Conducción táctica, despacho de dotaciones y disciplina bomberil",
    members: [
      {
        role: "Jefe de Cuerpo Activo",
        name: "Comandante Mayor Carlos R. Nieva",
        hierarchy: "Legajo N° 004 • 22 años de servicio",
        detail:
          "Coordinador de operaciones en siniestros de gran escala, instructor de comando de incidentes e interfase forestal.",
      },
      {
        role: "Segunda Jefa de Cuerpo",
        name: "Subcomandante Valeria Carrizo",
        hierarchy: "Legajo N° 012 • 15 años de servicio",
        detail:
          "Especialista en trauma prehospitalario, triage en accidentes sobre Ruta 46 y coordinación de la Escuela de Cadetes.",
      },
    ],
  },
  {
    division: "Comisión Directiva (Gobierno Civil)",
    caption:
      "Personería jurídica, administración de fondos y rendición de subsidios oficiales",
    members: [
      {
        role: "Presidente",
        name: "Dr. Roberto E. Albarracín",
        hierarchy: "Mandato Comunitario 2024 - 2026",
        detail:
          "Articulación institucional con Defensa Civil, Federación Catamarqueña de Bomberos y sostenimiento del cuartel.",
      },
      {
        role: "Secretario General",
        name: "Prof. Miguel Ángel Gómez",
        hierarchy: "Mandato Comunitario 2024 - 2026",
        detail:
          "Mesa de entrada, legajos de aspirantes, actas constitutivas y gestión del padrón de socios protectores.",
      },
    ],
  },
];

const FLEET_UNITS: MobileUnit[] = [
  {
    code: "MÓVIL 01",
    callsign: "A-01 URBANO",
    model: "Mercedes-Benz Atego 4x2",
    type: "Autobomba Estructural Pesada",
    specs: ["Cisterna de 4.000 Lts", "Bomba Rosenbauer", "Espuma AFFF"],
    purpose:
      "Primera salida en incendios edilicios, escuelas, comercios y siniestros con riesgo de propagación en el casco céntrico.",
  },
  {
    code: "MÓVIL 02",
    callsign: "A-02 FORESTAL",
    model: "Ford F-4000 4x4",
    type: "Unidad de Ataque Rápido Forestal",
    specs: [
      "Cisterna de 1.500 Lts",
      "Motobomba de alta presión",
      "Tracción integral",
    ],
    purpose:
      "Despliegue ágil en huellas pedregosas, pastizales de altura, Huaco, Malli, Chaquiago y faldeos del Aconquija.",
  },
  {
    code: "MÓVIL 03",
    callsign: "A-03 RESCATE",
    model: "Toyota Hilux 4x4 Técnica",
    type: "Unidad de Trauma y Extricación",
    specs: [
      "Herramientas hidráulicas Holmatro",
      "Cuerdas técnicas estáticas",
      "Oxigenoterapia",
    ],
    purpose:
      "Respuesta en colisiones vehiculares, despistes en la Cuesta de la Chilca, barrancos y primeros auxilios avanzados.",
  },
];

export const About = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-16">
      {/* HERO PRINCIPAL: HISTORIA Y FUNDAMENTOS */}
      <section className="relative border-b border-border/80 bg-card">
        {/* Grilla técnica milimétrica */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-[0.08] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col items-start lg:col-span-8">
              <div className="mt-4 flex items-center gap-4">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border-2 border-border bg-white shadow-xs sm:size-20">
                  <Logo />
                </div>
                <div>
                  <h1 className="text-2xl font-black uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    Nuestra Identidad
                  </h1>
                  <span className="text-lg font-black tracking-widest uppercase text-primary sm:text-2xl">
                    Vocación • Coraje • Comunidad
                  </span>
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
                Desde 1971, los Bomberos Voluntarios de Andalgalá cuidamos a
                nuestra gente, nuestros cerros y cada rincón del valle. Somos
                vecinos comprometidos que elegimos dar el paso al frente ante
                cualquier emergencia, combinando entrega genuina, entrenamiento
                especializado en montaña y guardia operativa las 24 horas, los
                365 días del año.
              </p>
            </div>

            {/* Recuadro de Principios Rectores */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-border/80 bg-muted/30 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                    Nuestros Valores
                  </span>
                  <span
                    className="icon-[lucide--shield-check] size-4 text-primary/80"
                    aria-hidden="true"
                  />
                </div>

                <dl className="mt-3.5 space-y-3 text-xs">
                  <div>
                    <dt className="flex items-center gap-2 font-bold text-foreground">
                      <span
                        className="size-1.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      Vocación de Servicio
                    </dt>
                    <dd className="mt-1 pl-3.5 text-muted-foreground">
                      Estar presentes en cada alerta, priorizando siempre la
                      vida y el cuidado de cada familia de nuestra comunidad.
                    </dd>
                  </div>

                  <div className="border-t border-border/60 pt-3">
                    <dt className="flex items-center gap-2 font-bold text-foreground">
                      <span
                        className="size-1.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      Coraje y Preparación
                    </dt>
                    <dd className="mt-1 pl-3.5 text-muted-foreground">
                      Entrenamiento riguroso y temple para intervenir con
                      rapidez en incendios, rescates y operaciones de alta
                      montaña.
                    </dd>
                  </div>

                  <div className="border-t border-border/60 pt-3">
                    <dt className="flex items-center gap-2 font-bold text-foreground">
                      <span
                        className="size-1.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      Corazón Comunitario
                    </dt>
                    <dd className="mt-1 pl-3.5 text-muted-foreground">
                      Un cuerpo 100% voluntario que nace del pueblo, sin fines
                      de lucro y trabajando codo a codo junto a los vecinos.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JURISDICCIÓN & COMPLEJIDAD GEOGRÁFICA */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs sm:p-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Territorio y Jurisdicción
            </span>
            <h2 className="mt-1 text-xl font-black text-foreground sm:text-2xl">
              Operaciones en Geografía de Alta Complejidad
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              La jurisdicción operativa de Andalgalá comprende más de 4.400 km²
              de contrastes topográficos. El cuerpo activo interviene en llanos
              secos, fincas productivas, quebradas cerradas y pasos de alta
              montaña que demandan pericia de conducción e indumentaria técnica
              especializada.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border/70 bg-muted/20 p-4">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <span
                  className="icon-[lucide--mountain] text-primary"
                  aria-hidden="true"
                />
                <span className="text-xs">Nevado del Aconquija</span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                Intervenciones de búsqueda, rescate y combate de focos de altura
                en pendientes que superan los 3.000 m.s.n.m., con acceso
                exclusivamente pedestre o en mulas.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-muted/20 p-4">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <span
                  className="icon-[lucide--route] text-primary"
                  aria-hidden="true"
                />
                <span className="text-xs">
                  Ruta Prov. 46 & Cuesta de la Chilca
                </span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                Traza crítica de montaña con curvas de herradura y precipicio.
                Punto neurálgico de asistencia ante colisiones, derrames de
                carga y auxilios mecánicos.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <span
                  className="icon-[lucide--wind] text-amber-600"
                  aria-hidden="true"
                />
                <span className="text-xs">
                  Interfaz Huaco, Malli y Chaquiago
                </span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                Zonas agrícolas y de monte nativo donde el Viento Zonda propaga
                focos sobre rastrojos y malezas secas amenazando viviendas de
                pobladores rurales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HITOS CRONOLÓGICOS (LIBRO HISTÓRICO) */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary">
            Trayectoria Institucional
          </span>
          <h2 className="text-xl font-black text-foreground sm:text-2xl">
            Hitos que Marcaron Nuestra Historia
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HISTORICAL_MILESTONES.map((item) => (
            <div
              key={item.year}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs font-black text-primary">
                    {item.year}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {item.act}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARQUE AUTOMOTOR TÁCTICO */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary">
              Recursos Materiales
            </span>
            <h2 className="text-xl font-black text-foreground sm:text-2xl">
              Parque Automotor y Equipamiento
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Flota mantenida rigurosamente con fondos de subsidios y donaciones
            comunitarias
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FLEET_UNITS.map((unit) => (
            <div
              key={unit.code}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-muted px-2 py-0.5 font-mono text-xs font-black text-foreground">
                    {unit.code}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-primary">
                    {unit.callsign}
                  </span>
                </div>

                <h3 className="mt-3 text-sm font-bold text-foreground">
                  {unit.model}
                </h3>
                <p className="text-xs font-medium text-muted-foreground">
                  {unit.type}
                </p>

                <div className="mt-3.5 space-y-1 rounded-xl border border-border/60 bg-muted/20 p-2.5 font-mono text-[11px]">
                  {unit.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-1.5 text-muted-foreground"
                    >
                      <span className="size-1 rounded-full bg-primary" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {unit.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUERPO ACTIVO & COMISIÓN DIRECTIVA */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary">
            Estructura Orgánica
          </span>
          <h2 className="text-xl font-black text-foreground sm:text-2xl">
            Autoridades y Conducción
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Esquema institucional reglamentado bajo la Ley Nacional 25.054 de
            Bomberos Voluntarios
          </p>
        </div>

        <div className="space-y-6">
          {LEADERSHIP.map((group) => (
            <div
              key={group.division}
              className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs sm:p-6"
            >
              <div className="border-b border-border/70 pb-3">
                <h3 className="text-sm font-black text-foreground sm:text-base">
                  {group.division}
                </h3>
                <p className="text-xs text-muted-foreground">{group.caption}</p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {group.members.map((person) => (
                  <div
                    key={person.name}
                    className="rounded-xl border border-border/60 bg-muted/20 p-4"
                  >
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                      {person.role}
                    </span>
                    <h4 className="mt-1 text-sm font-bold text-foreground">
                      {person.name}
                    </h4>
                    <span className="mt-0.5 block font-mono text-[11px] text-muted-foreground">
                      {person.hierarchy}
                    </span>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {person.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUARTEL CENTRAL & UBICACIÓN */}
      <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-primary/20 bg-muted/30 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                Sede Central y Visitas
              </span>
              <h2 className="mt-1 text-xl font-black text-foreground sm:text-2xl">
                Cuartel Operativo sobre Av. José Pascual Jais
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Nuestras puertas están abiertas para visitas escolares de
                concientización, asesoramiento técnico a comercios y recepción
                de aspirantes a la Escuela de Cadetes.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 active:scale-95"
              >
                <span>Mesa de Entrada & Contacto</span>
                <span
                  className="icon-[lucide--arrow-right] size-3.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="https://wa.me/5493835695028"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-xs font-bold text-foreground transition-colors hover:bg-muted active:scale-95"
              >
                <span
                  className="icon-[ri--whatsapp-fill] size-4 text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                <span>WhatsApp de Cuartel</span>
              </a>
            </div>
          </div>

          {/* MAPA INTERACTIVO DE UBICACIÓN */}
          <InteractiveMap />
        </div>
      </section>
    </div>
  );
};
