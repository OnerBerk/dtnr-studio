import type { Section } from "@/lib/types";

/**
 * Single source of truth for the page sections.
 * Used by both the navigation bar and the page so anchors never get out of sync.
 * Optional `href` points to a detail page instead of the section anchor.
 */
export const sections: readonly Section[] = [
  { id: "a-propos", label: "À propos" },
  { id: "services", label: "Services", href: "/services-detail" },
  { id: "portfolio", label: "Portfolio", href: "/portfolio-detail" },
  { id: "contact", label: "Contact" },
];
