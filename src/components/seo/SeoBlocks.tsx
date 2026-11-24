import React from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import type { FAQItem } from "@/content/homeFaqs";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="mb-6 text-sm text-neutral-500">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={14} aria-hidden />}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-neutral-800 font-medium">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-brand-900 underline-offset-2 hover:underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <header className="max-w-3xl mb-10">
      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-900 bg-brand-100/70 px-3.5 py-1.5 rounded-full inline-block mb-4">
        {eyebrow}
      </span>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4 text-balance">{title}</h1>
      <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">{lead}</p>
    </header>
  );
}

export function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mb-12 scroll-mt-32">
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">{title}</h2>
      <div className="text-neutral-700 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export function PriceTable({
  caption,
  rows,
}: {
  caption: string;
  rows: { name: string; detail: string; price: number; href?: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-canvas text-xs uppercase tracking-wider text-neutral-500">
          <tr>
            <th scope="col" className="px-4 py-3">Producto</th>
            <th scope="col" className="px-4 py-3">Medida</th>
            <th scope="col" className="px-4 py-3 text-right">Precio a RD</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-neutral-100">
              <th scope="row" className="px-4 py-3 font-semibold text-neutral-900">
                {r.href ? (
                  <Link href={r.href} className="hover:text-brand-900 hover:underline underline-offset-2">
                    {r.name}
                  </Link>
                ) : (
                  r.name
                )}
              </th>
              <td className="px-4 py-3 font-mono text-xs text-neutral-700">{r.detail}</td>
              <td className="px-4 py-3 text-right font-bold text-brand-900 tabular-nums">
                ${Number.isInteger(r.price) ? r.price : r.price.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2.5">
          <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" aria-hidden />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export const HOW_IT_WORKS = [
  "Ingrese su código postal (ZIP) y vea el día fijo de recogida de su zona.",
  "Elija su horario y confirme con un depósito de $10 por Square. Se descuenta del total.",
  "Prepare y selle sus cajas o tanques con los datos de quien recibe en RD.",
  "Pasamos a su puerta el día de su ruta y cobramos el saldo al recoger.",
  "Entregamos puerta a puerta en la provincia de destino en República Dominicana.",
];

export function HowItWorks() {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {HOW_IT_WORKS.map((step, i) => (
        <li key={step} className="rounded-2xl border border-neutral-200 bg-white p-4">
          <span className="text-xs font-bold text-brand-900">Paso {i + 1}</span>
          <p className="mt-1 text-sm text-neutral-700">{step}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
      {faqs.map((f) => (
        <details key={f.question} className="group p-5">
          <summary className="cursor-pointer list-none font-semibold text-neutral-900 flex justify-between gap-4">
            {f.question}
            <span aria-hidden className="text-brand-900 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="mt-3 text-sm text-neutral-700 leading-relaxed">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function BookCta({ title, text, cta }: { title: string; text: string; cta: string }) {
  return (
    <section data-cta="seo_page" className="my-12 rounded-3xl bg-gradient-to-br from-[#071a3c] to-brand-900 p-8 sm:p-10 text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
      <p className="text-blue-100 mb-6 max-w-2xl">{text}</p>
      <div className="flex flex-wrap gap-3">
        <PillButton href={siteConfig.bookingEntryUrl} variant="white" size="lg">
          {cta}
        </PillButton>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10"
        >
          <MessageSquare size={16} aria-hidden /> WhatsApp
        </a>
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10"
        >
          <Phone size={16} aria-hidden /> {siteConfig.contact.phoneDisplay}
        </a>
      </div>
    </section>
  );
}

export const PROHIBITED = [
  "Armas de fuego, municiones o piezas de armas",
  "Sustancias químicas, inflamables o explosivas (gasolina, pintura en aerosol, fuegos artificiales)",
  "Drogas o medicamentos no autorizados",
  "Dinero en efectivo o títulos valores",
];
