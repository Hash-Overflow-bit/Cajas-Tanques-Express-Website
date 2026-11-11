import type { Metadata } from "next";
import { ZipRouteBooking } from "@/components/booking/ZipRouteBooking";
import { siteConfig } from "@/config/site";
import { CalendarCheck, CreditCard, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Reservar Recogida por ZIP | Cajas & Tanques Express",
  description: "Ingrese su código postal para encontrar el día correcto de recogida de cajas y tanques. Reserve su turno en Acuity con $10 de depósito seguro.",
};

export default function ReservarPage() {
  return (
    <main className="pt-32 sm:pt-40 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-[-0.03em] mb-4">
            Programe su Recogida de Cajas y Tanques
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Su día de recogida depende de la dirección. Introduzca su ZIP y
            lo llevaremos al calendario correcto antes de pagar el depósito de $10.
          </p>
        </div>

        <ZipRouteBooking />

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { Icon: CalendarCheck, title: "Día correcto", detail: "Ruta asignada por ZIP" },
            { Icon: Clock, title: "Elija su horario", detail: "Disponibilidad real en Acuity" },
            { Icon: CreditCard, title: "$10 de depósito", detail: "Pago seguro con Square" },
          ].map(({ Icon, title, detail }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-5 flex gap-3">
              <Icon size={22} className="text-brand-900 shrink-0" />
              <div><p className="font-bold text-neutral-900 text-sm">{title}</p><p className="text-xs text-neutral-600 mt-1">{detail}</p></div>
            </div>
          ))}
        </div>

        <div className="bg-canvas rounded-3xl p-7 sm:p-8 border border-neutral-200 mb-10">
          <h2 className="text-xl font-bold text-neutral-900 mb-5">¿Cómo funciona?</h2>
          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
            {[
              "Ingrese el ZIP de la dirección donde recogeremos sus cajas o tanques.",
              "Confirme el día que corresponde a su zona y elija una hora en Acuity.",
              "Complete los datos de recogida y de entrega a República Dominicana, y pague los $10 mediante Square.",
              "Nuestro equipo verificará los datos de la ruta antes de despachar al chofer.",
            ].map((item) => (
              <div className="flex items-start gap-3" key={item}>
                <CheckCircle2 size={19} className="text-brand-900 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-neutral-600">
          ¿Necesita ayuda? Llámenos al{" "}
          <a className="font-bold underline text-brand-900" href={`tel:${siteConfig.contact.phoneRaw}`}>{siteConfig.contact.phoneDisplay}</a>
          {" "}o escríbanos por WhatsApp.
        </p>
      </div>
    </main>
  );
}
