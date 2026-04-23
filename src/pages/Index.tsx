import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AuthoritySection from "@/components/home/AuthoritySection";
import StructureSection from "@/components/home/StructureSection";
import PartnershipSection from "@/components/home/PartnershipSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DifferentialsSection from "@/components/home/DifferentialsSection";
import CTASection from "@/components/home/CTASection";
import SectionDivider from "@/components/home/SectionDivider";


const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AuthoritySection />
      <StructureSection />
      <SectionDivider />
      <PartnershipSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <DifferentialsSection />
      <SectionDivider />
      <CTASection />
    </Layout>
  );
};

export default Index;
