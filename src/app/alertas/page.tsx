import { AlertView } from "@/features/alerts/components/alert-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alertas y Estado Operativo | Bomberos Voluntarios Andalgalá",
  description:
    "Centro de monitoreo y alertas en tiempo real de incendios forestales, vientos Zonda, estado de la Cuesta de la Chilca, Ruta 46 y operativos del Cuerpo Activo de Andalgalá, Catamarca.",
  openGraph: {
    title: "Centro de Alertas | Bomberos Voluntarios Andalgalá",
    description:
      "Estado operativo en vivo de incendios, transitabilidad y emergencias en el Departamento Andalgalá.",
    type: "website",
  },
};

export default function AlertsPage() {
  return <AlertView />;
}
