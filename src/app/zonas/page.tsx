import type { Metadata } from "next";
import Link from "next/link";
import { PICKUP_ROUTES } from "@/lib/pickupRoutes";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageHeader, Section, BookCta } from "@/components/seo/SeoBlocks";
import { TOWN_PAGES, routeTowns, townLabel, capitalize } from "@/content/zones";
import { breadcrumbSchema } from "@/lib/structuredData";

const PATH = "/zonas";

export const metadata: Metadata = {
  title: "Zonas y Días de Recogida | Westchester, Bronx y Connecticut",
  description:
    "Días fijos de recogida de cajas y tanques por código postal: Yonkers, Mount Vernon, New Rochelle, White Plains, Scarsdale, el Bronx (10460), Stamford, Greenwich, Norwalk y más.",
  alternates: { canonical: PATH },
};

const CRUMBS = [
  { name: "Inicio", path: "/" },
  { name: "Zonas de recogida", path: PATH },
];

export default function ZonasPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16">
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={CRUMBS} />
        <PageHeader
          eyebrow="Zonas de recogida"
          title="Zonas y días de recogida de cajas y tanques"
          lead="Cada zona tiene un día fijo de recogida según su código postal. Busque su ZIP en la tabla o ingréselo al reservar y le mostramos su día al instante."
        />

        <Section title="Páginas por ciudad">
          <ul className="grid gap-3 sm:grid-cols-2">
            {TOWN_PAGES.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/zonas/${t.slug}`}
                  className="block rounded-2xl border border-neutral-200 bg-white p-4 hover:border-brand-900"
                >
                  <span className="font-semibold text-neutral-900">
                    Envío de cajas desde {townLabel(t)}
                  </span>
                  <span className="block text-sm text-neutral-500">ZIP {t.zips.join(", ")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Días de recogida por código postal">
          <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Días de recogida por ZIP</caption>
              <thead className="bg-canvas text-xs uppercase tracking-wider text-neutral-500">
                <tr>
                  <th scope="col" className="px-4 py-3">Día</th>
                  <th scope="col" className="px-4 py-3">Ciudades</th>
                  <th scope="col" className="px-4 py-3">Códigos postales</th>
                </tr>
              </thead>
              <tbody>
                {PICKUP_ROUTES.map((r) => (
                  <tr key={r.day} className="border-t border-neutral-100 align-top">
                    <th scope="row" className="px-4 py-3 font-semibold text-brand-900">{capitalize(r.spanishDay)}</th>
                    <td className="px-4 py-3 text-neutral-800">{routeTowns(r).join(", ")}</td>
                    <td className="px-4 py-3 font-mono text-xs text-neutral-600">
                      {r.zips.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            ¿Su ZIP no aparece? Escríbanos por WhatsApp para coordinar la recogida. No reserve un día diferente al de su zona.
          </p>
        </Section>

        <BookCta title="Vea su día y reserve" text="Ingrese su ZIP y confirme su recogida con $10 de depósito." cta="Buscar mi ZIP" />
      </div>
    </div>
  );
}
