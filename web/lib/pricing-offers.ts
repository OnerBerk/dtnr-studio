import type { PricingOffer } from "@/lib/types";

export const pricingOffers: readonly PricingOffer[] = [
  {
    name: "Express: 180 €",
    description:
      "Conseils d’architecte d’intérieur : Appel vidéo de 90 minutes / Email récapitulatif avec conseils projet",
  },
  {
    name: "Essentiel: À partir de\n  300 € pièce",
    description:
      "1 planche d’inspiration / 1 shopping list / 1 aller retour /Email récapitulatif",
  },
  {
    name: "Expertise: À partir de\n  550 € pièce",
    description:
      "Tout le pack Essentiel + 1 proposition de plan d’agencement 2D / 2 rendus 3D photoréalistes / PDF présentation globale / 2 allers retours",
  },
  {
    name: "Sur mesure: Sur devis\n  à partir de  800 € pièce",
    description:
      "Tous le packs Expertise + 4 rendus photoréalistes / 3 allers retours",
  },
];
