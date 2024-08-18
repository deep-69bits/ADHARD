import CTASection from "@/components/CTASection";
import ApproachSection from "@/components/ApproachSection";
import ClientsSection from "@/components/Home/ClientsSection";
import HeroSection from "@/components/Home/HeroSection";
import ProcessSection from "@/components/Home/ProcessSection";
import ServiceSection from "@/components/Home/ServiceSection";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      <Layout>
        <HeroSection />
        <ServiceSection />
        <ProcessSection />
        <ClientsSection />
        <ApproachSection />
        <CTASection />
      </Layout>
    </main>
  );
}
