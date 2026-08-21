"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";

import { sections } from "@/lib/sections";

export function DesktopNav() {
  const router = useRouter();

  return (
    <nav aria-label="Navigation principale" className="justify-self-center">
      <ul
        className="
          hidden items-center gap-4 text-sm font-medium
          [scroll-target-group:auto] lg:flex lg:gap-30
        "
      >
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className="
                rounded-sm font-title text-foreground focus-accessible
                font-light tracking-wider transition-colors target:text-heading
                hover:text-heading focus-visible:text-foreground lg:text-4xl
                [&:target-current]:font-medium [&:target-current]:text-heading
              "
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                if (!section.href) return;
                event.preventDefault();
                router.push(section.href);
              }}
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
