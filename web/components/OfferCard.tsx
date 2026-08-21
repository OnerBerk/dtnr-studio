import type { PricingOffer } from "@/lib/types";

type OfferCardProps = {
  offer: PricingOffer;
};

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <li className="flex flex-col gap-3 border-2 border-heading p-4">
      <p className="text-xl font-medium whitespace-pre-line text-foreground">
        {offer.name}
      </p>
      <p className="text-base text-foreground">{offer.description}</p>
      <p className="pt-2 text-center text-lg font-medium text-foreground">
        choisir
      </p>
    </li>
  );
}
