import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageHeader } from "@/components/seo/SeoBlocks";
import { GUIDES } from "@/content/guides";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Guías para Enviar Cajas y Tanques a República Dominicana",
  description:
    "Guías prácticas para enviar cajas y tanques a República Dominicana: cómo empacar, qué no se puede enviar y cómo preparar su recogida.",
  alternates: { canonical: "/guias" },
};

const CRUMBS = [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
];

export default function GuiasPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16">
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={CRUMBS} />
        <PageHeader
          eyebrow="Guías"
          title="Guías para enviar cajas y tanques a República Dominicana"
          lead="Consejos prácticos para que su envío llegue completo y sin problemas."
        />
        <ul className="grid gap-4">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guias/${g.slug}`}
                className="block rounded-2xl border border-neutral-200 bg-white p-6 hover:border-brand-900 transition-colors"
              >
                <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">{g.title}</h2>
                <p className="text-sm text-neutral-600">{g.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
