"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { sections } from "@/lib/sections";

export function Navbar() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="border-foreground/10 bg-background/80 fixed inset-x-0 top-0 z-50 h-16 border-b backdrop-blur">
      <div className="mx-auto grid h-full w-full grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6">
        <div className="flex items-center">
          <Link
            href="#top"
            aria-label="DTNR Studio, retour en haut de la page"
            className="focus-accessible hidden rounded-sm text-sm font-bold tracking-tight shadow-sm md:block md:text-lg md:shadow-none"
          >
            DTNR Studio
          </Link>
        </div>

        <nav aria-label="Navigation principale" className="justify-self-center">
          <ul className="flex items-center gap-4 text-sm font-medium sm:gap-6">
            {sections.map((section) => {
              const isActive = section.id === activeId;

              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`focus-accessible rounded-sm text-sm transition-colors md:text-lg ${
                      isActive
                        ? "text-heading font-bold"
                        : "text-foreground/70 hover:text-foreground focus-visible:text-foreground"
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div aria-hidden="true" />
      </div>
    </header>
  );
}
