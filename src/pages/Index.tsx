import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsStrip from "@/components/BenefitsStrip";
import ServicesSection from "@/components/ServicesSection";
import CtaBanner from "@/components/CtaBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsStrip />
      <ServicesSection />
      <CtaBanner />
      <TestimonialsSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
