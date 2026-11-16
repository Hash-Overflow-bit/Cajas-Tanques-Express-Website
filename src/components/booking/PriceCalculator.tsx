"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Minus, Plus, ShieldCheck, Trash2 } from "lucide-react";
import { boxPricing, siteConfig, supplyPricing } from "@/config/site";
import { findPickupRoute } from "@/lib/pickupRoutes";

type CalculatorLine = {
  id: number;
  productId: string;
  quantity: number;
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const catalog = [
  ...boxPricing.map((item) => ({
    id: item.id,
    name: item.name,
    detail: item.size,
    price: item.price,
    category: "Envío",
    reviewRequired: false,
  })),
  ...supplyPricing.map((item) => ({
    id: item.id,
    name: item.name,
    detail: item.detail,
    price: item.price,
    category: "Material",
    reviewRequired: item.id === "box-empty" || item.id.startsWith("tank-"),
  })),
];

const catalogById = new Map<string, (typeof catalog)[number]>(catalog.map((item) => [item.id, item]));

export function PriceCalculator() {
  const router = useRouter();
  const [lines, setLines] = useState<CalculatorLine[]>([
    { id: 1, productId: "box-medium", quantity: 1 },
  ]);
  const [nextLineId, setNextLineId] = useState(2);
  const [shipmentType, setShipmentType] = useState<"personal" | "commercial">("personal");
  const [zip, setZip] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const preselectedItem = new URLSearchParams(window.location.search).get("item");
    if (preselectedItem && catalogById.has(preselectedItem)) {
      setLines([{ id: 1, productId: preselectedItem, quantity: 1 }]);
    }
  }, []);

  const completeZip = /^\d{5}$/.test(zip);
  const route = completeZip ? findPickupRoute(zip) : null;

  const estimate = useMemo(() => {
    const total = lines.reduce((sum, line) => {
      const item = catalogById.get(line.productId);
      return sum + (item?.price ?? 0) * line.quantity;
    }, 0);
    const needsReview = shipmentType === "commercial" || lines.some((line) => catalogById.get(line.productId)?.reviewRequired);
    return { total, needsReview };
  }, [lines, shipmentType]);

  const updateLine = (id: number, field: "productId" | "quantity", value: string) => {
    setLines((current) => current.map((line) => (
      line.id === id
        ? { ...line, [field]: field === "quantity" ? Math.max(1, Number(value)) : value }
        : line
    )));
  };

  const addLine = () => {
    setLines((current) => [...current, { id: nextLineId, productId: "box-medium", quantity: 1 }]);
    setNextLineId((current) => current + 1);
  };

  const removeLine = (id: number) => {
    setLines((current) => current.length === 1 ? current : current.filter((line) => line.id !== id));
  };

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] gap-8 items-start"
      onSubmit={(event) => {
        event.preventDefault();
        router.push(`${siteConfig.bookingEntryUrl}${zip ? `?zip=${encodeURIComponent(zip)}` : ""}`);
      }}
    >
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-3 pb-6 border-b border-neutral-200">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={21} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-900">Construya su estimado</h2>
            <p className="text-sm text-neutral-600 mt-1">Agregue cada caja o material por separado.</p>
          </div>
        </div>

        <div className="py-6 border-b border-neutral-200">
          <label className="block text-sm font-bold text-neutral-900 mb-2" htmlFor="shipment-type">Tipo de envío</label>
          <select
            id="shipment-type"
            value={shipmentType}
            onChange={(event) => {
              setShipmentType(event.target.value as "personal" | "commercial");
            }}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-900 focus:ring-2 focus:ring-brand-100"
          >
            <option value="personal">Envío personal / familiar</option>
            <option value="commercial">Envío comercial</option>
          </select>
        </div>

        <div className="py-6 border-b border-neutral-200">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div>
              <h3 className="text-sm font-bold text-neutral-900">Artículos y cantidades</h3>
              <p className="text-xs text-neutral-500 mt-1">Cada línea se calcula con su precio base.</p>
            </div>
            <button type="button" onClick={addLine} className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-900 hover:text-brand-700">
              <Plus size={16} /> Agregar
            </button>
          </div>

          <div className="space-y-3">
            {lines.map((line) => {
              const item = catalogById.get(line.productId);
              return (
                <div key={line.id} className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-2 items-center">
                  <select
                    aria-label="Artículo"
                    value={line.productId}
                    onChange={(event) => updateLine(line.id, "productId", event.target.value)}
                    className="min-w-0 rounded-xl border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none focus:border-brand-900 focus:ring-2 focus:ring-brand-100"
                  >
                    <optgroup label="Envío de cajas">
                      {catalog.filter((option) => option.category === "Envío").map((option) => (
                        <option key={option.id} value={option.id}>{option.name} · {option.detail} · {currency.format(option.price)}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Materiales adicionales">
                      {catalog.filter((option) => option.category === "Material").map((option) => (
                        <option key={option.id} value={option.id}>{option.name} · {option.detail} · desde {currency.format(option.price)}</option>
                      ))}
                    </optgroup>
                  </select>
                  <div className="flex items-center rounded-xl border border-neutral-300 overflow-hidden">
                    <button type="button" aria-label="Reducir cantidad" onClick={() => updateLine(line.id, "quantity", String(line.quantity - 1))} className="p-3 text-neutral-600 hover:bg-neutral-100">
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-bold text-neutral-900">{line.quantity}</span>
                    <button type="button" aria-label="Aumentar cantidad" onClick={() => updateLine(line.id, "quantity", String(line.quantity + 1))} className="p-3 text-neutral-600 hover:bg-neutral-100">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button type="button" aria-label={`Eliminar ${item?.name ?? "artículo"}`} onClick={() => removeLine(line.id)} className="p-3 text-neutral-400 hover:text-red-600">
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-neutral-200">
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-2" htmlFor="pickup-zip-calculator">ZIP de recogida</label>
            <input id="pickup-zip-calculator" value={zip} onChange={(event) => setZip(event.target.value.replace(/\D/g, "").slice(0, 5))} inputMode="numeric" maxLength={5} required placeholder="Ej. 10704" className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-brand-900 focus:ring-2 focus:ring-brand-100" />
            {completeZip && <p className="text-xs mt-2 text-brand-900">{route ? `Ruta disponible: ${route.spanishDay}.` : "Esta zona requiere confirmación."}</p>}
          </div>
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-2" htmlFor="destination-province">Provincia / municipio de destino</label>
            <input id="destination-province" value={destination} onChange={(event) => setDestination(event.target.value)} required placeholder="Ej. Santiago" className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-brand-900 focus:ring-2 focus:ring-brand-100" />
            <p className="text-xs mt-2 text-neutral-500">La tarifa base aplica a las provincias cubiertas.</p>
          </div>
        </div>

      </div>

      <aside className="lg:sticky lg:top-28 rounded-3xl bg-[#071a3c] text-white p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Su estimado</p>
        <p className="text-5xl font-black tracking-tight mt-3">{currency.format(estimate.total)}</p>
        <p className="text-sm text-white/70 mt-2">Precio base estimado en USD</p>

        <div className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm">
          {lines.map((line) => {
            const item = catalogById.get(line.productId);
            return item ? (
              <div key={line.id} className="flex justify-between gap-4 text-white/85">
                <span>{line.quantity} × {item.name}</span>
                <span className="font-semibold">{currency.format(item.price * line.quantity)}</span>
              </div>
            ) : null;
          })}
          <div className="flex justify-between gap-4 border-t border-white/15 pt-3 font-bold">
            <span>Reserva de recogida</span>
            <span>$10</span>
          </div>
          <p className="text-xs leading-relaxed text-white/60">El depósito de $10 se acredita al costo final del envío.</p>
        </div>

        <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed text-white/85">
          <div className="flex items-start gap-2">
            <CheckCircle2 size={17} className="text-cyan-300 flex-shrink-0 mt-0.5" />
            <span>Recogida y entrega puerta a puerta incluidas para envíos personales cubiertos.</span>
          </div>
        </div>

        {estimate.needsReview && (
          <div className="mt-4 rounded-2xl border border-amber-300/40 bg-amber-200/10 p-4 text-sm leading-relaxed text-amber-100">
            Este estimado requiere confirmación manual. Los envíos comerciales se cobran por artículo más los derechos aplicables a la llegada; el flete de tanques y algunas medidas de materiales puede requerir revisión.
          </div>
        )}

        <button type="submit" className="w-full mt-6 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-brand-900 hover:bg-blue-50 transition-colors">
          Confirmar y reservar
        </button>

        <p className="text-xs leading-relaxed text-white/55 mt-6">
          Los artículos comerciales, regulados no declarados y electrodomésticos sobredimensionados pueden generar cargos adicionales o derechos aduanales.
        </p>
      </aside>
    </form>
  );
}
