import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { boxPricing, tankPricing } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Breadcrumbs, PageHeader, Section, PriceTable, HowItWorks, FaqList, BookCta,
} from "@/components/seo/SeoBlocks";
import { TOWN_PAGES, townBySlug, townDays, capitalize } from "@/content/zones";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structuredData";
import type { FAQItem } from "@/content/homeFaqs";

type Props = { params: Promise<{ town: string }> };

export function generateStaticParams() {
  return TOWN_PAGES.map((t) => ({ town: t.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const town = townBySlug((await params).town);
  if (!town) return {};
  const days = townDays(town).map((d) => d.route.spanishDay).join(" y ");
  return {
    title: `Envío de Cajas a República Dominicana desde ${town.name}, ${town.state}`,
    description: `Recogida de cajas y tanques a domicilio en ${town.name}, ${town.state} (${days}) con envío puerta a puerta a República Dominicana. Caja desde $75. Reserve con $10.`,
    alternates: { canonical: `/zonas/${town.slug}` },
  };
}

export default async function TownPage({ params }: Props) {
  const town = townBySlug((await params).town);
  if (!town) notFound();

  const path = `/zonas/${town.slug}`;
  const days = townDays(town);
  const dayNames = days.map((d) => d.route.spanishDay);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Zonas", path: "/zonas" },
    { name: town.name, path },
  ];
  const faqs: FAQItem[] = [
    {
      question: `¿Qué día recogen en ${town.name}?`,
      answer:
        days.length === 1
          ? `En ${town.name} recogemos los ${dayNames[0]} (ZIP ${days[0].zips.join(", ")}).`
          : `Depende de su ZIP: ${days.map((d) => `${d.zips.join(", ")} el ${d.route.spanishDay}`).join("; ")}.`,
    },
    {
      question: `¿Cuánto cuesta enviar una caja desde ${town.name} a República Dominicana?`,
      answer: `La caja estándar de 18 x 18 x 28 cuesta $${boxPricing[0].price} puerta a puerta, con recogida en su casa en ${town.name}. Las cajas más grandes van de $${boxPricing[1].price} a $${boxPricing[boxPricing.length - 1].price}.`,
    },
    {
      question: "¿Cómo reservo?",
      answer: "Ingrese su ZIP en la página de reserva, elija un horario de su día y confirme con $10 de depósito, que se descuenta del total.",
    },
  ];
  const nearby = town.nearby.map((s) => townBySlug(s)).filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="pt-28 sm:pt-36 pb-16">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={serviceSchema({
          name: `Envío de cajas y tanques a República Dominicana desde ${town.name}, ${town.state}`,
          path,
          description: town.intro[0],
          areaServed: [`${town.name}, ${town.state}`],
          offers: [
            ...boxPricing.map((b) => ({ name: `${b.name} ${b.size}`, price: b.price })),
            ...tankPricing.map((t) => ({ name: t.name, price: t.price })),
          ],
        })}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={crumbs} />
        <PageHeader
          eyebrow={`${town.name}, ${town.state} · Recogida ${dayNames.join(" y ")}`}
          title={`Envío de cajas y tanques a República Dominicana desde ${town.name}, ${town.state}`}
          lead={town.intro[0]}
        />

        <Section title={`Día de recogida en ${town.name}`}>
          <p>{town.intro[1]}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {days.map((d) => (
              <li key={d.route.day} className="rounded-2xl border border-neutral-200 bg-white p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-900">{capitalize(d.route.spanishDay)}</span>
                <p className="mt-1 font-mono text-sm text-neutral-800">ZIP {d.zips.join(", ")}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Precios puerta a puerta">
          <PriceTable
            caption={`Precios desde ${town.name}`}
            rows={[
              ...boxPricing.map((b) => ({ name: b.name, detail: b.size, price: b.price, href: "/envio-de-cajas-a-republica-dominicana" })),
              ...tankPricing.map((t) => ({ name: t.name, detail: t.size, price: t.price, href: "/envio-de-tanques-a-republica-dominicana" })),
            ]}
          />
        </Section>

        <Section title="Cómo funciona">
          <HowItWorks />
        </Section>

        <BookCta
          title={`Reserve su recogida en ${town.name}`}
          text={`Ingrese su ZIP de ${town.name}, elija su horario y confirme con $10.`}
          cta="Reservar recogida"
        />

        <Section title="Preguntas frecuentes">
          <FaqList faqs={faqs} />
        </Section>

        {nearby.length > 0 && (
          <Section title="Zonas cercanas">
            <p>
              También recogemos en{" "}
              {nearby.map((t, i) => (
                <span key={t.slug}>
                  <Link href={`/zonas/${t.slug}`} className="underline">{t.name}, {t.state}</Link>
                  {i < nearby.length - 2 ? ", " : i === nearby.length - 2 ? " y " : ""}
                </span>
              ))}
              . Vea <Link href="/zonas" className="underline">todas las zonas y días</Link>.
            </p>
          </Section>
        )}
      </div>
    </div>
  );
}
