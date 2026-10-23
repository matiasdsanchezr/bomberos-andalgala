"use client";

import { Logo } from "@/components/logo";
import { useState, useTransition } from "react";

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  fullName: "",
  phone: "",
  email: "",
  topic: "voluntariado",
  message: "",
};

const CONTACT_CHANNELS = [
  {
    title: "Guardia Operativa 24hs",
    description: "Para llamadas directas de auxilio y coordinación operativa.",
    value: "03835 15-52-3987",
    href: "tel:0383515523987",
    actionText: "Llamar a la guardia",
    icon: "icon-[lucide--phone-call]",
    badge: "Atención 24/7",
    badgeColor: "border-destructive/30 bg-destructive/10 text-destructive",
  },
  {
    title: "WhatsApp Institucional",
    description:
      "Consultas no urgentes, certificaciones y coordinación comunitaria.",
    value: "+54 9 3835 69-5028",
    href: "https://wa.me/5493835695028",
    actionText: "Enviar mensaje",
    icon: "icon-[ri--whatsapp-fill]",
    badge: "Respuesta rápida",
    badgeColor:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Sede Cuartel Central",
    description:
      "Guardia activa permanente, administración y recepción de donaciones.",
    value: "Av. José Pascual Jais s/n",
    href: "https://maps.google.com/?q=Bomberos+Voluntarios+Andalgala",
    actionText: "Cómo llegar",
    icon: "icon-[lucide--map-pin]",
    badge: "Andalgalá, Catamarca",
    badgeColor:
      "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
];

const REQUIREMENTS = [
  "Tener entre 18 y 38 años de edad.",
  "Residencia comprobable en el Departamento Andalgalá.",
  "Estudios secundarios completos (o cursando el último año).",
  "Apto psicofísico médico emitido por entidad oficial.",
  "Certificado de antecedentes policiales libre de causas penales.",
  "Disponibilidad para instrucción teórica y guardias semanales.",
];

export const ContactView = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      // Simulación de envío de formulario (reemplazable por Server Action o API Route)
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitted(true);
      setFormData(INITIAL_FORM);
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-16">
      {/* AVISO PRIORITARIO DE SEGURIDAD OPERATIVA */}
      <aside
        aria-label="Aviso prioritario de emergencia"
        className="border-b border-destructive/30 bg-destructive/10 px-4 py-3 text-destructive"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-medium">
            <span
              className="icon-[lucide--shield-alert] size-4.5 shrink-0 animate-pulse text-destructive"
              aria-hidden="true"
            />
            <span>
              <strong>¿Emergencia en curso?</strong> No utilice este formulario.
              Comuníquese inmediatamente al{" "}
              <strong className="font-black underline">911</strong> o al{" "}
              <strong className="font-black underline">03835 15-52-3987</strong>
              .
            </span>
          </div>
        </div>
      </aside>

      {/* HEADER HERO INSTITUCIONAL */}
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
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
              <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl border-2 border-white/30 bg-white shadow-lg sm:size-24">
                <Logo />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                  Canales de Contacto
                </h1>
                <span className="mt-0.5 block text-lg font-black tracking-widest uppercase text-amber-300 sm:text-2xl">
                  Cuerpo Activo y Sede Administrativa
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-balance text-xs leading-relaxed text-white/90 sm:text-sm md:text-base">
              Comunicate con la guardia del cuartel, solicitá capacitaciones de
              prevención, gestioná consultas sobre el ingreso a la Escuela de
              Aspirantes o coordiná aportes institucionales.
            </p>
          </div>
        </div>
      </section>

      {/* VÍAS DIRECTAS DE COMUNICACIÓN */}
      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary">
              Comunicaciones Directas
            </span>
            <h2 className="text-xl font-black text-foreground sm:text-2xl">
              Vías Rápidas de Atención
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Guardia operativa y mesa de recepción disponibles las 24 horas
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_CHANNELS.map((channel) => (
            <div
              key={channel.title}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-shadow hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span
                      className={`${channel.icon} size-5`}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${channel.badgeColor}`}
                  >
                    {channel.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-sm font-bold text-foreground sm:text-base">
                  {channel.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {channel.description}
                </p>
                <div className="mt-3.5 font-mono text-xs font-black text-foreground">
                  {channel.value}
                </div>
              </div>

              <div className="mt-4 border-t border-border/70 pt-3.5">
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={
                      channel.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground shadow-xs transition-all hover:bg-muted active:scale-95"
                  >
                    <span>{channel.actionText}</span>
                    <span
                      className="icon-[lucide--chevron-right] size-3.5 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <span className="block text-center font-mono text-[11px] font-medium text-muted-foreground">
                    Solo uso radioaficionado / emergencias
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUERPO PRINCIPAL: FORMULARIO + INFORMACIÓN DE INGRESO */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* COLUMNA IZQUIERDA: FORMULARIO DE CONSULTAS */}
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs sm:p-8 lg:col-span-7">
            <div className="border-b border-border/80 pb-5">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary">
                Mesa de Entrada Digital
              </span>
              <h2 className="mt-1 text-xl font-black text-foreground sm:text-2xl">
                Envianos tu Consulta
              </h2>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Las solicitudes son revisadas por el área administrativa en
                horario hábil.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <span
                    className="icon-[lucide--check-circle-2] size-6"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-3 text-base font-bold text-foreground">
                  Mensaje Registrado Correctamente
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Muchas gracias por comunicarte. Personal del cuerpo o de la
                  comisión directiva se pondrá en contacto a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 active:scale-95"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Nombre Completo */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs"
                    >
                      Nombre y Apellido{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Ej: Marcelo Morales"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs"
                    >
                      Teléfono de Contacto{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Ej: 3835 123456"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Correo Electrónico */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Motivo de Consulta */}
                  <div>
                    <label
                      htmlFor="topic"
                      className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs"
                    >
                      Motivo Principal{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      required
                      value={formData.topic}
                      onChange={(e) =>
                        setFormData({ ...formData, topic: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs text-foreground transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="voluntariado">
                        Postulación / Escuela de Aspirantes
                      </option>
                      <option value="socio">
                        Asociarme / Colaboración voluntaria
                      </option>
                      <option value="capacitacion">
                        Capacitaciones a escuelas o entidades
                      </option>
                      <option value="inspeccion">
                        Inspección / Asesoramiento preventivo
                      </option>
                      <option value="institucional">
                        Contacto institucional o de prensa
                      </option>
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs"
                  >
                    Detalle del Mensaje{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Escribí aquí tu consulta, disponibilidad o datos relevantes..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-1.5 w-full resize-y rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-3 pt-2 sm:flex-row sm:items-center">
                  <p className="text-[11px] text-muted-foreground">
                    Los datos ingresados son confidenciales y de uso exclusivo
                    del cuartel.
                  </p>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {isPending ? (
                      <>
                        <span
                          className="icon-[lucide--loader-2] size-4 animate-spin"
                          aria-hidden="true"
                        />
                        <span>Enviando consulta...</span>
                      </>
                    ) : (
                      <>
                        <span
                          className="icon-[lucide--send] size-4"
                          aria-hidden="true"
                        />
                        <span>Enviar Formulario</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* COLUMNA DERECHA: REQUISITOS DE ASPIRANTES & DONACIONES */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Requisitos Escuela de Aspirantes */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span
                    className="icon-[lucide--user-check] size-5"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    Requisitos para el Ingreso
                  </h3>
                  <p className="font-mono text-[10px] font-semibold text-muted-foreground sm:text-[11px]">
                    Escuela de Cadetes y Cuerpo de Bomberos
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Si tenés vocación de servicio y querés capacitarte en rescate
                técnico, combate de incendios y primeros auxilios, estos son los
                requisitos básicos:
              </p>

              <ul className="mt-3.5 space-y-2 text-xs text-foreground">
                {REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-2">
                    <span
                      className="icon-[lucide--check] mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5">
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  <strong className="font-bold text-foreground">
                    Ciclo Lectivo:
                  </strong>{" "}
                  Las inscripciones se abren anualmente entre{" "}
                  <strong>Febrero y Marzo</strong>. Las solicitudes enviadas
                  fuera de término quedan agendadas para el período inmediato.
                </p>
              </div>
            </div>

            {/* Donaciones & Socios Protectores */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <span
                    className="icon-[lucide--heart-handshake] size-5"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    Aporte Comunitario & Donaciones
                  </h3>
                  <p className="font-mono text-[10px] font-semibold text-muted-foreground sm:text-[11px]">
                    Sostenimiento del equipamiento y combustible
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Nuestra institución es sostenida con el esfuerzo de la comunidad
                y subsidios oficiales. Podés colaborar como socio protector o
                acercar insumos:
              </p>

              <div className="mt-3.5 space-y-2 rounded-xl border border-border/80 bg-muted/20 p-3 font-mono text-xs">
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
              </div>

              <a
                href="https://wa.me/5493835695028?text=Hola,%20deseo%20colaborar%20como%20socio%20protector"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-emerald-700 active:scale-95"
              >
                <span
                  className="icon-[ri--whatsapp-fill] size-4"
                  aria-hidden="true"
                />
                <span>Coordinar Donación por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DEL MAPA Y UBICACIÓN FÍSICA */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary">
                  Ubicación Estratégica
                </span>
                <h3 className="mt-1 text-lg font-black text-foreground sm:text-xl">
                  Cuartel Central Andalgalá
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Av. José Pascual Jais s/n — Acceso directo hacia Ruta
                  Provincial 46 y ejido céntrico.
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Av+Jose+Pascual+Jais+Andalgala+Catamarca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 active:scale-95"
              >
                <span
                  className="icon-[lucide--navigation] size-3.5"
                  aria-hidden="true"
                />
                <span>Abrir en Google Maps</span>
              </a>
            </div>
          </div>

          {/* Tarjeta Visual de Coordenadas */}
          <div className="border-t border-border/80 bg-muted/30 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-card p-4">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Localidad & Provincia
                </span>
                <p className="mt-1 text-xs font-extrabold text-foreground">
                  Andalgalá, Catamarca (CP 4740)
                </p>
              </div>

              <div className="rounded-xl border border-border/70 bg-card p-4">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Guardia de Cuartel
                </span>
                <p className="mt-1 text-xs font-extrabold text-foreground">
                  24 horas / 365 días al año
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
