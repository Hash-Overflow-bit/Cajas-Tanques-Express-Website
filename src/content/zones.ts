import { PICKUP_ROUTES, type PickupRoute } from "@/lib/pickupRoutes";

/**
 * Town names for every ZIP on the pickup routes (USPS city names).
 * Pages and the /zonas table read routes from pickupRoutes.ts, so a ZIP moved
 * to another day there shows the new day everywhere.
 */
export const ZIP_TOWNS: Record<string, string> = {
  "10701": "Yonkers",
  "10703": "Yonkers",
  "10704": "Yonkers",
  "10705": "Yonkers",
  "10550": "Mount Vernon",
  "10553": "Mount Vernon",
  "10803": "Pelham",
  "10460": "Bronx",
  "10708": "Bronxville",
  "10707": "Tuckahoe",
  "10583": "Scarsdale",
  "10530": "Hartsdale",
  "10601": "White Plains",
  "10603": "White Plains",
  "10604": "White Plains",
  "10605": "White Plains",
  "10606": "White Plains",
  "10607": "White Plains",
  "06830": "Greenwich, CT",
  "06831": "Greenwich, CT",
  "06901": "Stamford, CT",
  "06902": "Stamford, CT",
  "06903": "Stamford, CT",
  "06905": "Stamford, CT",
  "06906": "Stamford, CT",
  "06907": "Stamford, CT",
  "06820": "Darien, CT",
  "06840": "New Canaan, CT",
  "06850": "Norwalk, CT",
  "06851": "Norwalk, CT",
  "06854": "Norwalk, CT",
  "10598": "Yorktown Heights",
  "10589": "Somers",
  "10501": "Amawalk",
  "10536": "Katonah",
  "10526": "Goldens Bridge",
  "10506": "Bedford",
  "10507": "Bedford Hills",
  "10549": "Mount Kisco",
  "10801": "New Rochelle",
  "10804": "New Rochelle",
  "10520": "Croton-on-Hudson",
  "10562": "Ossining",
  "10566": "Peekskill",
  "10541": "Mahopac",
};

export interface TownPage {
  slug: string;
  name: string;
  state: "NY" | "CT";
  region: string;
  zips: string[];
  /** Two short, town-specific paragraphs. Keep them factual. */
  intro: string[];
  /** Other served towns worth linking from this page. */
  nearby: string[];
}

