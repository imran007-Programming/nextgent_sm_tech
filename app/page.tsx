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
      <Trusted />
      <HowItWorks />
      <Benefits />
      <ProductOverview />
      <Comparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
