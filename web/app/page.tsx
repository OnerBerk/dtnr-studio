import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HeroMobile } from "@/components/sections/HeroMobile";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
          focus:z-100 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2
          focus:text-background
        "
      >
        Aller au contenu principal
      </a>

      <span id="top" aria-hidden="true" />
      <Navbar />

      <main id="main-content">
        <div className="xl:hidden">
          <HeroMobile />
        </div>
        <div
          className="
            hidden xl:block
          "
        >
          <Hero />
        </div>
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
