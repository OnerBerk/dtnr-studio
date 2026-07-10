export const pricingOffers = [
  { name: "EXPRESS", description: "lorem ipsum dolor sit amet" },
  { name: "ESSENTIEL", description: "lorem ipsum dolor sit amet" },
  { name: "EXPERTISE", description: "lorem ipsum dolor sit amet" },
  { name: "SUR MESURE", description: "lorem ipsum dolor sit amet" },
] as const;

export type PricingOffer = (typeof pricingOffers)[number];
