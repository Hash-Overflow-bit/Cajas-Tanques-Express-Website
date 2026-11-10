import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { ShieldCheck, CalendarCheck, Clock, CreditCard, CheckCircle2, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Reservar Recogida | Depósito Seguro de $10",
  description:
    "Programe la recogida de sus cajas y tanques a domicilio. Elija la fecha conveniente y asegure su turno con solo $10 de depósito a través de Square.",
};

export default function ReservarPage() {
  return (
    <div className="pt-32 sm:pt-40 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-[-0.03em] mb-4">
            Programe la Recogida de sus Cajas y Tanques
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Reserve su fecha en pocos minutos. Nuestro sistema de citas oficial le permite elegir el día conveniente y asegurar su turno con solo <strong>$10 de depósito</strong>.
          </p>
        </div>

        {/* The Booking Card Action */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/90 shadow-xl mb-12 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold mb-6">
            <ShieldCheck size={18} className="text-emerald-600" />
            Depósito de $10 procesado de forma segura mediante Square
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            Iniciar Reserva en Acuity Scheduling
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Al hacer clic en el botón a continuación, accederá a nuestro calendario oficial donde podrá elegir su turno, indicar su dirección de recogida y cantidad de cajas o tanques.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <PillButton
              href={siteConfig.acuityBookingUrl}
              isExternal
              size="lg"
              variant="primary"
              className="text-base sm:text-lg py-4 px-8"
            >
              Abrir Calendario de Citas
            </PillButton>
            <PillButton
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              isExternal
              size="lg"
              variant="whatsapp"
            >
              Reservar con Asistencia por WhatsApp
            </PillButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-neutral-100 text-left">
            <div className="flex items-start gap-3">
              <CalendarCheck size={20} className="text-brand-900 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-neutral-900">Elija su Horario</strong>
                <span className="text-xs text-neutral-500">Días disponibles en tiempo real</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard size={20} className="text-brand-900 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-neutral-900">Depósito de $10</strong>
                <span className="text-xs text-neutral-500">100% aplicado a su factura final</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-brand-900 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-neutral-900">Avisos por SMS</strong>
                <span className="text-xs text-neutral-500">Confirmación y recordatorio automático</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Details about the booking flow */}
        <div className="bg-canvas rounded-3xl p-8 border border-neutral-200 mb-12">
          <h3 className="text-xl font-bold text-neutral-900 mb-4">
            ¿Qué sucede después de programar su cita?
          </h3>
          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Confirmación Inmediata:</strong> Recibirá un comprobante digital por correo electrónico y un mensaje SMS con la fecha y hora seleccionadas.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Acreditación del Depósito:</strong> Los $10 pagados quedan registrados automáticamente en nuestra orden y se descontarán de la factura al momento de pesar y retirar sus cajas o tanques.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Llegada del Chofer:</strong> El chofer de nuestra ruta se pondrá en contacto con usted el día de la recogida para coordinar la llegada exacta a su domicilio.
              </span>
            </div>
          </div>
        </div>

        {/* Help Banner */}
        <div className="text-center text-sm text-neutral-600">
          ¿Necesita asistencia telefónica o prefiere que reservemos por usted?{" "}
          <span className="font-bold text-brand-900">
            Llámenos al <a href={`tel:${siteConfig.contact.phoneRaw}`} className="underline hover:text-brand-950">{siteConfig.contact.phoneDisplay}</a> o <a href={`tel:${siteConfig.contact.phoneSecondaryRaw}`} className="underline hover:text-brand-950">{siteConfig.contact.phoneSecondaryDisplay}</a>
          </span>
        </div>

      </div>
    </div>
  );
}