export const TOWN_PAGES: TownPage[] = [
  {
    slug: "yonkers",
    name: "Yonkers",
    state: "NY",
    region: "condado de Westchester",
    zips: ["10701", "10703", "10704", "10705"],
    intro: [
      "Cajas & Tanques Express tiene su base en Yonkers, en 25 Saw Mill River Road, y recoge cajas y tanques en casi toda la ciudad para enviarlos puerta a puerta a la República Dominicana.",
      "Yonkers tiene dos días de recogida según el código postal: los ZIP 10701 y 10705 el lunes, y los ZIP 10703 y 10704 el martes. Ingrese su ZIP al reservar y le mostramos su día exacto.",
    ],
    nearby: ["mount-vernon", "white-plains", "bronx"],
  },
  {
    slug: "mount-vernon",
    name: "Mount Vernon",
    state: "NY",
    region: "condado de Westchester",
    zips: ["10550", "10553"],
    intro: [
      "Recogemos cajas y tanques en su casa en Mount Vernon y los enviamos puerta a puerta a cualquier provincia de la República Dominicana.",
      "Mount Vernon está en la ruta del lunes, junto con el sur de Yonkers, Pelham y parte del Bronx (10460). Reserve con $10 de depósito, que se descuenta del total.",
    ],
    nearby: ["yonkers", "new-rochelle", "bronx"],
  },
  {
    slug: "white-plains",
    name: "White Plains",
    state: "NY",
    region: "condado de Westchester",
    zips: ["10601", "10603", "10604", "10605", "10606", "10607"],
    intro: [
      "Si vive en White Plains, pasamos a recoger sus cajas y tanques a la puerta de su casa y los llevamos hasta la puerta de su familia en la República Dominicana.",
      "White Plains está en la ruta del martes, junto con Scarsdale, Hartsdale, Bronxville, Tuckahoe y el este de Yonkers.",
    ],
    nearby: ["yonkers", "new-rochelle", "greenwich-ct"],
  },
  {
    slug: "stamford-ct",
    name: "Stamford",
    state: "CT",
    region: "condado de Fairfield, Connecticut",
    zips: ["06901", "06902", "06903", "06905", "06906", "06907"],
    intro: [
      "Recogemos cajas y tanques a domicilio en Stamford, Connecticut, y los enviamos puerta a puerta a toda la República Dominicana.",
      "Stamford está en la ruta del miércoles, que cubre el sur de Connecticut: Greenwich, Darien, New Canaan y Norwalk.",
    ],
    nearby: ["greenwich-ct", "norwalk-ct", "white-plains"],
  },
  {
    slug: "new-rochelle",
    name: "New Rochelle",
    state: "NY",
    region: "condado de Westchester",
    zips: ["10801", "10804"],
    intro: [
      "Recogemos cajas y tanques a domicilio en New Rochelle y los enviamos puerta a puerta a cualquier provincia de la República Dominicana.",
      "New Rochelle (ZIP 10801 y 10804) está en la ruta del jueves, junto con el norte de Westchester: Yorktown Heights, Somers, Katonah, Bedford y Mount Kisco.",
    ],
    nearby: ["mount-vernon", "yonkers", "white-plains"],
  },
  {
    slug: "bronx",
    name: "Bronx",
    state: "NY",
    region: "ciudad de Nueva York",
    zips: ["10460"],
    intro: [
      "Recogemos cajas y tanques en el Bronx, en el código postal 10460, y los enviamos puerta a puerta a la República Dominicana.",
      "El ZIP 10460 está en la ruta del lunes, junto con Mount Vernon, Pelham y el sur de Yonkers. Por ahora no recogemos en otros códigos postales del Bronx; ingrese su ZIP al reservar para confirmarlo.",
    ],
    nearby: ["mount-vernon", "yonkers", "new-rochelle"],
  },
  {
    slug: "norwalk-ct",
    name: "Norwalk",
    state: "CT",
    region: "condado de Fairfield, Connecticut",
    zips: ["06850", "06851", "06854"],
    intro: [
      "Recogemos cajas y tanques a domicilio en Norwalk, Connecticut, y los enviamos puerta a puerta a toda la República Dominicana.",
      "Norwalk (ZIP 06850, 06851 y 06854) está en la ruta del miércoles, junto con Stamford, Greenwich, Darien y New Canaan.",
    ],
    nearby: ["stamford-ct", "greenwich-ct"],
  },
  {
    slug: "greenwich-ct",
    name: "Greenwich",
    state: "CT",
    region: "condado de Fairfield, Connecticut",
    zips: ["06830", "06831"],
    intro: [
      "Recogemos cajas y tanques a domicilio en Greenwich, Connecticut, y los enviamos puerta a puerta a cualquier provincia de la República Dominicana.",
      "Greenwich (ZIP 06830 y 06831) está en la ruta del miércoles, junto con Stamford, Darien, New Canaan y Norwalk.",
    ],
    nearby: ["stamford-ct", "norwalk-ct", "white-plains"],
  },
];

export function routeForZip(zip: string): PickupRoute | undefined {
  return PICKUP_ROUTES.find((r) => r.zips.includes(zip));
}

/** Days (in route order) a town is served, with its ZIPs for each day. */
export function townDays(town: TownPage): { route: PickupRoute; zips: string[] }[] {
  return PICKUP_ROUTES.map((route) => ({ route, zips: town.zips.filter((z) => route.zips.includes(z)) })).filter(
    (d) => d.zips.length > 0,
  );
}

export function townBySlug(slug: string): TownPage | undefined {
  return TOWN_PAGES.find((t) => t.slug === slug);
}

/** Distinct town names on a route, in the order their ZIPs appear. */
export function routeTowns(route: PickupRoute): string[] {
  return [...new Set(route.zips.map((z) => ZIP_TOWNS[z] ?? z))];
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
