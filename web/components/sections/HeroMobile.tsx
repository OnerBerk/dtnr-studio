import SectionLayout from "../layout/section-layout";
import { CustomButton } from "@/components/ui/CustomButton";
import Image from "next/image";

export function HeroMobile() {
  return (
    <SectionLayout
      id="accueil"
      ariaLabelledby="accueil-heading"
      className="flex min-h-dvh scroll-mt-18 flex-col px-4 pt-18"
    >
      <h1
        id="accueil-heading"
        className="
          w-full text-center font-title text-[150px] leading-none
          tracking-[-0.1em] text-heading
        "
      >
        DTNR
      </h1>

      <div className="flex w-full flex-1 flex-col items-center gap-6 pb-8">
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/demo1.jpeg"
            alt="DTNR Studio"
            fill
            sizes="100vw"
            className="rounded-lg object-cover blur-xs"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-2 leading-none">
          <span className="text-3xl font-medium text-heading">Studio</span>
          <span className="text-base italic">Création 3D</span>
          <span className="text-base italic">
            Architecture d&apos;intérieur - Décoration
          </span>
        </div>

        <Image
          className="aspect-square w-full rounded-lg object-cover blur-xs"
          src="/assets/demo1.jpeg"
          alt="DTNR Studio"
          width={500}
          height={500}
          sizes="100vw"
        />

        <CustomButton scrollToId="contact" className="w-full text-xl">
          Nous contacter
        </CustomButton>
      </div>
    </SectionLayout>
  );
}
