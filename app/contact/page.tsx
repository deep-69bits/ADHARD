import CTASection from "@/components/CTASection";
import ApproachSection from "@/components/ApproachSection";
import Layout from "@/components/Layout/Layout";
import React from "react";
import LocationSection from "@/components/Contact/LocationSection";
import HeroSection from "@/components/Contact/HeroSection";
import ContactForm from "@/components/Contact/ContactForm";
import SliderSection from "@/components/Contact/SliderSection";

const page = () => {
  return (
    <main className="bg-black">
      <Layout>
        <HeroSection />
        <SliderSection />
        <ContactForm />
        <LocationSection />
        <ApproachSection />
        <CTASection />
      </Layout>
    </main>
  );
};

export default page;
