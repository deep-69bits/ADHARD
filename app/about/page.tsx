import React from "react";
import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/About/HeroSection";
import CTASection from "@/components/CTASection";
import AuthorSection from "@/components/About/AuthorSection";
import ProcessSection from "@/components/Home/ProcessSection";
import BannerSection from "@/components/About/BannerSection";
const page = () => {
  return (
    <main className="bg-black">
      <Layout>
        <HeroSection />
        <BannerSection/>
        <AuthorSection />
        <ProcessSection />
        <CTASection />
      </Layout>
    </main>
  );
};

export default page;
