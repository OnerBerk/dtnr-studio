export const services = [
  {
    id: "service-1",
    image: "/assets/demo1.jpeg",
    label: "Architecture\n d'intérieur & rendu\n 3D",
    idx: "01",
  },
  {
    id: "service-2",
    image: "/assets/demo1.jpeg",
    label: "Exterieur & rendu\n 3D",
    idx: "02",
  },
  {
    id: "service-3",
    image: "/assets/demo1.jpeg",
    label: "Consultation\n express projet\n et design de d'interieur",
    idx: "03",
  },
  {
    id: "service-4",
    image: "/assets/demo1.jpeg",
    label: "Conception +\n sourcing sur mesure",
    idx: "04",
  },
] as const;

export type Service = (typeof services)[number];
