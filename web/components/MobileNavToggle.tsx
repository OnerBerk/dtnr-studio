"use client";

import Image from "next/image";

type MobileNavToggleProps = {
  open: boolean;
  onToggle: () => void;
};

export function MobileNavToggle({ open, onToggle }: MobileNavToggleProps) {
  return (
    <div className="flex items-center justify-end">
      <button
        type="button"
        className="
          rounded-sm p-1 focus-accessible lg:hidden
        "
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={onToggle}
      >
        <Image
          src="/assets/hamburger.png"
          alt=""
          width={40}
          height={40}
          className="h-8 w-8 object-contain"
          aria-hidden
        />
      </button>
    </div>
  );
}
