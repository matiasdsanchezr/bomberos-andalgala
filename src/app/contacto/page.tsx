import { ContactView } from "@/features/marketing/components/contact-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Bomberos Voluntarios Andalgalá",
  description:
    "Canales de guardia operativa, WhatsApp, requisitos de ingreso a la Escuela de Aspirantes y ubicación del Cuartel Central de Bomberos de Andalgalá.",
};

export default function ContactPage() {
  return <ContactView />;
}
