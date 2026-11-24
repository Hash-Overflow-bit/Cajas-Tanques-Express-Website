import type { Metadata } from "next";
import Link from "next/link";
import { boxPricing, tankPricing } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageHeader, Section, CheckList, FaqList, BookCta, PROHIBITED } from "@/components/seo/SeoBlocks";
import { breadcrumbSchema, faqSchema } from "@/lib/structuredData";
import { siteConfig } from "@/config/site";
import type { FAQItem } from "@/content/homeFaqs";

const PATH = "/guias/como-enviar-cajas-a-republica-dominicana";
const TITLE = "Cómo Enviar Cajas a República Dominicana desde Estados Unidos";
const DESCRIPTION =
  "Guía paso a paso para enviar o mandar cajas y tanques a República Dominicana desde New York y Connecticut: tamaños, cómo empacar, qué no enviar, precios y cómo reservar la recogida.";

export const metadata: Metadata = {
  title: `${TITLE}: Guía Paso a Paso`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

const CRUMBS = [
  { name: "Inicio", path: "/" },
  { name: "Guía: cómo enviar cajas a RD", path: PATH },
];

const STEPS: { title: string; text: string }[] = [
  {
    title: "Elija el tamaño de caja o tanque",
    text: `Para ropa y zapatos, la caja estándar de 18 x 18 x 28 ($${boxPricing[0].price}) suele bastar. Para cobijas o despensa, la mediana o la grande. Para víveres pesados como arroz y aceite, un tanque de 55 o 75 galones.`,
  },
  {
    title: "Empaque bien",
    text: "Lo pesado abajo, rellene los espacios con ropa y selle todas las uniones con varias capas de cinta. En los tanques, llénelos por completo y apriete el aro metálico.",
  },
  {
    title: "Rotule con los datos de quien recibe",
    text: "Escriba nombre completo, teléfono y dirección en República Dominicana (provincia, municipio, sector, calle y número, y una referencia). Póngalo en dos lados de la caja o en la tapa y el costado del tanque.",
  },
  {
    title: "Revise que no lleve artículos prohibidos",
    text: "Armas, municiones, sustancias inflamables o químicas, drogas y dinero en efectivo no se pueden enviar. Si tiene dudas sobre un artículo, pregunte antes de cerrar.",
  },
  {
    title: "Reserve la recogida",
    text: "Ingrese su código postal en nuestra página de reserva, vea el día fijo de su zona, elija un horario y confirme con $10 de depósito. El depósito se descuenta del total.",
  },
  {
    title: "Entregue en su puerta",
    text: "El día de su ruta pasamos a recoger. Usted paga el saldo al chofer y nosotros llevamos la carga hasta la puerta de su familia en República Dominicana.",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "¿Cuál es la forma más fácil de mandar una caja a República Dominicana?",
    answer:
      "Con un servicio puerta a puerta: una agencia de envíos recoge la caja en su casa y la entrega en la casa de su familia. Así no tiene que llevarla a una oficina.",
  },
  {
    question: "¿Cuánto cuesta mandar una caja de Estados Unidos a República Dominicana?",
    answer: `Con nosotros, desde $${boxPricing[0].price} por una caja de 18 x 18 x 28 pulgadas, puerta a puerta y con recogida en su casa en New York o Connecticut. Vea todos los precios en la página de precios.`,
  },
  {
    question: "¿Puedo enviar comida a República Dominicana?",
    answer:
      "Sí, alimentos no perecederos y bien sellados: arroz, enlatados, aceite, pastas. Para mucha comida o líquidos, un tanque es más seguro que una caja.",
  },
  {
    question: "¿Necesito llevar la caja a una oficina?",
    answer:
      "No. Recogemos en su casa en Yonkers, Westchester, el Bronx (10460) y el sur de Connecticut. Vea el día de su zona en la página de zonas.",
  },
];

export default function GuiaEnviarCajasPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16">
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: TITLE,
          description: DESCRIPTION,
          estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: boxPricing[0].price },
          step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
        }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={CRUMBS} />
        <PageHeader
          eyebrow="Guía"
          title="Cómo enviar cajas a República Dominicana desde Estados Unidos"
          lead="Todo lo que necesita para mandar cajas y tanques a su familia en RD desde New York o Connecticut: tamaños, empaque, qué no enviar, precios y cómo reservar."
        />

        <Section title="Paso a paso">
          <ol className="space-y-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <h3 className="font-bold text-neutral-900">
                  {i + 1}. {s.title}
                </h3>
                <p className="mt-2 text-neutral-700">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Precios de referencia">
          <CheckList
            items={[
              ...boxPricing.map((b) => `${b.name} ${b.size}: $${b.price}`),
              ...tankPricing.map((t) => `${t.name}: $${t.price.toFixed(2)}`),
            ]}
          />
          <p className="text-sm">
            Detalles en <Link href="/precios" className="underline">precios</Link>,{" "}
            <Link href="/envio-de-cajas-a-republica-dominicana" className="underline">envío de cajas</Link> y{" "}
            <Link href="/envio-de-tanques-a-republica-dominicana" className="underline">envío de tanques</Link>.
          </p>
        </Section>

        <Section title="Artículos que no se pueden enviar">
          <CheckList items={PROHIBITED} />
          <p className="text-sm">
            ¿Duda con un artículo? Escríbanos por{" "}
            <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="underline" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            .
          </p>
        </Section>

        <BookCta
          title="¿Listo para enviar?"
          text="Vea el día de recogida de su zona con su ZIP y reserve con $10."
          cta="Reservar recogida"
        />

        <Section title="Preguntas frecuentes">
          <FaqList faqs={FAQS} />
        </Section>
      </article>
    </div>
  );
}
