import type { Metadata } from "next";
import Link from "next/link";
import { boxPricing, tankPricing } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageHeader, Section, CheckList, FaqList, BookCta } from "@/components/seo/SeoBlocks";
import { guideBySlug } from "@/content/guides";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/structuredData";
import type { FAQItem } from "@/content/homeFaqs";

const GUIDE = guideBySlug("como-empacar-cajas-y-tanques");
const PATH = `/guias/${GUIDE.slug}`;

export const metadata: Metadata = {
  title: "Cómo Empacar Cajas y Tanques para República Dominicana",
  description: GUIDE.description,
  alternates: { canonical: PATH },
};

const CRUMBS = [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "Cómo empacar", path: PATH },
];

const FAQS: FAQItem[] = [
  {
    question: "¿Ustedes venden cajas, tanques y cinta?",
    answer:
      "Sí. Vendemos cajas vacías, tanques de 55 y 75 galones con aro, cinta comercial y wrap transparente. Pídalos por WhatsApp antes de su día de recogida.",
  },
  {
    question: "¿Tengo que cerrar la caja antes de que llegue el chofer?",
    answer:
      "Sí. Tenga sus cajas cerradas y selladas y sus tanques con el aro bien apretado antes de la hora de su cita, con los datos de quien recibe escritos por fuera.",
  },
  {
    question: "¿Qué datos escribo en la caja o el tanque?",
    answer:
      "El nombre completo, el teléfono y la dirección completa (con provincia) de la persona que recibe en República Dominicana. En el tanque, escríbalos en la tapa y en el costado.",
  },
  {
    question: "¿Puedo poner líquidos en el tanque?",
    answer:
      "Productos como aceite o detergente pueden ir bien cerrados y envueltos en bolsas plásticas por si se derraman. No se permiten sustancias inflamables ni químicos peligrosos.",
  },
];

export default function GuiaEmpacarPage() {
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
          eyebrow="Guía de empaque"
          title={GUIDE.title}
          lead="Una caja o un tanque bien empacado llega completo y sin daños. Siga estos pasos antes de su día de recogida."
        />

        <Section title="1. Elija el tamaño correcto">
          <p>
            Use cajas para ropa, zapatos, juguetes y artículos del hogar. Use tanques para víveres pesados como arroz,
            aceite, enlatados y detergentes, porque cierran herméticamente y protegen de la humedad.
          </p>
          <CheckList
            items={[
              ...boxPricing.map((b) => `${b.name} (${b.size}): ${b.idealFor}`),
              ...tankPricing.map((t) => `${t.name}: ${t.idealFor}`),
            ]}
          />
          <p className="text-sm text-neutral-500">
            Vea los precios de cada tamaño en la página de <Link href="/precios" className="underline">precios</Link>.
          </p>
        </Section>

        <Section title="2. Empaque una caja paso a paso">
          <CheckList
            items={[
              "Arme la caja y refuerce el fondo con cinta en forma de H.",
              "Ponga lo más pesado (enlatados, detergentes) en el fondo y lo liviano arriba.",
              "Envuelva lo frágil en ropa o plástico de burbujas.",
              "Rellene los espacios vacíos con ropa para que la caja no se hunda ni se deforme.",
              "Cierre la tapa y selle todas las uniones con varias capas de cinta de empaque resistente.",
            ]}
          />
        </Section>

        <Section title="3. Prepare un tanque paso a paso">
          <CheckList
            items={[
              "Llene el tanque por completo para que la carga no se mueva durante el viaje.",
              "Envuelva los líquidos (aceite, detergente) en bolsas plásticas por si se derraman.",
              "Ponga lo pesado abajo y lo más delicado arriba, protegido con ropa.",
              "Coloque la tapa y apriete bien el aro metálico. Puede añadir un precinto o candado.",
            ]}
          />
        </Section>

        <Section title="4. Marque los datos de quien recibe">
          <p>
            Escriba con marcador permanente el nombre completo, el teléfono y la dirección completa (con provincia) de
            la persona que recibe en República Dominicana. En las cajas, escríbalos en la tapa y en un costado. En los
            tanques, en la tapa y en el costado.
          </p>
        </Section>

        <Section title="5. Revise lo que no se puede enviar">
          <p>
            Antes de cerrar, confirme que no incluyó nada prohibido, como armas, inflamables, químicos, drogas o
            dinero en efectivo. Vea la lista completa en{" "}
            <Link href="/guias/articulos-prohibidos" className="underline">qué no se puede enviar</Link>.
          </p>
        </Section>

        <Section title="6. El día de la recogida">
          <p>
            Tenga todo cerrado antes de la hora de su cita. El chofer pasa por su puerta el día fijo de su zona y usted
            paga el saldo al entregarle sus cajas o tanques. El depósito de $10 se descuenta del total. Vea el día de su
            zona en <Link href="/zonas" className="underline">zonas de recogida</Link>.
          </p>
        </Section>

        <BookCta
          title="¿Ya tiene todo empacado?"
          text="Ingrese su ZIP, vea su día de recogida y reserve con $10 de depósito."
          cta="Reservar recogida"
        />

        <Section title="Preguntas frecuentes sobre el empaque">
          <FaqList faqs={FAQS} />
        </Section>
      </div>
    </div>
  );
}
