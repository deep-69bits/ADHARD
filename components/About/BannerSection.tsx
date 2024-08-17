import React from "react";

const BannerSection = () => {
  return (
    <div className="px-20 py-20">
      <div className="w-2/3 flex flex-col gap-14">
        <div className="bg-gradient-to-b from-custom-red via-custom-red to-black p-10 px-20 font-semibold text-6xl leading-[80px]">
          Driven by teamwork, digital solutions & the people that use them.
        </div>
        <div className="text-2xl">
          Adhard Digital is a leading UAE business development agency
          specializing in digital marketing, SEO, web design, franchise
          marketing, content marketing, mobile apps, and software development.
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
