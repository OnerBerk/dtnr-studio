"use client";

import { useRouter } from "next/navigation";
import { services } from "@/lib/services";
import SectionLayout from "../layout/section-layout";
import { CustomButton } from "../ui/CustomButton";
import { ServiceCard } from "../ServiceCard";

export function Services() {
  const router = useRouter();

  return (
    <SectionLayout
      id="services"
      ariaLabelledby="services-heading"
      className="flex min-h-screen scroll-mt-16 p-5"
    >
      <div
        className="
          mx-auto flex w-full max-w-[1400px] flex-col gap-5 lg:h-[80vh]
        "
      >
        <div
          className="
            grid grid-cols-2 gap-3 md:grid-cols-2 lg:flex
          "
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <CustomButton
          outline
          className="mx-auto"
          onClick={() => router.push("/services-detail")}
        >
          Voir nos services et tarifs
        </CustomButton>
      </div>
    </SectionLayout>
  );
}
