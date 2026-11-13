import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Lock, Smartphone, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Política de Privacidad y Consentimiento SMS | ${siteConfig.legalBusinessName}`,
  description:
    "Conozca cómo protegemos su información personal, el uso de datos en reservas de recogida y el consentimiento de comunicaciones por SMS.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/60 via-canvas to-canvas px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
        <aside className="h-fit rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-900">Documento legal</p>
          <p className="mt-3 text-lg font-bold leading-tight text-neutral-900">Privacidad y comunicaciones</p>
          <div className="mt-6 space-y-3 border-t border-neutral-200 pt-5 text-sm text-neutral-600">
            <p><span className="font-semibold text-neutral-900">Entidad legal</span><br />{siteConfig.legalBusinessName}</p>
            <p><span className="font-semibold text-neutral-900">Actualizado</span><br />Noviembre de 2026</p>
          </div>
          <div className="mt-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4 text-sm leading-relaxed text-blue-950">
            Protegemos sus datos con medidas de seguridad y prácticas de uso responsable.
          </div>
        </aside>

        <main className="min-w-0">
          <div className="mb-8 max-w-4xl">
            <span className="mb-3 inline-block rounded-full bg-brand-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-900 sm:text-sm">
              Transparencia y Seguridad
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-sm text-neutral-600 sm:text-base">
              Cómo recopilamos, utilizamos y protegemos su información personal.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xl shadow-blue-950/[0.04] sm:p-10 lg:p-14 space-y-12 text-neutral-700 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="text-brand-900" size={24} />
              1. Identidad del Responsable y Alcance
            </h2>
            <p>
              <strong>{siteConfig.name}</strong> es el nombre comercial (DBA / trading name) de <strong>{siteConfig.legalBusinessName}</strong>. Esta Política de Privacidad se emite en nombre de la entidad legal y describe cómo recopilamos, utilizamos, almacenamos y salvaguardamos la información personal proporcionada al utilizar nuestro sitio web, programar servicios de recogida y coordinar envíos hacia la República Dominicana.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <Lock className="text-brand-900" size={24} />
              2. Información que Recopilamos
            </h2>
            <p className="mb-3">
              Para brindar de manera eficiente nuestro servicio de recogida a domicilio y flete internacional, recopilamos la siguiente información indispensable:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-neutral-700">
              <li><strong>Datos de contacto del remitente:</strong> Nombre completo, número de teléfono móvil, correo electrónico y dirección física completa de recogida con código postal (ZIP code).</li>
              <li><strong>Detalles del envío:</strong> Cantidad estimada de cajas y tanques, tipo de mercancía y especificaciones de entrega.</li>
              <li><strong>Datos del destinatario en República Dominicana:</strong> Nombre del receptor, número telefónico de contacto en el país, provincia, municipio y dirección de entrega final.</li>
              <li><strong>Información de pago:</strong> Los datos de tarjeta de crédito o débito utilizados para abonar el depósito de $10 se procesan directamente a través de Square bajo estándares PCI-DSS. <em>{siteConfig.name} nunca almacena números completos de tarjetas ni códigos CVV en sus propios servidores.</em></li>
            </ul>
          </div>

          {/* Section 3: SMS Compliance & Twilio A2P */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-50/70 border border-brand-200">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-950 mb-3 flex items-center gap-2">
              <Smartphone className="text-brand-900" size={24} />
              3. Consentimiento de Comunicaciones por SMS (A2P 10DLC)
            </h2>
            <p className="mb-4">
              Al seleccionar voluntariamente la opción de recibir SMS e ingresar su número de teléfono móvil en un formulario o sistema de reservas habilitado para ello, usted otorga su consentimiento expreso para recibir mensajes de texto transaccionales relacionados con el servicio solicitado. El consentimiento SMS es opcional y no condiciona la compra, el envío del formulario ni la prestación del servicio.
            </p>
            <div className="space-y-3 text-sm text-neutral-800">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
                <span><strong>Naturaleza de los mensajes:</strong> Los SMS se envían con fines estrictamente operativos y transaccionales: confirmación de reserva de cita, recordatorio del horario de recogida del chofer, avisos de retraso por tráfico/clima y notificación del despacho hacia República Dominicana.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
                <span><strong>No venta ni uso comercial de datos:</strong> No vendemos, alquilamos ni compartimos su número móvil, sus datos de consentimiento SMS ni su información de suscripción con terceros o afiliados para fines de marketing o promoción. Esta información tampoco se utiliza para crear listas comerciales de terceros.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
                <span><strong>Frecuencia y tarifas:</strong> La frecuencia de los mensajes depende de los hitos de su pedido (generalmente 2 a 4 mensajes por servicio). Pueden aplicarse tarifas estándar de mensajería y datos según su operador telefónico (<em>Message and data rates may apply</em>).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
                <span><strong>Cancelación y Ayuda:</strong> Puede cancelar la suscripción a mensajes SMS en cualquier momento respondiendo <strong>STOP</strong> a cualquier mensaje que reciba. Para recibir asistencia técnica o información, responda <strong>HELP</strong> o comuníquese a {siteConfig.contact.phoneDisplay} o {siteConfig.contact.phoneSecondaryDisplay}.</span>
              </div>
            </div>
          </div>

          {/* Section 4: Third-party service providers */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <FileText className="text-brand-900" size={24} />
              4. Proveedores de Servicios y Plataformas de Terceros
            </h2>
            <p className="mb-3">
              Para garantizar una operación segura y eficiente, nos apoyamos en proveedores de tecnología debidamente certificados:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acuity Scheduling (Squarespace):</strong> Plataforma en la que usted selecciona la fecha y hora de la recogida.</li>
              <li><strong>Square:</strong> Pasarela de pago segura encargada de procesar el depósito de $10.</li>
              <li><strong>Zapier:</strong> Herramienta de sincronización y automatización entre el registro de cita y la hoja de ruta operativa.</li>
              <li><strong>Google Sheets:</strong> Registro seguro y controlado para la asignación de rutas y choferes de recogida.</li>
              <li><strong>Twilio:</strong> Infraestructura de telecomunicaciones utilizada para el envío seguro de alertas transaccionales por SMS.</li>
            </ul>
          </div>

          {/* Section 5: Security & Retention */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
              5. Seguridad y Retención de Datos
            </h2>
            <p>
              Implementamos medidas administrativas, técnicas y organizativas para proteger su información contra accesos no autorizados, pérdida o alteración. Conservamos los datos del cliente únicamente durante el tiempo necesario para completar la recogida, transporte, desaduanaje y entrega en la República Dominicana, así como para cumplir con las obligaciones fiscales y regulatorias aplicables.
            </p>
          </div>

          {/* Section 6: User Rights */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
              6. Derechos del Usuario y Contacto de Privacidad
            </h2>
            <p className="mb-4">
              Usted tiene derecho a solicitar acceso, actualización o rectificación de sus datos personales en cualquier momento. Para ejercer estos derechos o plantear cualquier consulta sobre esta política, por favor contáctenos a:
            </p>
            <div className="p-4 rounded-xl bg-canvas border border-neutral-200 text-sm">
              <p><strong>{siteConfig.name}</strong></p>
              <p>Entidad legal operadora: {siteConfig.legalBusinessName}</p>
              <p>Dirección: {siteConfig.contact.address}</p>
              <p>Correo de atención: <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-900 font-semibold">{siteConfig.contact.email}</a></p>
              <p>Teléfono: <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-brand-900 font-semibold">{siteConfig.contact.phoneDisplay}</a> · <a href={`tel:${siteConfig.contact.phoneSecondaryRaw}`} className="text-brand-900 font-semibold">{siteConfig.contact.phoneSecondaryDisplay}</a></p>
              <p>Horario: {siteConfig.contact.hours}</p>
            </div>
          </div>

          </div>
        </main>
      </div>
    </div>
  );
}

