"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { bookingUrlForRoute, findPickupRoute } from "@/lib/pickupRoutes";

export function ZipRouteBooking() {
  const [zip, setZip] = useState("");
  const route = findPickupRoute(zip);
  const complete = /^\d{5}$/.test(zip);

  return (
    <section aria-labelledby="zip-booking-title" className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xl mb-12">
      <div className="flex items-center gap-2 text-blue-800 text-sm font-semibold mb-5">
        <ShieldCheck size={19} />
        Depósito seguro de $10 mediante Square
      </div>
      <h2 id="zip-booking-title" className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
        Primero, ingrese su código postal
      </h2>
      <p className="text-neutral-600 leading-relaxed mb-7">
        Cada zona tiene un día fijo de recogida. Identificaremos su ruta automáticamente
        antes de mostrarle los horarios disponibles. Puede reservar durante el sábado
        para una recogida el lunes, si quedan turnos disponibles; el sábado no se
        considera un día de recogida regular.
      </p>

      <label htmlFor="pickup-zip" className="block text-sm font-bold text-neutral-900 mb-2">
        Código postal de recogida (ZIP de EE. UU.)
      </label>
      <div className="flex items-center gap-3 rounded-2xl border-2 border-neutral-300 focus-within:border-blue-700 px-4 py-3 max-w-md">
        <MapPin className="text-brand-900 flex-shrink-0" size={21} />
        <input
          id="pickup-zip"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={5}
          pattern="[0-9]{5}"
          value={zip}
          onChange={(event) => setZip(event.target.value.replace(/\D/g, "").slice(0, 5))}
          placeholder="Ej. 10704"
          className="flex-1 min-w-0 bg-transparent text-lg text-neutral-900 outline-none"
          aria-describedby="zip-status"
        />
      </div>

      <div id="zip-status" aria-live="polite" className="mt-5">
        {route ? (
          <div className="rounded-2xl bg-blue-50 border border-blue-200 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={24} className="text-blue-700 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-bold text-blue-950 text-lg">
                  Su día de recogida es el {route.spanishDay}.
                </p>
                <p className="text-sm text-blue-900 mt-1 mb-4">
                  ZIP {zip} · Solo verá horarios disponibles para los {route.spanishDay}.
                </p>
                <a
                  href={bookingUrlForRoute(route, zip)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 hover:bg-brand-950 text-white font-semibold px-6 py-3 transition-colors"
                >
                  Elegir horario del {route.spanishDay}
                  <ArrowRight size={19} />
                </a>
              </div>
            </div>
          </div>
        ) : complete ? (
          <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-amber-950">
            <p className="font-bold mb-1">Esta zona requiere confirmación.</p>
            <p className="text-sm leading-relaxed mb-3">
              No tenemos una ruta fija confirmada para el ZIP {zip}. Contáctenos
              para coordinar la recogida; no seleccione un día diferente.
            </p>
            <a
              className="font-bold underline underline-offset-4"
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hola, quiero reservar una recogida en el ZIP ${zip}. ¿Tienen cobertura?`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </div>
        ) : (
          <p className="text-sm text-neutral-500">
            Ingrese los 5 dígitos de su ZIP para consultar el día correcto de recogida.
          </p>
        )}
      </div>

      <p className="text-xs text-neutral-500 mt-6 leading-relaxed">
        Revise que el ZIP de la dirección ingresada en Acuity sea el mismo. Si necesita
        cambiar la dirección o el ZIP, vuelva a consultar la ruta antes de confirmar y pagar.
      </p>
    </section>
  );
}
