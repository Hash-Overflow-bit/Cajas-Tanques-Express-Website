import type { Metadata } from "next";
import Link from "next/link";
import { boxPricing, siteConfig, tankPricing } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageHeader, Section, FaqList, BookCta } from "@/components/seo/SeoBlocks";
import { HOME_FAQS, type FAQItem } from "@/content/homeFaqs";
import { PICKUP_ROUTES } from "@/lib/pickupRoutes";
import { routeTowns, capitalize } from "@/content/zones";
import { breadcrumbSchema, faqSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Envíos a República Dominicana",
  description:
    "Respuestas sobre precios, depósito de $10, días de recogida por ZIP, empaque y artículos prohibidos al enviar cajas y tanques a República Dominicana.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

const CRUMBS = [
  { name: "Inicio", path: "/" },
  { name: "Preguntas frecuentes", path: "/preguntas-frecuentes" },
];

const homeFaq = (startsWith: string) => {
  const f = HOME_FAQS.find((x) => x.question.startsWith(startsWith));
  if (!f) throw new Error(`Pregunta no encontrada: ${startsWith}`);
  return f;
};

const largestBox = boxPricing[boxPricing.length - 1];
const routeSummary = PICKUP_ROUTES.map((r) => `${capitalize(r.spanishDay)}: ${routeTowns(r).join(", ")}`).join(". ");

const GROUPS: { title: string; faqs: FAQItem[] }[] = [
  {
    title: "Precios y pagos",
    faqs: [
      {
        question: "¿Cuánto cuesta enviar una caja a República Dominicana?",
        answer: `La caja estándar de ${boxPricing[0].size} cuesta $${boxPricing[0].price} puerta a puerta. Las cajas más grandes van de $${boxPricing[1].price} a $${largestBox.price} (${largestBox.size}).`,
      },
      {
        question: "¿Cuánto cuesta enviar un tanque?",
        answer: `El tanque de 55 galones cuesta $${tankPricing[0].price.toFixed(2)} y el de 75 galones $${tankPricing[1].price.toFixed(2)}, puerta a puerta hasta cualquier provincia.`,
      },
      {
        question: "¿El precio incluye la recogida en mi casa?",
        answer:
          "Sí. Los precios son puerta a puerta: incluyen la recogida en su casa dentro de nuestras rutas y la entrega en la provincia de destino en República Dominicana.",
      },
      homeFaq("¿Cómo funciona el depósito"),
      {
        question: "¿Cuándo pago el resto?",
        answer: "El saldo se paga el día de la recogida, al entregar sus cajas o tanques al chofer.",
      },
    ],
  },
  {
    title: "Recogida y zonas",
    faqs: [
      {
        question: "¿En qué zonas recogen?",
        answer:
          "Recogemos en Westchester (Yonkers, Mount Vernon, New Rochelle, White Plains y más), en el Bronx (ZIP 10460) y en el sur de Connecticut (Stamford, Greenwich, Norwalk, Darien y New Canaan).",
      },
      {
        question: "¿Qué día pasan por mi zona?",
        answer: `Cada zona tiene un día fijo según su código postal. ${routeSummary}. Ingrese su ZIP al reservar y le mostramos su día exacto.`,
      },
      homeFaq("¿Puedo reprogramar"),
      homeFaq("¿Cómo recibiré"),
      {
        question: "¿Puedo enviar varias cajas y tanques en la misma recogida?",
        answer:
          "Sí. Si son muchas piezas, escríbanos por WhatsApp antes para coordinar el espacio en el vehículo.",
      },
    ],
  },
  {
    title: "Empaque y qué enviar",
    faqs: [
      homeFaq("¿Qué debo tener preparado"),
      homeFaq("¿Cuáles artículos están prohibidos"),
      {
        question: "¿Venden cajas, tanques y materiales de empaque?",
        answer:
          "Sí. Vendemos cajas vacías, tanques de 55 y 75 galones con aro, cinta comercial y wrap transparente. Pídalos por WhatsApp antes de su día de recogida.",
      },
    ],
  },
  {
    title: "Entrega en República Dominicana",
    faqs: [homeFaq("¿Llegan a todas las provincias")],
  },
];

export default function PreguntasFrecuentesPage() {
  const all = GROUPS.flatMap((g) => g.faqs);
  return (
    <div className="pt-28 sm:pt-36 pb-16">
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
      <JsonLd data={faqSchema(all)} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={CRUMBS} />
        <PageHeader
          eyebrow="Ayuda"
          title="Preguntas frecuentes sobre envíos a República Dominicana"
          lead={`Todo sobre precios, recogida y empaque. ¿No encuentra su respuesta? Escríbanos por WhatsApp al ${siteConfig.contact.whatsappDisplay}.`}
        />

        {GROUPS.map((g) => (
          <Section key={g.title} title={g.title}>
            <FaqList faqs={g.faqs} />
          </Section>
        ))}

        <Section title="Más información">
          <p>
            Vea los <Link href="/precios" className="underline">precios completos</Link>, las{" "}
            <Link href="/zonas" className="underline">zonas y días de recogida</Link>, la guía de{" "}
            <Link href="/guias/como-empacar-cajas-y-tanques" className="underline">cómo empacar</Link> y la lista de{" "}
            <Link href="/guias/articulos-prohibidos" className="underline">artículos prohibidos</Link>.
          </p>
        </Section>

        <BookCta
          title="Reserve su recogida"
          text="Ingrese su ZIP, vea el día de su zona y confirme con $10 de depósito."
          cta="Reservar recogida"
        />
      </div>
    </div>
  );
}
