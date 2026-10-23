import { Logo } from "@/components/logo";
import Link from "next/link";

interface TacticalPillar {
  title: string;
  badge: string;
  description: string;
  icon: string;
}

const OPERATIONAL_PILLARS: TacticalPillar[] = [
  {
    title: "Combate de Incendios Forestales e Interfaz",
    badge: "Brigada Agreste",
    description:
      "Respuesta táctica en pastizales de altura, cerros y quebradas del Nevado del Aconquija, Huaco y Malli mediante cuadrillas de ataque con mochilas forestales y autobombas 4x4.",
    icon: "icon-[lucide--flame]",
  },
  {
    title: "Rescate Técnico y Siniestros Viales",
    badge: "Ruta 46 & Altura",
    description:
      "Extricación vehicular con herramientas hidráulicas pesadas, estabilización prehospitalaria y maniobras con cuerdas en la Cuesta de la Chilca y accesos montañosos.",
    icon: "icon-[lucide--shield-alert]",
  },
  {
    title: "Protección Civil ante Contingencias",
    badge: "Intervención Urbana",
    description:
      "Mitigación de riesgos por ráfagas de Viento Zonda, crecidas aluvionales de ríos serranos, caída de árboles sobre el tendido eléctrico e incendios estructurales urbanos.",
    icon: "icon-[lucide--life-buoy]",
  },
];

const DONATION_ITEMS = [
  {
    title: "Combustible y Mantenimiento de Flota",
    description:
      "Garantiza que las tres unidades móviles salgan de inmediato ante cada toque de sirena.",
    icon: "icon-[lucide--fuel]",
  },
  {
    title: "Equipos de Protección Personal (EPP)",
    description:
      "Monos ignífugos normados, cascos forestales, botas técnicas, guantes y linternas intrínsecas.",
    icon: "icon-[lucide--hard-hat]",
  },
  {
    title: "Logística e Hidratación en Incendios",
    description:
      "Agua mineral, bebidas isotónicas y raciones de marcha para brigadistas durante jornadas extensas.",
    icon: "icon-[lucide--droplets]",
  },
];

const PREVENTION_RULES = [
  {
    title: "Prohibición Absoluta de Quemas",
    text: "En Catamarca rige veda de fuego por sequía y Viento Zonda. Las quemas de hojas, restos de poda o basura en fincas son ilegales y provocan desastres.",
  },
  {
    title: "Perímetros Limpios en Propiedades",
    text: "Si vivís en zonas de monte o interfaz, mantené una franja de al menos 10 metros despejada de maleza seca alrededor de viviendas y galpones.",
  },
  {
    title: "Precaución en Cuestas de Montaña",
    text: "En la Cuesta de la Chilca y R.P. 46, manejá a velocidad precautoria, con luces bajas encendidas y sin arrojar colillas ni residuos por la ventanilla.",
  },
];

