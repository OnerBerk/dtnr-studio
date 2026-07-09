"use client";

import { useRouter } from "next/navigation";
import SectionLayout from "../layout/section-layout";
import { CustomButton } from "../ui/CustomButton";

export function Portfolio() {
  const router = useRouter();

  return (
    <SectionLayout
      id="portfolio"
      ariaLabelledby="portfolio-heading"
      className="
        flex max-w-none! scroll-mt-10 flex-col px-0 py-6 md:px-5 xl:py-10
      "
    >
      <div className="flex w-full flex-col items-center gap-6">
        <div
          className="
            relative aspect-2/1 w-[90vw] xl:w-full
            xl:max-w-[min(98vw,2400px,165vh)]
          "
        >
          <div
            className="
              absolute top-[15.8%] left-[20.2%] h-[60.8%] w-[30.8%]
              bg-heading/50
            "
          />
          <div
            className="
              absolute top-[9.5%] left-[41.8%] h-[24.3%] w-[36%] bg-heading/40
            "
          />
          <div
            className="
              absolute top-[27.5%] left-[51.3%] h-[53.5%] w-[22.5%]
              bg-heading/40
            "
          />
          <div
            className="
              absolute top-[54.5%] left-[40%] h-[36.5%] w-[18.9%] bg-heading/40
            "
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="
                text-title text-[20px] font-medium tracking-[0.2em]
                md:text-[60px]
              "
            >
              PORTFOLIO
            </h1>
          </div>
        </div>

        <CustomButton
          outline
          className="
            mx-auto mt-[-25px] md:mt-[-50px] md:w-70
          "
          onClick={() => router.push("/portfolio-detail")}
        >
          Voir plus
        </CustomButton>
      </div>
    </SectionLayout>
  );
}
