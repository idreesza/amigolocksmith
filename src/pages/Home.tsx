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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-200 antialiased">
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
