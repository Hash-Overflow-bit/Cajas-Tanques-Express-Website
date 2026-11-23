declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type FunnelEvent =
  | "reservar_click"
  | "zip_checked"
  | "acuity_open"
  | "call_click"
  | "whatsapp_click";

/**
 * Sends a GA4 event through the Google tag that GTM loads.
 * `transport_type: "beacon"` lets the hit survive a same-tab navigation
 * (e.g. opening Acuity or a tel: link right after the click).
 * SSR-safe and silent when blocked by an ad blocker.
 */
export function trackEvent(name: FunnelEvent, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    const gtag =
      window.gtag ??
      function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
    gtag("event", name, { ...params, transport_type: "beacon" });
  } catch (err) {
    console.warn("Analytics event error:", err);
  }
}
