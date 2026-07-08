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
      className="flex min-h-screen scroll-mt-16 p-5"
    >
      <div
        className="
          mx-auto flex h-[90vh] w-full max-w-[1200px] flex-col gap-10 md:gap-40
        "
      >
        <CustomButton
          outline
          className="mx-auto w-60"
          onClick={() => router.push("/portfolio-detail")}
        >
          Voir plus
        </CustomButton>
      </div>
    </SectionLayout>
  );
}
