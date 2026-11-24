export interface Guide {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
}

export const GUIDES: Guide[] = [
  {
    slug: "como-enviar-cajas-a-republica-dominicana",
    title: "Cómo enviar cajas a República Dominicana desde Estados Unidos",
    description:
      "Paso a paso para mandar cajas y tanques a RD desde New York y Connecticut: tamaños, empaque, qué no enviar, precios y cómo reservar la recogida.",
    datePublished: "2026-11-25",
  },
  {
    slug: "como-empacar-cajas-y-tanques",
    title: "Cómo empacar cajas y tanques para enviar a República Dominicana",
    description:
      "Guía paso a paso para empacar sus cajas y tanques antes de la recogida: qué poner al fondo, cómo sellar, cómo cerrar el aro del tanque y cómo marcar los datos de quien recibe.",
    datePublished: "2026-11-24",
  },
  {
    slug: "articulos-prohibidos",
    title: "Qué no se puede enviar a República Dominicana en cajas y tanques",
    description:
      "Lista de artículos prohibidos en sus cajas y tanques a República Dominicana (armas, inflamables, químicos, drogas, dinero en efectivo) y qué sí puede enviar.",
    datePublished: "2026-11-24",
  },
];

export function guideBySlug(slug: string): Guide {
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) throw new Error(`Guía desconocida: ${slug}`);
  return g;
}
