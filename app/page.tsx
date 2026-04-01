import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import ProductOverview from "@/components/sections/ProductOverview";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <section id="features" className="scroll-mt-20"><Trusted /></section>
      <HowItWorks />
      <section id="benefits" className="scroll-mt-20"><Benefits /></section>
      <ProductOverview />
      <section id="comparison" className="scroll-mt-20"><Comparison /></section>
      <section id="pricing" className="scroll-mt-20"><Pricing /></section>
      <Testimonials />
      <section id="faq" className="scroll-mt-20"><FAQ /></section>
      <Footer />
    </main>
  );
}
