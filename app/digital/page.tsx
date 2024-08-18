import CTASection from "@/components/CTASection";
import DigitalServiceSection from "@/components/digital/DigitalServiceSection";
import HeroSection from "@/components/digital/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import ServiceSection from "@/components/Home/ServiceSection";
import Layout from "@/components/Layout/Layout";
import React from "react";

const page = () => {
  return (
    <main className="bg-black">
      <Layout>
        <HeroSection />
        <DigitalServiceSection />
        <ServiceSection />
        <ApproachSection />
        <CTASection />
      </Layout>
    </main>
  );
};

export default page;
