"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";

import { sections } from "@/lib/sections";

type MobileNavPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavPanel({ open, onClose }: MobileNavPanelProps) {
  const router = useRouter();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <nav
      id="mobile-nav"
      aria-label="Navigation mobile"
      aria-hidden={!open}
      className={`
        absolute inset-x-0 top-full -z-10 border-b border-foreground/10
        bg-background/50 backdrop-blur-md transition-transform duration-300
        ease-out lg:hidden
        ${open ? "translate-y-0" : "pointer-events-none -translate-y-full"}
      `}
    >
      <ul
        className="
          flex w-full flex-col gap-1 px-4 py-4 sm:px-6
        "
      >
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className="
                block rounded-sm py-3 font-title text-2xl font-light
                tracking-wider text-foreground focus-accessible
                transition-colors target:text-heading hover:text-heading
                focus-visible:text-foreground [&:target-current]:font-medium
                [&:target-current]:text-heading
              "
              tabIndex={open ? undefined : -1}
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                onClose();
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
