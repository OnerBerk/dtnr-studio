import SectionLayout from "../layout/section-layout";
import { CustomButton } from "@/components/ui/CustomButton";
import Image from "next/image";

export function Hero() {
  return (
    <SectionLayout
      id="accueil"
      ariaLabelledby="accueil-heading"
      className="flex min-h-screen scroll-mt-16"
    >
      <div className="flex w-full flex-col gap-6">
        <div className="relative w-full">
          <h1
            id="accueil-heading"
            className="
              w-full font-title text-[50px] leading-none tracking-[-0.1em]
              text-heading md:text-[600px]
            "
          >
            DTNR
          </h1>

          <div
            className="
              absolute right-[40%] bottom-[-350px] flex w-[550px] flex-col
              items-start gap-4
            "
          >
            <Image
              className=" w-full rounded-lg object-contain blur-xs"
              src="/assets/demo1.jpeg"
              alt="DTNR Studio"
              width={500}
              height={500}
            />
            <CustomButton scrollToId="contact" className="w-60">
              Nous contacter
            </CustomButton>
          </div>

          <div
            className="
              absolute right-[12%] bottom-[-380px] flex w-[600px] flex-col
            "
          >
            <div className="flex flex-col items-end gap-2 py-4 leading-none">
              <span className="text-[50px] font-medium text-heading">
                Studio
              </span>
              <span className="text-[25px] font-light italic ">
                Création 3D
              </span>
              <span className="text-[25px] font-light italic ">
                Architecture d&apos;intérieur - Décoration
              </span>
            </div>

            <div className="relative aspect-video w-full">
              <Image
                src="/assets/demo1.jpeg"
                alt="DTNR Studio"
                fill
                sizes="600px"
                className="rounded-lg object-cover blur-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
