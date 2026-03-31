import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AuthoritySection from "@/components/home/AuthoritySection";
import PartnershipSection from "@/components/home/PartnershipSection";
import StructureSection from "@/components/home/StructureSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import DifferentialsSection from "@/components/home/DifferentialsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";


const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AuthoritySection />
      <PartnershipSection />
      <StructureSection />
      <ProjectsSection />
      <DifferentialsSection />
      <TestimonialsSection />

    </Layout>
  );
};

export default Index;
