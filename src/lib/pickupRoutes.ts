export type PickupWeekday = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

export interface PickupRoute {
  day: PickupWeekday;
  spanishDay: string;
  appointmentTypeId: number;
  zips: readonly string[];
}

export const PICKUP_ROUTES: readonly PickupRoute[] = [
  {
    day: "Monday",
    spanishDay: "lunes",
    appointmentTypeId: 100388971,
    zips: ["10701", "10705", "10550", "10553", "10803", "10460"],
  },
  {
    day: "Tuesday",
    spanishDay: "martes",
    appointmentTypeId: 100389687,
    zips: ["10703", "10704", "10708", "10707", "10583", "10601", "10603", "10604", "10605", "10606", "10607", "10530"],
  },
  {
    day: "Wednesday",
    spanishDay: "miércoles",
    appointmentTypeId: 100389976,
    zips: ["06830", "06831", "06901", "06902", "06903", "06905", "06906", "06907", "06820", "06840", "06850", "06851", "06854"],
  },
  {
    day: "Thursday",
    spanishDay: "jueves",
    appointmentTypeId: 100390090,
    zips: ["10598", "10589", "10501", "10536", "10526", "10506", "10507", "10549", "10801", "10804"],
  },
  {
    day: "Friday",
    spanishDay: "viernes",
    appointmentTypeId: 100390270,
    zips: ["10520", "10562", "10566", "10541"],
  },
];

const ROUTE_BY_ZIP = new Map<string, PickupRoute>();
for (const route of PICKUP_ROUTES) {
  for (const zip of route.zips) {
    if (ROUTE_BY_ZIP.has(zip)) {
      throw new Error(`El ZIP ${zip} aparece en más de una ruta`);
    }
    ROUTE_BY_ZIP.set(zip, route);
  }
}

export function findPickupRoute(zip: string): PickupRoute | null {
  if (!/^\d{5}$/.test(zip)) return null;
  return ROUTE_BY_ZIP.get(zip) ?? null;
}

export function bookingUrlForRoute(route: PickupRoute, zip: string): string {
  const url = new URL("https://CajasYtanquesExpress.as.me/");
  url.searchParams.set("appointmentType", String(route.appointmentTypeId));
  // Pre-fill Acuity's existing required ZIP Code intake field, once attached to all types.
  url.searchParams.set("field:19419231", zip);
  return url.toString();
}
