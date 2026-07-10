import type { Metadata } from "next";

import { PortfolioGrid } from "@/components/PortfolioGrid";
import PageLayout from "@/components/layout/page-layout";

export const metadata: Metadata = {
  title: "Notre portfolio",
};

export default function PortfolioDetailPage() {
  return (
    <PageLayout
      ariaLabelledby="portfolio-detail-heading"
      backHref="/#portfolio"
      backLabel="Retour au portfolio"
      className="
        mx-auto flex min-h-dvh w-full max-w-[1400px] flex-col gap-10 p-5
      "
    >
      <header>
        <h1
          id="portfolio-detail-heading"
          className="
            text-title mx-auto text-center text-3xl font-medium md:text-5xl
            lg:text-7xl
          "
        >
          Notre portfolio
        </h1>
      </header>

      <section aria-label="Galerie de projets">
        <PortfolioGrid />
      </section>
    </PageLayout>
  );
}
