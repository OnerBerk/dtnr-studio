import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HeroMobile } from "@/components/sections/HeroMobile";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import Footer from "@/components/footer";
import PageLayout from "@/components/layout/page-layout";

export default function Home() {
  return (
    <>
      <span id="top" aria-hidden="true" />
      <Navbar />

      <PageLayout>
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
      </PageLayout>
      <Footer />
    </>
  );
}
