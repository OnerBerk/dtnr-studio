import type { Metadata } from "next";

import { OfferCard } from "@/components/OfferCard";
import { OffersTable } from "@/components/OffersTable";
import PageLayout from "@/components/layout/page-layout";
import { pricingOffers } from "@/lib/pricing-offers";
import { siteConfig } from "@/lib/site";

const pageDescription =
  "Découvrez les formules et tarifs DTNR Studio : Express, Essentiel, Expertise et Sur mesure.";

export const metadata: Metadata = {
  title: "Nos services et tarifs",
  description: pageDescription,
  alternates: {
    canonical: "/services-detail",
  },
  openGraph: {
    title: "Nos services et tarifs",
    description: pageDescription,
    url: "/services-detail",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function ServicesDetailPage() {
  return (
    <PageLayout
      ariaLabelledby="services-detail-heading"
      backHref="/#services"
      backLabel="Retour aux services"
      className="
        mx-auto flex min-h-dvh w-full max-w-[1650px] flex-col gap-7 px-5
      "
    >
      <header>
        <h1
          id="services-detail-heading"
          className="
            text-title mx-auto text-center text-3xl font-medium md:text-5xl
            lg:text-7xl
          "
        >
          Nos services
        </h1>
      </header>

      <section
        aria-labelledby="tarifs-list-heading"
        className="flex flex-col gap-7"
      >
        <h2 id="tarifs-list-heading" className="sr-only">
          Formules et tarifs DTNR Studio
        </h2>

        <ul
          className="
            flex flex-col gap-4 md:hidden
          "
        >
          {pricingOffers.map((offer) => (
            <OfferCard key={offer.name} offer={offer} />
          ))}
        </ul>

        <div
          className="
            hidden overflow-x-auto md:block
          "
        >
          <OffersTable offers={pricingOffers} />
        </div>
        <h2
          className="
            text-title mx-auto w-full text-center text-3xl font-medium
            text-heading md:text-5xl lg:text-7xl
          "
        >
          Notre méthode
        </h2>

        <div
          className="
            grid w-full grid-cols-1 gap-4 md:grid-cols-3
          "
        >
          <div className="col-span-1">
            <p className="text-xl font-medium">
              <span className="font-ibm-plex-mono text-2xl font-bold text-heading">
                01.ÉTUDE{" "}
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </div>
          <div className="col-span-1 mt-10">
            <p className="text-xl font-medium">
              <span className="font-ibm-plex-mono text-2xl font-bold text-heading">
                02.CONCEPTION{" "}
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </div>
          <div className="col-span-1 mt-20">
            <p className="text-xl font-medium">
              <span className="font-ibm-plex-mono text-2xl font-bold text-heading">
                03.RENDU{" "}
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
