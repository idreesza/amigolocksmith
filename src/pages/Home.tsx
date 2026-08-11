import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import Process from "@/sections/Process";
import Areas from "@/sections/Areas";
import Pricing from "@/sections/Pricing";
import Reviews from "@/sections/Reviews";
import Faq from "@/sections/Faq";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import StickyCall from "@/sections/StickyCall";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function Home() {
  const location = useLocation();

  // Handle cross-page hash navigation (e.g. /#pricing from a city page)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    const id = location.hash.slice(1);
    // Retry briefly — sections mount right after route change
    let tries = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 20) {
        clearInterval(timer);
        el?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
      }
    }, 50);
    return () => clearInterval(timer);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#04110D] text-slate-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Areas />
        <Pricing />
        <Reviews />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
    </div>
  );
}
