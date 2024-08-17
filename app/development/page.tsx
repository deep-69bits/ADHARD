import React from "react";
import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/development/HeroSection";
import CTASection from "@/components/CTASection";
import ServicesSection from "@/components/development/ServicesSection";
const page = () => {
  return (
    <main className="bg-black">
      <Layout>
        <HeroSection/>
        <ServicesSection/>
        <CTASection/>
      </Layout>
    </main>
  );
};

export default page;
