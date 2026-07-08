import Image from "next/image";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className="
        group flex h-[80vh] w-full flex-col items-center justify-center
        overflow-hidden transition-[flex-grow] duration-300 lg:flex-1
        lg:hover:flex-[1.8]
      "
    >
      <Image
        src={service.image}
        alt={service.label}
        width={100}
        height={100}
        className="
          inset-0 h-full w-full object-cover grayscale transition-[filter]
          duration-300 group-hover:grayscale-0
        "
      />
      <div
        className="
          mt-auto flex h-[35vh] w-full flex-col justify-between bg-heading p-2
        "
      >
        <h3 className="text-[24px] whitespace-pre-line text-primary-foreground">
          {service.label}
        </h3>
        <p
          className="
            font-ibm-plex-mono text-[100px] leading-none text-primary-foreground
          "
        >
          {service.idx}.
        </p>
      </div>
    </div>
  );
}
