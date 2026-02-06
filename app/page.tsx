import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <div className="mb-10">
        <Header />
      </div>
      
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        {/* <GallerySection1 /> */}
        {/* <MissionSection /> */}
        {/* <FeaturesSection /> */}
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}