import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FileText, DollarSign, Clock, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Términos y Condiciones del Servicio | ${siteConfig.legalBusinessName}`,
  description:
    "Términos del servicio de recogida, política del depósito de $10, cancelaciones, responsabilidades de embalaje y condiciones de envío a República Dominicana.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/60 via-canvas to-canvas px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
        <aside className="h-fit rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-900">Documento legal</p>
          <p className="mt-3 text-lg font-bold leading-tight text-neutral-900">Condiciones del servicio</p>
          <div className="mt-6 space-y-3 border-t border-neutral-200 pt-5 text-sm text-neutral-600">
            <p><span className="font-semibold text-neutral-900">Entidad legal</span><br />{siteConfig.legalBusinessName}</p>
            <p><span className="font-semibold text-neutral-900">Actualizado</span><br />Noviembre de 2026</p>
          </div>
          <div className="mt-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4 text-sm leading-relaxed text-blue-950">
            Revise estas condiciones antes de reservar una recogida o contratar el servicio.
          </div>
        </aside>

        <main className="min-w-0">
          <div className="mb-8 max-w-4xl">
            <span className="mb-3 inline-block rounded-full bg-brand-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-900 sm:text-sm">
              Condiciones del Servicio
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl">
              Términos y Condiciones
            </h1>
            <p className="mt-4 text-sm text-neutral-600 sm:text-base">
              Reglas claras para reservas, recogidas, pagos y envíos internacionales.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xl shadow-blue-950/[0.04] sm:p-10 lg:p-14 space-y-12 text-neutral-700 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <FileText className="text-brand-900" size={24} />
              1. Aceptación de los Términos
            </h2>
            <p>
              <strong>{siteConfig.name}</strong> es el nombre comercial (DBA / trading name) de <strong>{siteConfig.legalBusinessName}</strong>. Al utilizar este sitio web, reservar una recogida en nuestro sistema o contratar los servicios ofrecidos bajo el nombre comercial <strong>{siteConfig.name}</strong>, usted acepta quedar vinculado por los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estas disposiciones, le solicitamos no utilizar nuestros servicios.
            </p>
          </div>

          {/* Section 2: $10 Deposit */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-50/70 border border-brand-200">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-950 mb-3 flex items-center gap-2">
              <DollarSign className="text-brand-900" size={24} />
              2. Política del Depósito de Reserva de $10
            </h2>
            <p className="mb-3">
              Para garantizar la disponibilidad de nuestros choferes, optimizar las rutas vehiculares y confirmar su turno de recogida, se requiere el pago de un depósito inicial de <strong>$10.00 USD</strong> procesado de forma segura mediante Square.
            </p>
            <ul className="space-y-2 text-sm text-neutral-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-900 flex-shrink-0 mt-0.5" />
                <span><strong>Acreditación al 100%:</strong> La totalidad de los $10.00 USD se descontará de la factura final del flete al momento de realizar la recogida en su domicilio.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-900 flex-shrink-0 mt-0.5" />
                <span><strong>Reprogramación:</strong> El cliente puede reprogramar la fecha de su cita sin penalización mediante el enlace provisto en su correo de confirmación con al menos 24 horas de anticipación.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-900 flex-shrink-0 mt-0.5" />
                <span><strong>Cancelaciones:</strong> Para cancelaciones con reembolso del depósito, el aviso debe recibirse con un mínimo de 24 horas de antelación respecto a la franja horaria agendada. En caso de ausencia del cliente sin aviso previo en el horario acordado, el depósito podrá retenerse para cubrir costos operativos de desplazamiento del vehículo.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Customer responsibilities */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <Clock className="text-brand-900" size={24} />
              3. Obligaciones del Cliente en la Recogida
            </h2>
            <p className="mb-3">
              Para asegurar un proceso ágil y el cuidado de su carga, el cliente se compromete a:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Tener las cajas o tanques debidamente empacados, cerrados y sellados con cinta o precinto de seguridad antes de la llegada del chofer.</li>
              <li>Estar presente una persona mayor de edad en la dirección de recogida durante la ventana horaria pactada.</li>
              <li>Suministrar datos exactos y legibles del destinatario en la República Dominicana (nombre completo, teléfono de contacto y dirección detallada de entrega).</li>
              <li>Abonar el saldo restante del costo total del envío según las dimensiones y tarifas acordadas.</li>
            </ul>
          </div>

          {/* Section 4: Prohibited Items */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <ShieldAlert className="text-amber-600" size={24} />
              4. Artículos Prohibidos y Declaraciones Aduaneras
            </h2>
            <p className="mb-3">
              El cliente declara bajo juramento que sus cajas y tanques no contienen artículos prohibidos por las leyes de los Estados Unidos o de la República Dominicana, tales como armas de fuego, municiones, fuegos artificiales, químicos corrosivos o inflamables, drogas ilegales o dinero en efectivo.
            </p>
            <p>
              Cualquier retención, decomiso o sanción legal impuesta por las autoridades aduaneras a causa de mercancía ilegal oculta por el cliente será de exclusiva responsabilidad legal y financiera del remitente.
            </p>
          </div>

          {/* Section 5: Delivery & Limitations */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
              5. Tiempos de Tránsito y Entrega en Destino
            </h2>
            <p className="mb-3">
              Los tiempos estimados de entrega en la República Dominicana corresponden a estimaciones operativas estándar. Si bien realizamos nuestros mayores esfuerzos por cumplir los plazos con máxima puntualidad, {siteConfig.name} no se hace responsable por demoras fortuitas originadas por condiciones meteorológicas adversas, retrasos en la navegación marítima, revisiones extraordinarias de la Dirección General de Aduanas (DGA) o causas de fuerza mayor.
            </p>
          </div>

          {/* Section 6: SMS Terms */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
              6. Términos del Servicio de Mensajería SMS
            </h2>
            <p className="mb-2">
              <strong>Programa CAJAS &amp; TANQUES EXPRESS SMS:</strong> al seleccionar voluntariamente la opción de recibir mensajes de texto, usted acepta recibir mensajes transaccionales relacionados con sus reservas y recogidas, incluyendo confirmaciones, recordatorios, actualizaciones de llegada y avisos operativos.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>El cliente confirma que es el titular de la línea telefónica facilitada.</li>
              <li><strong>Frecuencia:</strong> la frecuencia de mensajes varía según la actividad de su reserva y normalmente será de 2 a 4 mensajes por servicio; no se prometen mensajes diarios.</li>
              <li><strong>STOP:</strong> puede cancelar el servicio en cualquier momento respondiendo <strong>STOP</strong>. Después de procesar la solicitud, no recibirá más mensajes SMS del programa, salvo los necesarios para confirmar la baja.</li>
              <li><strong>HELP:</strong> para obtener ayuda, responda <strong>HELP</strong> o contacte directamente al {siteConfig.contact.phoneDisplay} o {siteConfig.contact.phoneSecondaryDisplay}.</li>
              <li>Tarifas de mensajes y datos pueden ser aplicadas por su proveedor de telefonía móvil (<em>Message and data rates may apply</em>).</li>
              <li>Los operadores móviles no son responsables por mensajes retrasados o no entregados.</li>
            </ul>
            <p className="mt-4 text-sm">
              La información sobre el uso y la protección de los datos de SMS está disponible en nuestra <Link href="/privacidad" className="text-brand-900 font-bold underline">Política de Privacidad</Link>.
            </p>
          </div>

          {/* Section 7: Contact */}
          <div className="pt-4 border-t border-neutral-200">
            <h2 className="text-lg font-bold text-neutral-900 mb-2">
              7. Canales de Consulta y Aclaraciones
            </h2>
            <p className="text-sm">
              Entidad legal operadora: {siteConfig.legalBusinessName}. Dirección: {siteConfig.contact.address}. Si tiene dudas sobre las condiciones del servicio, puede comunicarse con nosotros por vía telefónica al <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-brand-900 font-bold">{siteConfig.contact.phoneDisplay}</a> o al <a href={`tel:${siteConfig.contact.phoneSecondaryRaw}`} className="text-brand-900 font-bold">{siteConfig.contact.phoneSecondaryDisplay}</a>, o por correo electrónico a <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-900 font-bold">{siteConfig.contact.email}</a>.
            </p>
          </div>

          </div>
        </main>
      </div>
    </div>
  );
}

