declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Safely fires Meta Pixel standard and custom events.
 * SSR-safe and ad-blocker resilient.
 */
export function trackMetaEvent(
  eventName: "Lead" | "Schedule" | "Contact" | "InitiateCheckout" | string,
  customData?: Record<string, any>
) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      window.fbq("track", eventName, customData);
    } catch (err) {
      console.warn("Meta Pixel event error:", err);
    }
  }
}
