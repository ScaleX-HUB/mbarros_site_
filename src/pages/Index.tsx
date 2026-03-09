import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AuthoritySection from "@/components/home/AuthoritySection";
import PartnershipSection from "@/components/home/PartnershipSection";
import StructureSection from "@/components/home/StructureSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import DifferentialsSection from "@/components/home/DifferentialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AuthoritySection />
      <PartnershipSection />
      <StructureSection />
      <ProjectsSection />
      <DifferentialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
