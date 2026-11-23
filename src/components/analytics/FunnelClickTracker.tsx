"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";
import { trackEvent, type FunnelEvent } from "@/lib/analytics";

/**
 * One delegated listener for every booking-funnel link on the site, so new
 * buttons are tracked without wiring each one. Set `data-cta="<place>"` on a
 * link to name where it sits; otherwise the closest section id is used.
 */
function classify(href: string): FunnelEvent | null {
  if (href.startsWith("tel:")) return "call_click";
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) return "whatsapp_click";
  if (/\.as\.me\//i.test(href) || /acuityscheduling\.com/i.test(href)) return "acuity_open";
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin === window.location.origin && url.pathname === siteConfig.bookingEntryUrl) {
      return "reservar_click";
    }
  } catch {
    // ignore malformed hrefs
  }
  return null;
}

function locate(link: HTMLElement): string {
  const tagged = link.closest<HTMLElement>("[data-cta]")?.dataset.cta;
  if (tagged) return tagged;
  if (link.closest("header, nav")) return "navbar";
  if (link.closest("footer")) return "footer";
  return link.closest<HTMLElement>("section[id]")?.id ?? "page";
}

export function FunnelClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const name = classify(link.getAttribute("href") ?? "");
      if (!name) return;
      // Clicking "Reservar" while already on /reservar is not a funnel step.
      if (name === "reservar_click" && window.location.pathname === siteConfig.bookingEntryUrl) return;

      const ctaLocation = locate(link);

      trackEvent(name, {
        cta_location: ctaLocation,
        page_path: window.location.pathname,
        ...(link.dataset.zip ? { pickup_zip: link.dataset.zip } : {}),
        ...(link.dataset.route ? { pickup_route: link.dataset.route } : {}),
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
