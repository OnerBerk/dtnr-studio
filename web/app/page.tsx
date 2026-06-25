import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="focus:bg-foreground focus:text-background sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:px-4 focus:py-2"
      >
        Aller au contenu principal
      </a>

      <span id="top" aria-hidden="true" />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  );
}
