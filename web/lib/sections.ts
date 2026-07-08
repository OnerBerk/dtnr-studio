/**
 * Single source of truth for the page sections.
 * Used by both the navigation bar and the page so anchors never get out of sync.
 */
export const sections = [
  { id: "a-propos", label: "À propos" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
] as const;

export type Section = (typeof sections)[number];
