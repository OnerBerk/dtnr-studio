import type { Metadata } from "next";

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
        mx-auto flex min-h-dvh w-full max-w-[1400px] flex-col gap-6 p-5
      "
    >
      <header
        className="
          mt-8 md:mt-14
        "
      >
        <h1
          id="services-detail-heading"
          className="
            text-title mx-auto text-center text-3xl font-medium text-heading
            md:text-5xl lg:text-8xl
          "
        >
          Notre portfolio
        </h1>
      </header>
    </PageLayout>
  );
}
