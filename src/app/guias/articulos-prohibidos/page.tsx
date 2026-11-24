import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageHeader, Section, CheckList, FaqList, BookCta, PROHIBITED } from "@/components/seo/SeoBlocks";
import { guideBySlug } from "@/content/guides";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/structuredData";
import type { FAQItem } from "@/content/homeFaqs";

const GUIDE = guideBySlug("articulos-prohibidos");
const PATH = `/guias/${GUIDE.slug}`;

export const metadata: Metadata = {
  title: "Artículos Prohibidos para Enviar a República Dominicana",
  description: GUIDE.description,
  alternates: { canonical: PATH },
};

const CRUMBS = [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "Artículos prohibidos", path: PATH },
];

const FAQS: FAQItem[] = [
  {
    question: "¿Qué artículos están prohibidos en cajas y tanques a República Dominicana?",
    answer:
      "No se permiten armas de fuego, municiones o piezas de armas; sustancias químicas, inflamables o explosivas (gasolina, pintura en aerosol, fuegos artificiales); drogas o medicamentos no autorizados; ni dinero en efectivo o títulos valores.",
  },
  {
    question: "¿Puedo enviar comida?",
    answer:
      "Sí, alimentos no perecederos y bien sellados, como arroz, enlatados, aceite y pastas. No envíe comida que se dañe con el tiempo.",
  },
  {
    question: "¿Qué pasa si no sé si un artículo está permitido?",
    answer: `Pregúntenos por WhatsApp al ${siteConfig.contact.whatsappDisplay} antes de cerrar su caja o tanque. Es más fácil sacarlo antes que en la recogida.`,
  },
];

export default function GuiaProhibidosPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16">
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={articleSchema({
          headline: GUIDE.title,
          path: PATH,
          description: GUIDE.description,
          datePublished: GUIDE.datePublished,
        })}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={CRUMBS} />
        <PageHeader
          eyebrow="Guía de envío"
          title={GUIDE.title}
          lead="Por las reglas de aduana de Estados Unidos y de República Dominicana, y por la seguridad del transporte, hay artículos que no puede poner en sus cajas ni en sus tanques."
        />

        <Section title="Artículos prohibidos">
          <CheckList items={PROHIBITED} />
          <p>
            Si un envío incluye alguno de estos artículos, puede ser retenido en la aduana y retrasar toda la carga.
            Revise sus cajas y tanques antes de cerrarlos.
          </p>
        </Section>

        <Section title="Lo que sí puede enviar">
          <CheckList
            items={[
              "Ropa, zapatos y accesorios.",
              "Juguetes y útiles escolares.",
              "Artículos del hogar: cobijas, colchas, utensilios de cocina.",
              "Alimentos no perecederos y bien sellados: arroz, enlatados, aceite, pastas.",
              "Productos de limpieza y aseo bien cerrados, como detergente y jabón.",
              "Electrodomésticos pequeños, bien protegidos dentro de la caja o el tanque.",
            ]}
          />
          <p>
            Para víveres pesados y líquidos, lo mejor es un{" "}
            <Link href="/envio-de-tanques-a-republica-dominicana" className="underline">tanque</Link>; para ropa y
            artículos del hogar, una <Link href="/envio-de-cajas-a-republica-dominicana" className="underline">caja</Link>.
          </p>
        </Section>

        <Section title="¿Tiene dudas sobre un artículo?">
          <p>
            Escríbanos por WhatsApp al {siteConfig.contact.whatsappDisplay} o llame al {siteConfig.contact.phoneDisplay}{" "}
            antes de cerrar su envío. Vea también{" "}
            <Link href="/guias/como-empacar-cajas-y-tanques" className="underline">cómo empacar cajas y tanques</Link>.
          </p>
        </Section>

        <BookCta
          title="Reserve su recogida"
          text="Ingrese su ZIP, vea el día de su zona y confirme con $10 de depósito."
          cta="Reservar recogida"
        />

        <Section title="Preguntas frecuentes">
          <FaqList faqs={FAQS} />
        </Section>
      </div>
    </div>
  );
}
