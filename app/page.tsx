import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import ProductOverview from "@/components/ProductOverview";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
