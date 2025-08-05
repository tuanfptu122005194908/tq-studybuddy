import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SubjectsSection from "@/components/SubjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FloatingChatButton from "@/components/FloatingChatButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <SubjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingChatButton />
    </div>
  );
};

export default Index;
