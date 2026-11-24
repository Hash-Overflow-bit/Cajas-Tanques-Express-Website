import type { Metadata } from "next";
import Link from "next/link";
import { boxPricing, tankPricing, supplyPricing } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageHeader, Section, PriceTable, FaqList, BookCta } from "@/components/seo/SeoBlocks";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structuredData";
import type { FAQItem } from "@/content/homeFaqs";

const PATH = "/precios";
const DESCRIPTION =
  "Precios de envío de cajas y tanques a República Dominicana: caja 18x18x28 $75, mediana $125, grande $225, jumbo $250, tanques de 55 y 75 galones. Recogida a domicilio en NY y CT.";

export const metadata: Metadata = {
  title: "Precios de Envío de Cajas y Tanques a República Dominicana",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

const CRUMBS = [
  { name: "Inicio", path: "/" },
  { name: "Precios", path: PATH },
];

const FAQS: FAQItem[] = [
  {
    question: "¿El precio incluye la recogida en mi casa?",
    answer:
      "Sí. Los precios son puerta a puerta: incluyen la recogida en su casa dentro de nuestras rutas en Westchester, el Bronx (10460) y el sur de Connecticut, y la entrega en cualquier provincia de República Dominicana.",
  },
  {
    question: "¿Qué es el depósito de $10?",
    answer:
      "Es el anticipo para reservar su recogida en línea, pagado de forma segura con Square. No es un cargo extra: se descuenta completo del total cuando recogemos.",
  },
  {
    question: "¿Cómo pago el resto?",
    answer: "El saldo se paga el día de la recogida, al entregar sus cajas o tanques al chofer.",
  },
  {
    question: "¿Venden cajas y materiales de empaque?",
    answer:
      "Sí. Tenemos cajas vacías, cinta comercial y wrap transparente. Pídalos por WhatsApp antes de su día de recogida.",
  },
];

const materials = supplyPricing.filter((s) => !s.id.startsWith("tank-"));

export default function PreciosPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16">
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={serviceSchema({
          name: "Envío de cajas y tanques a República Dominicana",
          path: PATH,
          description: DESCRIPTION,
          offers: [
            ...boxPricing.map((b) => ({ name: `${b.name} ${b.size}`, price: b.price })),
            ...tankPricing.map((t) => ({ name: t.name, price: t.price })),
          ],
        })}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={CRUMBS} />
        <PageHeader
          eyebrow="Lista de precios"
          title="Precios de envío de cajas y tanques a República Dominicana"
          lead="Precio fijo por caja o tanque, puerta a puerta, con recogida en su casa. Reserve con $10 de depósito, que se descuenta del total."
        />

        <Section title="Cajas">
          <PriceTable
            caption="Precios de cajas"
            rows={boxPricing.map((b) => ({
              name: b.name,
              detail: b.size,
              price: b.price,
              href: "/envio-de-cajas-a-republica-dominicana",
            }))}
          />
        </Section>

        <Section title="Tanques">
          <PriceTable
            caption="Precios de tanques"
            rows={tankPricing.map((t) => ({
              name: t.name,
              detail: t.size,
              price: t.price,
              href: "/envio-de-tanques-a-republica-dominicana",
            }))}
          />
        </Section>

        <Section title="Materiales de empaque">
          <PriceTable
            caption="Precios de materiales"
            rows={materials.map((m) => ({ name: m.name, detail: m.detail, price: m.price }))}
          />
        </Section>

        <Section title="Qué incluye el precio">
          <p>
            Recogida en su puerta el día fijo de su zona (vea las <Link href="/zonas" className="underline">zonas de recogida</Link>),
            transporte marítimo y entrega puerta a puerta en la provincia de destino. Los precios están en dólares (USD).
          </p>
        </Section>

        <BookCta title="Reserve su recogida" text="Vea el día de su zona con su ZIP y reserve con $10." cta="Reservar recogida" />

        <Section title="Preguntas frecuentes sobre precios">
          <FaqList faqs={FAQS} />
        </Section>
      </div>
    </div>
  );
}
