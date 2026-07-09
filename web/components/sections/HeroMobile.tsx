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
      <div
        className="
          flex w-full flex-1 flex-col items-center justify-center gap-6 pb-8
        "
      >
        <div className="relative flex w-full items-center justify-center">
          <div className="aspect-video w-4/5 overflow-hidden rounded-lg">
            <Image
              src="/assets/demo1.jpeg"
              alt="DTNR Studio"
              fill
              sizes="80vw"
              className="object-cover blur-xs"
            />
          </div>
          <h1
            id="accueil-heading"
            className="
              absolute inset-0 z-10 flex items-center justify-center text-center
              font-title text-[130px] leading-none tracking-[-0.1em]
              text-heading md:text-[200px]
            "
          >
            DTNR
          </h1>
        </div>

        <div className="relative flex w-full items-center justify-center">
          <div className="aspect-square w-4/5 overflow-hidden rounded-lg">
            <Image
              src="/assets/demo1.jpeg"
              alt="DTNR Studio"
              fill
              sizes="80vw"
              className="object-cover blur-xs"
            />
          </div>
          <div
            className="
              absolute inset-0 z-10 flex flex-col items-center justify-center
              gap-2 text-center leading-none
            "
          >
            <span className="text-5xl font-medium text-heading">Studio</span>
            <span className="text-xl italic">Création 3D</span>
            <span className="text-xl  italic">
              Architecture d&apos;intérieur - Décoration
            </span>
          </div>
        </div>

        <CustomButton scrollToId="contact" className="w-full text-xl">
          Nous contacter
        </CustomButton>
      </div>
    </SectionLayout>
  );
}
