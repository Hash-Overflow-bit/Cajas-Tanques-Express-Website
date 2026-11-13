"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { Phone, Mail, Clock, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "cajas",
    message: "",
    smsConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceLabels: Record<string, string> = {
      cajas: "Envío de Cajas",
      tanques: "Envío de Tanques",
      ambos: "Cajas y Tanques",
      consulta: "Pregunta General / Otra consulta",
    };
    const submittedAt = new Intl.DateTimeFormat("es-US", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date());
    const whatsappMessage = [
      "Hola CAJAS & TANQUES EXPRESS,",
      "",
      "Nueva solicitud desde el formulario de contacto:",
      "",
      `Nombre: ${formData.name}`,
      `Teléfono: ${formData.phone}`,
      `Correo electrónico: ${formData.email || "No proporcionado"}`,
      `Servicio solicitado: ${serviceLabels[formData.serviceType] || formData.serviceType}`,
      "",
      "Mensaje del cliente:",
      formData.message,
      "",
      `Consentimiento SMS: ${formData.smsConsent ? "Aceptado por el cliente" : "No otorgado"}`,
      formData.smsConsent
        ? "El cliente acepta recibir mensajes SMS relacionados con su consulta, reserva o recogida."
        : "El cliente no solicitó recibir mensajes SMS.",
      `Fecha de solicitud: ${submittedAt}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="pt-32 sm:pt-40 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-[-0.03em] mb-4">
            Contáctenos
          </h1>
          <p className="text-base sm:text-lg text-neutral-600">
            Estamos a su disposición para resolver cualquier duda sobre sus envíos, medidas de cajas o tanques, y fechas de recogida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Card */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-neutral-900">
                Canales Oficiales
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-900 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                    Teléfono Directo
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="text-lg font-bold text-neutral-900 hover:text-brand-900 transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}
                    className="block text-lg font-bold text-neutral-900 hover:text-brand-900 transition-colors"
                  >
                    {siteConfig.contact.phoneSecondaryDisplay}
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Llamadas y atención personalizada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                    WhatsApp Oficial
                  </span>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-neutral-900 hover:text-[#2563eb] transition-colors"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Respuesta rápida para consultas y dudas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-700 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                    Correo Electrónico
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-base font-semibold text-neutral-900 hover:text-brand-900 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-700 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                    Horario de Atención
                  </span>
                  <span className="text-sm font-semibold text-neutral-900 block">
                    {siteConfig.contact.hours}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-700 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                    Dirección
                  </span>
                  <span className="text-sm text-neutral-700 block">
                    {siteConfig.contact.address}
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Booking Callout */}
            <div className="glass-dark rounded-3xl p-6 text-white text-center">
              <h3 className="font-bold text-lg mb-2">
                ¿Desea agendar una recogida hoy?
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mb-4">
                No necesita esperar respuesta por correo. Puede reservar su fecha directamente en nuestro calendario oficial.
              </p>
              <PillButton
                href={siteConfig.acuityBookingUrl}
                isExternal
                size="md"
                variant="white"
                className="w-full justify-between"
              >
                Ir a Reservas
              </PillButton>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Envíenos un Mensaje
            </h2>
            <p className="text-neutral-600 text-sm mb-8">
              Complete el siguiente formulario y un representante de nuestro equipo se comunicará con usted a la brevedad.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">
                  ¡Mensaje Recibido!
                </h3>
                <p className="text-sm text-blue-800 max-w-md mx-auto mb-6">
                  Muchas gracias por contactarnos. Nuestro equipo revisará su mensaje y se comunicará con usted en el horario hábil.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-blue-900 underline uppercase tracking-wider"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-900 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Teléfono Móvil *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-900 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Tipo de Envío de Interés
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-900 text-sm bg-white"
                  >
                    <option value="cajas">Envío de Cajas</option>
                    <option value="tanques">Envío de Tanques</option>
                    <option value="ambos">Ambos (Cajas y Tanques)</option>
                    <option value="consulta">Pregunta General / Otra consulta</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Mensaje o Consulta *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Indíquenos su zona o código postal y las preguntas que tenga sobre sus cajas o tanques..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-900 text-sm resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-neutral-600 leading-relaxed">
                  <input
                    type="checkbox"
                    checked={formData.smsConsent}
                    onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 flex-shrink-0 accent-brand-900"
                  />
                  <span>
                    Acepto recibir mensajes SMS de CAJAS &amp; TANQUES EXPRESS sobre mi consulta, reserva o recogida. La frecuencia varía (normalmente 2–4 mensajes por servicio); pueden aplicarse tarifas de mensajes y datos (<em>Message and data rates may apply</em>). Responda <strong>STOP</strong> para cancelar o <strong>HELP</strong> para obtener ayuda. Este consentimiento es opcional y no es condición para enviar el formulario. Consulte los <Link href="/terminos" className="font-semibold text-brand-900 underline">Términos</Link> y la <Link href="/privacidad" className="font-semibold text-brand-900 underline">Política de Privacidad</Link>.
                  </span>
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-brand-900 text-white font-semibold text-sm hover:bg-brand-950 transition-colors flex items-center justify-center gap-2 shadow-pill"
                  >
                    <Send size={16} />
                    <span>Enviar Mensaje</span>
                  </button>
                </div>

                <p className="text-[11px] text-neutral-500 text-center leading-normal">
                  Respetamos su privacidad. Sus datos solo se utilizarán para responder a su solicitud de información y no serán compartidos con terceros.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

