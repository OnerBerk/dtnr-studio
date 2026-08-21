"use client";

import { useState } from "react";
import Image from "next/image";

import { DesktopNav } from "@/components/DesktopNav";
import { MobileNavToggle } from "@/components/MobileNavToggle";
import { MobileNavPanel } from "@/components/MobileNavPanel";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative">
        <div
          className="
            relative z-10 mx-auto grid h-20 w-full grid-cols-[1fr_auto_1fr]
            items-center gap-4 border-b border-foreground/10 bg-background/80
            px-4 backdrop-blur sm:px-6
          "
        >
          <div className="flex items-center">
            <Image
              src="/assets/logo-transparent.png"
              alt="DTNR Studio"
              width={100}
              height={100}
              className="
                h-14 w-auto sm:h-18
              "
            />
          </div>

          <DesktopNav />

          <MobileNavToggle
            open={open}
            onToggle={() => setOpen((prev) => !prev)}
          />
        </div>

        <MobileNavPanel open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
