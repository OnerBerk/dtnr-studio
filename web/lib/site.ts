import type { SiteConfig } from "@/lib/types";

/**
 * Centralised site configuration reused across metadata, manifest and sitemap.
 * Override the URL through the `NEXT_PUBLIC_SITE_URL` environment variable.
 */
export const siteConfig: SiteConfig = {
  name: "DTNR Studio",
  title: "DTNR Studio",
  description: "DTNR Studio — application web Next.js.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "fr_FR",
  twitter: "@dtnr_studio",
};
