import Link from "next/link";
import { sections } from "@/lib/sections";

export function Navbar() {
  return (
    <header className="border-foreground/10 bg-background/80 fixed inset-x-0 top-0 z-50 h-16 border-b backdrop-blur">
      <div className="mx-auto grid h-full w-full grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6">
        <div className="flex items-center">
          <Link
            href="#top"
            aria-label="DTNR Studio, retour en haut de la page"
            className="rounded-sm text-lg font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          >
            DTNR Studio
          </Link>
        </div>

        <nav aria-label="Navigation principale" className="justify-self-center">
          <ul className="flex items-center gap-4 text-sm font-medium sm:gap-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-foreground/70 hover:text-foreground focus-visible:text-foreground rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div aria-hidden="true" />
      </div>
    </header>
  );
}
