import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Technology from "@/components/Technology";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Technology />
      <Integration />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