export function HomeView() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-16">
      {/* 1. HERO 100DVH (MOBILE-FIRST) CON FONDO ROJO VIBRANTE Y CONTACTOS DE EMERGENCIA */}
      <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-between overflow-hidden border-b border-primary/30 bg-primary text-primary-foreground md:min-h-0 md:justify-center md:py-14 lg:py-18">
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

        {/* CUERPO CENTRAL DEL HERO */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Columna Izquierda: Identidad Institucional */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:col-span-7">
              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl border-2 border-white/30 bg-white shadow-lg sm:size-24">
                  <Logo />
                </div>
                <div>
                  <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                    Bomberos Voluntarios
                  </h1>
                  <span className="mt-0.5 block text-lg font-black tracking-widest uppercase text-amber-300 sm:text-2xl">
                    Andalgalá
                  </span>
                </div>
              </div>

              <p className="mt-3.5 max-w-xl text-balance text-xs leading-relaxed text-white/90 sm:text-sm md:text-base">
                Protección, rescate y combate contra el fuego en más de 4.400
                km² de valles y alta montaña del Aconquija. Servicio
                incondicional los 365 días del año.
              </p>
            </div>

            {/* Columna Derecha: Tarjeta Glassmórfica de Protocolo */}
            <div className="hidden lg:col-span-5 lg:block">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2 border-b border-white/20 pb-3">
                  <span
                    className="icon-[lucide--siren] size-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <h2 className="text-xs font-black uppercase tracking-wider text-white">
                    Protocolo de Llamada de Emergencia
                  </h2>
                </div>
                <ul className="mt-3.5 space-y-2 text-xs text-white/85">
                  <li className="flex items-start gap-2">
                    <span className="font-mono font-bold text-amber-300">
                      1.
                    </span>
                    <span>
                      Indicá la localidad o paraje exacto (ej: Huaco, Malli,
                      Chaquiago).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono font-bold text-amber-300">
                      2.
                    </span>
                    <span>
                      Describí la magnitud: incendio de pastizal, choque vial o
                      rescate.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono font-bold text-amber-300">
                      3.
                    </span>
                    <span>
                      Aclará de inmediato si existen víctimas atrapadas o
                      descompensadas.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* PIE DEL HERO: CENTRAL DE DESPACHO E INTERACCIÓN RÁPIDA */}
        <div className="relative z-10 w-full border-t border-white/15 bg-black/20 p-4 backdrop-blur-md sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <span className="mb-2 block text-center font-mono text-[10px] font-bold uppercase tracking-widest text-white/80 sm:text-left">
              Líneas de Atención y Despacho Inmediato
            </span>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {/* Teléfono Directo de Guardia Local (Contraste Blanco Puro) */}
              <a
                href="tel:0383515523987"
                aria-label="Llamar directamente a la guardia de bomberos Andalgalá: 03835 15-52-3987"
                className="group flex items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-primary shadow-md transition-all hover:bg-white/95 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span
                      className="icon-[lucide--phone-call] size-5 animate-pulse"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-bold tracking-wider uppercase text-primary/75">
                      Línea Directa
                    </span>
                    <strong className="block font-mono text-sm font-black tracking-tight text-primary sm:text-base">
                      03835 15-52-3987
                    </strong>
                  </div>
                </div>
                <span
                  className="icon-[lucide--chevron-right] size-4.5 text-primary/60 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>

              {/* WhatsApp de Guardia y Mensajes */}
              <a
                href="https://wa.me/5493835695028?text=Hola,%20me%20comunico%20con%20la%20guardia%20de%20Bomberos%20Andalgalá."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar mensaje a la guardia por WhatsApp"
                className="group flex items-center justify-between rounded-2xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-3.5 text-white backdrop-blur-xs transition-all hover:bg-emerald-500/30 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/30 text-emerald-200">
                    <span
                      className="icon-[ri--whatsapp-fill] size-5"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-bold tracking-wider uppercase text-emerald-200">
                      WhatsApp
                    </span>
                    <strong className="block font-mono text-xs font-bold tracking-tight text-white sm:text-sm">
                      +54 9 3835 69-5028
                    </strong>
                  </div>
                </div>
                <span
                  className="icon-[lucide--external-link] size-4 text-emerald-200/80"
                  aria-hidden="true"
                />
              </a>

              {/* Emergencia Nacional 911 / 100 */}
              <span
                aria-label="Llamar al número único de emergencias 911"
                className="group flex items-center justify-between rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5 text-white backdrop-blur-xs transition-all hover:border-white/40 hover:bg-white/15 active:scale-[0.98] cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-white/15 text-white">
                    <span
                      className="icon-[lucide--siren] size-5 text-amber-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-bold tracking-wider uppercase text-white/70">
                      Línea Rápida
                    </span>
                    <strong className="block font-mono text-base font-black text-amber-300">
                      911 / 100
                    </strong>
                  </div>
                </div>
                <span
                  className="icon-[lucide--chevron-right] size-4.5 text-white/60 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ESPECIALIDADES Y COBERTURA OPERATIVA */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Cuerpo Activo
            </span>
            <h2 className="text-xl font-black text-foreground sm:text-2xl">
              Áreas de Intervención en Andalgalá
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Jurisdicción de más de 4.400 km² de geografía serrana y urbana
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OPERATIONAL_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span
                      className={`${pillar.icon} size-5`}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="rounded-full border border-border/80 bg-muted/60 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-muted-foreground">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-sm font-bold text-foreground sm:text-base">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. CAMPAÑA DE SOSTENIMIENTO Y DONACIONES */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:mt-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border-2 border-primary/30 bg-card shadow-xs">
          <div className="border-b border-border/80 bg-linear-to-r from-primary/10 via-transparent to-transparent p-5 sm:p-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-primary">
                <span
                  className="icon-[lucide--heart-handshake] size-4"
                  aria-hidden="true"
                />
                Solidaridad y Compromiso Comunitario
              </span>
              <h2 className="mt-2 text-xl font-black tracking-tight text-foreground sm:text-3xl">
                ¿Cómo Colaborar con el Cuartel?
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Nuestros bomberos son voluntarios y no perciben retribución
                económica. Cada litro de combustible, manguera, casco y
                herramienta de corte se financia con subsidios oficiales y con
                el aporte constante de los vecinos de Andalgalá.
              </p>
            </div>
          </div>

          <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                ¿En qué se invierten los recursos?
              </h3>

              <div className="grid gap-3 sm:grid-cols-3">
                {DONATION_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/70 bg-muted/20 p-4"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span
                        className={`${item.icon} size-4`}
                        aria-hidden="true"
                      />
                    </div>
                    <h4 className="mt-2 text-xs font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-dashed border-border p-4 text-xs text-muted-foreground">
                <strong className="text-foreground">
                  Donación de Insumos Críticos:
                </strong>{" "}
                Durante la temporada de incendios de pastizales
                (otoño/invierno), recibimos packs de agua mineral, bebidas
                isotónicas, barritas de cereal y combustible directamente en la
                guardia del cuartel.
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-border/80 bg-muted/40 p-4.5 lg:col-span-5">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Canal Oficial de Transferencias
                </span>
                <p className="mt-0.5 text-xs font-semibold text-foreground">
                  Cuenta Corriente Bancaria (Banco Nación)
                </p>

                <div className="mt-3 space-y-2 rounded-xl border border-border/80 bg-card p-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">
                      Alias:
                    </span>
                    <strong className="select-all font-bold text-primary">
                      BOMBEROS.ANDALGALA
                    </strong>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/60 pt-1.5 text-[11px]">
                    <span className="text-muted-foreground">Titular:</span>
                    <span className="text-foreground">
                      Asoc. Bomberos Vol. Andalgalá
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/60 pt-1.5 text-[11px]">
                    <span className="text-muted-foreground">CUIT:</span>
                    <span className="text-foreground">30-70891234-9</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 pt-1">
                <a
                  href="https://wa.me/5493835695028?text=Hola,%20quisiera%20colaborar%20como%20socio%20protector%20del%20cuartel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-emerald-700 active:scale-95"
                >
                  <span
                    className="icon-[ri--whatsapp-fill] size-4"
                    aria-hidden="true"
                  />
                  <span>Hacerme Socio Protector por WhatsApp</span>
                </a>

                <p className="text-center text-[10px] text-muted-foreground">
                  Emitimos recibo oficial por todo aporte dinerario o de
                  insumos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEDIDAS PREVENTIVAS PARA LA COMUNIDAD */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:mt-14 sm:px-6 lg:px-8">
        <div className="mb-5">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary">
            Prevención Ciudadana
          </span>
          <h2 className="text-xl font-black text-foreground sm:text-2xl">
            Consejos de Seguridad para Vecinos y Turistas
          </h2>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-3">
          {PREVENTION_RULES.map((rule, idx) => (
            <div
              key={rule.title}
              className="rounded-2xl border border-border/80 bg-card p-4.5 shadow-xs"
            >
              <span className="font-mono text-xs font-black text-primary">
                0{idx + 1}.
              </span>
              <h3 className="mt-1.5 text-sm font-bold text-foreground">
                {rule.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {rule.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CIERRE INSTITUCIONAL & CONVOCATORIA */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:mt-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/80 bg-muted/30 p-5 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                Escuela de Aspirantes
              </span>
              <h2 className="mt-1 text-lg font-black text-foreground sm:text-xl">
                ¿Sentís vocación de servicio por Andalgalá?
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                La Escuela de Cadetes y Aspirantes capacita a hombres y mujeres
                en técnicas de rescate, primeros auxilios e incendios
                estructurales y forestales. Las convocatorias abren cada año
                entre febrero y marzo.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-2.5">
              <Link
                href="/institucional"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground transition-colors hover:bg-muted active:scale-95"
              >
                <span>Conocer Autoridades y Flota</span>
                <span
                  className="icon-[lucide--chevron-right] size-3.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 active:scale-95"
              >
                <span>Requisitos de Inscripción</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
