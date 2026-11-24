import type { Metadata } from "next";
import { ZipRouteBooking } from "@/components/booking/ZipRouteBooking";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PICKUP_ROUTES } from "@/lib/pickupRoutes";
import { TOWN_PAGES, routeTowns, capitalize } from "@/content/zones";
import { CalendarCheck, CreditCard, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/reservar" },
  title: "Reservar Recogida de Cajas y Tanques por ZIP",
  description:
    "Reserve la recogida de sus cajas y tanques a República Dominicana. Ingrese su ZIP, vea el día de su zona en Westchester, el Bronx o Connecticut y confirme con $10.",
};

export default function ReservarPage() {
  return (
    <main className="pt-24 sm:pt-40 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kept short so the ZIP field is on the first mobile screen. */}
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-[-0.03em] mb-3 sm:mb-4">
            Reserve su Recogida
          </h1>
          <p className="text-sm sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Ingrese su ZIP, elija su horario y confirme con $10 de depósito.
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
        <section className="mb-10">
          <h2 className="text-xl font-bold text-neutral-900 mb-2">Días de recogida por zona</h2>
          <p className="text-sm text-neutral-600 mb-5">
            Cada ruta tiene un día fijo. Su ZIP decide el día; el formulario de arriba lo encuentra por usted.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Días de recogida por zona</caption>
              <thead className="bg-canvas text-xs uppercase tracking-wider text-neutral-500">
                <tr>
                  <th scope="col" className="px-4 py-3">Día</th>
                  <th scope="col" className="px-4 py-3">Zonas</th>
                </tr>
              </thead>
              <tbody>
                {PICKUP_ROUTES.map((r) => (
                  <tr key={r.day} className="border-t border-neutral-100">
                    <th scope="row" className="px-4 py-3 font-semibold text-neutral-900 whitespace-nowrap">
                      {capitalize(r.spanishDay)}
                    </th>
                    <td className="px-4 py-3 text-neutral-700">{routeTowns(r).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-neutral-600 mt-4">
            Vea más detalles de su ciudad:{" "}
            {TOWN_PAGES.map((t, i) => (
              <span key={t.slug}>
                <Link href={`/zonas/${t.slug}`} className="underline text-brand-900">{t.name}</Link>
                {i < TOWN_PAGES.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </section>

        <section className="mb-10 rounded-3xl border border-neutral-200 bg-white p-7 sm:p-8">
          <h2 className="text-xl font-bold text-neutral-900 mb-3">Antes de su recogida</h2>
          <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
            <li>
              Tenga sus cajas selladas y sus tanques con el aro apretado. Vea{" "}
              <Link href="/guias/como-empacar-cajas-y-tanques" className="underline text-brand-900">cómo empacar</Link>.
            </li>
            <li>
              Revise la lista de{" "}
              <Link href="/guias/articulos-prohibidos" className="underline text-brand-900">artículos prohibidos</Link>.
            </li>
            <li>
              Escriba el nombre, teléfono y dirección de quien recibe en República Dominicana.
            </li>
            <li>
              Consulte los <Link href="/precios" className="underline text-brand-900">precios</Link>: el saldo se paga al
              recoger y los $10 del depósito se descuentan.
            </li>
          </ul>
        </section>

        <p className="text-center text-sm text-neutral-600">
          ¿Necesita ayuda? Llámenos al{" "}
          <a className="font-bold underline text-brand-900" href={`tel:${siteConfig.contact.phoneRaw}`}>{siteConfig.contact.phoneDisplay}</a>
          {" "}o escríbanos por WhatsApp.
        </p>
      </div>
    </main>
  );
}
