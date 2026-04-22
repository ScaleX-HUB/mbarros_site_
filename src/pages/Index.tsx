import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AuthoritySection from "@/components/home/AuthoritySection";
import ManufacturingSection from "@/components/home/ManufacturingSection";
import PartnershipSection from "@/components/home/PartnershipSection";
import StructureSection from "@/components/home/StructureSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";


const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AuthoritySection />
      <ManufacturingSection />
      <PartnershipSection />
      <StructureSection />
      <ProjectsSection />
      <TestimonialsSection />

    </Layout>
  );
};

export default Index;
