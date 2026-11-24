import type { Metadata } from "next";
import Link from "next/link";
import { tankPricing } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Breadcrumbs, PageHeader, Section, PriceTable, CheckList, HowItWorks, FaqList, BookCta, PROHIBITED,
} from "@/components/seo/SeoBlocks";
import { TOWN_PAGES } from "@/content/zones";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structuredData";
import type { FAQItem } from "@/content/homeFaqs";

const PATH = "/envio-de-tanques-a-republica-dominicana";
const TITLE = "Envío de Tanques a República Dominicana";
const DESCRIPTION =
  "Envío de tanques (barriles) de 55 y 75 galones puerta a puerta a República Dominicana. Recogida a domicilio en Yonkers, Westchester, el Bronx y Connecticut. Reserve con $10.";

export const metadata: Metadata = {
  title: `${TITLE} | Tanques de 55 y 75 Galones`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

const CRUMBS = [
  { name: "Inicio", path: "/" },
  { name: "Envío de tanques", path: PATH },
];

const [t55, t75] = tankPricing;

const FAQS: FAQItem[] = [
  {
    question: "¿Cuánto cuesta enviar un tanque a República Dominicana?",
    answer: `El tanque de 55 galones cuesta $${t55.price.toFixed(2)} y el de 75 galones $${t75.price.toFixed(2)}, puerta a puerta hasta cualquier provincia. Incluye la recogida en su casa en nuestras rutas.`,
  },
  {
    question: "¿Qué se puede enviar en un tanque?",
    answer:
      "Víveres como arroz, aceite, enlatados y detergentes, además de ropa y artículos del hogar. El cierre hermético con aro protege la carga de la humedad. No se permiten sustancias inflamables, químicos, armas, drogas ni dinero en efectivo.",
  },
  {
    question: "¿Ustedes venden el tanque vacío?",
    answer:
      "Sí, vendemos tanques de 55 y 75 galones con aro de cierre. Escríbanos por WhatsApp para pedirlo antes de su día de recogida.",
  },
  {
    question: "¿Cómo debo cerrar el tanque?",
    answer:
      "Llene el tanque sin dejar espacios vacíos, coloque la tapa y apriete bien el aro metálico. Puede añadir precinto o candado. Escriba los datos de quien recibe en la tapa y en el costado.",
  },
  {
    question: "¿Dónde recogen tanques?",
    answer:
      "En Yonkers, Mount Vernon, White Plains, New Rochelle y el resto de Westchester en nuestras rutas, el Bronx (ZIP 10460) y el sur de Connecticut (Stamford, Greenwich, Norwalk, Darien). Cada zona tiene un día fijo.",
  },
];

export default function EnvioTanquesPage() {
  const rows = tankPricing.map((t) => ({ name: t.name, detail: t.size, price: t.price }));
  return (
    <div className="pt-28 sm:pt-36 pb-16">
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={serviceSchema({
          name: TITLE,
          path: PATH,
          description: DESCRIPTION,
          offers: tankPricing.map((t) => ({ name: t.name, price: t.price })),
        })}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={CRUMBS} />
        <PageHeader
          eyebrow="Tanques y barriles"
          title="Envío de tanques a República Dominicana desde Yonkers, Westchester y Connecticut"
          lead="Tanques de 55 y 75 galones con cierre hermético para víveres, aceite y artículos pesados. Los recogemos en su casa y los entregamos puerta a puerta en toda la República Dominicana."
        />

        <Section title="Precios de tanques a República Dominicana">
          <PriceTable caption="Precios de envío de tanques" rows={rows} />
          <p className="text-sm text-neutral-500">
            Compare con las cajas en la página de <Link href="/precios" className="underline">precios</Link>.
          </p>
        </Section>

        <Section title="¿Qué tanque elegir?">
          <CheckList items={tankPricing.map((t) => `${t.name} (${t.size}): ${t.idealFor}`)} />
        </Section>

        <Section title="Cómo funciona el envío">
          <HowItWorks />
        </Section>

        <Section title="Cómo preparar su tanque">
          <CheckList
            items={[
              "Llene el tanque por completo para que la carga no se mueva.",
              "Envuelva líquidos (aceite, detergente) en bolsas plásticas por si se derraman.",
              "Cierre la tapa y apriete el aro metálico. Puede añadir precinto o candado.",
              "Escriba el nombre, teléfono y dirección de quien recibe en la tapa y en el costado.",
            ]}
          />
        </Section>

        <Section title="Artículos que no se pueden enviar">
          <CheckList items={PROHIBITED} />
        </Section>

        <Section title="Zonas de recogida">
          <p>
            Vea el día de recogida de su zona en <Link href="/zonas" className="underline">zonas de recogida</Link>:{" "}
            {TOWN_PAGES.map((t, i) => (
              <span key={t.slug}>
                <Link href={`/zonas/${t.slug}`} className="underline">{t.name}</Link>
                {i < TOWN_PAGES.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            y más.
          </p>
          <p>
            ¿Envía ropa o artículos ligeros? Vea el <Link href="/envio-de-cajas-a-republica-dominicana" className="underline">envío de cajas</Link>.
          </p>
        </Section>

        <BookCta
          title="Reserve la recogida de su tanque"
          text="Ingrese su ZIP, vea su día de ruta y confirme con $10 de depósito."
          cta="Reservar recogida"
        />

        <Section title="Preguntas frecuentes sobre el envío de tanques">
          <FaqList faqs={FAQS} />
        </Section>
      </div>
    </div>
  );
}
