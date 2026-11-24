import type { Metadata } from "next";
import Link from "next/link";
import { boxPricing } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Breadcrumbs, PageHeader, Section, PriceTable, CheckList, HowItWorks, FaqList, BookCta, PROHIBITED,
} from "@/components/seo/SeoBlocks";
import { TOWN_PAGES } from "@/content/zones";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structuredData";
import type { FAQItem } from "@/content/homeFaqs";

const PATH = "/envio-de-cajas-a-republica-dominicana";
const TITLE = "Envío de Cajas a República Dominicana";
const DESCRIPTION =
  "Envío de cajas puerta a puerta a República Dominicana desde Yonkers, Westchester, el Bronx y Connecticut. Caja 18x18x28 desde $75. Recogida a domicilio y reserva con $10.";

export const metadata: Metadata = {
  title: `${TITLE} desde New York y Connecticut | Desde $75`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

const CRUMBS = [
  { name: "Inicio", path: "/" },
  { name: "Envío de cajas", path: PATH },
];

const FAQS: FAQItem[] = [
  {
    question: "¿Cuánto cuesta enviar una caja a República Dominicana?",
    answer:
      "La caja estándar de 18 x 18 x 28 pulgadas cuesta $75 puerta a puerta. La mediana (24 x 24 x 27) $125, la grande (24 x 24 x 34) $225 y la jumbo (24 x 24 x 48) $250. El precio incluye la recogida en su casa y la entrega en cualquier provincia.",
  },
  {
    question: "¿Ustedes recogen la caja en mi casa?",
    answer:
      "Sí. Recogemos en Yonkers, Mount Vernon, New Rochelle, White Plains y el resto de nuestras rutas en Westchester, el Bronx (ZIP 10460) y el sur de Connecticut. Cada zona tiene un día fijo según su código postal.",
  },
  {
    question: "¿Qué puedo enviar en una caja?",
    answer:
      "Ropa, zapatos, juguetes, artículos del hogar y alimentos no perecederos bien sellados. No se permiten armas, sustancias inflamables o químicas, drogas ni dinero en efectivo.",
  },
  {
    question: "¿Cómo reservo la recogida?",
    answer:
      "Ingrese su ZIP en la página de reserva, elija el horario de su día de ruta y confirme con un depósito de $10. Ese depósito se descuenta del total al recoger.",
  },
  {
    question: "¿Puedo enviar varias cajas el mismo día?",
    answer:
      "Sí. Puede preparar varias cajas y tanques para la misma recogida. Si son muchas, escríbanos por WhatsApp antes para coordinar el espacio en el vehículo.",
  },
];

export default function EnvioCajasPage() {
  const rows = boxPricing.map((b) => ({ name: b.name, detail: b.size, price: b.price }));
  return (
    <div className="pt-28 sm:pt-36 pb-16">
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={serviceSchema({
          name: TITLE,
          path: PATH,
          description: DESCRIPTION,
          offers: boxPricing.map((b) => ({ name: `${b.name} ${b.size}`, price: b.price })),
        })}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={CRUMBS} />
        <PageHeader
          eyebrow="Cajas puerta a puerta"
          title="Envío de cajas a República Dominicana desde New York y Connecticut"
          lead="Agencia de envíos a RD con recogida en su casa en Yonkers, Westchester, el Bronx (10460) y el sur de Connecticut. Entregamos sus cajas en la puerta de su familia en cualquier provincia de República Dominicana. Reserve en línea con un depósito de $10."
        />

        <Section title="Precios de cajas a República Dominicana">
          <p>Precio fijo por caja, puerta a puerta. Incluye la recogida en su casa en nuestras rutas de Nueva York y Connecticut.</p>
          <PriceTable caption="Precios de envío de cajas" rows={rows} />
          <p className="text-sm text-neutral-500">
            Vea todos los precios, incluidos los tanques, en la página de <Link href="/precios" className="underline">precios</Link>.
          </p>
        </Section>

        <Section title="¿Qué caja necesito?">
          <CheckList items={boxPricing.map((b) => `${b.name} (${b.size}): ${b.idealFor}`)} />
        </Section>

        <Section title="Cómo funciona el envío">
          <HowItWorks />
        </Section>

        <Section title="Cómo empacar su caja">
          <CheckList
            items={[
              "Ponga lo más pesado (enlatados, detergentes) en el fondo.",
              "Rellene los espacios vacíos con ropa para que la caja no se deforme.",
              "Selle todas las uniones con cinta de empaque resistente, con varias capas.",
              "Escriba en la caja el nombre, teléfono y dirección completa de quien recibe en RD.",
            ]}
          />
        </Section>

        <Section title="Artículos que no se pueden enviar">
          <CheckList items={PROHIBITED} />
          <p className="text-sm">¿Tiene dudas sobre un artículo? Pregúntenos por WhatsApp antes de cerrar la caja.</p>
        </Section>

        <Section title="Zonas de recogida">
          <p>
            Recogemos en Westchester, parte del Bronx y el sur de Connecticut. Vea el día de su zona en{" "}
            <Link href="/zonas" className="underline">zonas de recogida</Link> o en las páginas de{" "}
            {TOWN_PAGES.map((t, i) => (
              <span key={t.slug}>
                <Link href={`/zonas/${t.slug}`} className="underline">{t.name}</Link>
                {i < TOWN_PAGES.length - 2 ? ", " : i === TOWN_PAGES.length - 2 ? " y " : ""}
              </span>
            ))}
            .
          </p>
          <p>
            ¿También envía víveres o aceite? Vea el <Link href="/envio-de-tanques-a-republica-dominicana" className="underline">envío de tanques</Link>.
          </p>
        </Section>

        <BookCta
          title="Reserve la recogida de sus cajas"
          text="Ingrese su ZIP, vea su día de ruta y confirme con $10 de depósito."
          cta="Reservar recogida"
        />

        <Section title="Preguntas frecuentes sobre el envío de cajas">
          <FaqList faqs={FAQS} />
        </Section>
      </div>
    </div>
  );
}
