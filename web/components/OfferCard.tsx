import type { PricingOffer } from "@/lib/pricing-offers";

type OfferCardProps = {
  offer: PricingOffer;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <li className="flex flex-col gap-3 border-2 border-heading p-4">
      <p className="font-ol-round-gothic text-xl font-medium text-foreground">
        {offer.name}
      </p>
      <p className="text-base text-foreground">{offer.description}</p>
      <p
        className="
          pt-2 text-center font-ol-round-gothic text-lg font-medium
          text-foreground
        "
      >
        choisir
      </p>
    </li>
  );
}
