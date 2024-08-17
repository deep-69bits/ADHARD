import Image from "next/image";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import TextGradient from "../Text/TextGradient";
const HeroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center lg:px-20 px-4 py-10 justify-center gradient">
      <div className="flex lg:flex-row flex-col items-center lg:gap-40 gap-10 ">
        <div className="lg:w-1/2 w-full flex flex-col gap-8">
          <h1 className="font-semibold lg:text-8xl text-7xl">All In One Digital Hub</h1>
          <div className="flex flex-col items-start gap-5">
            <PrimaryButton
              image="/icons/funds-box-line.svg"
              text="With 90% Success Rate"
            />
            <SecondaryButton image="/icons/funds-box-line.svg" text="HIRE US" />
          </div>
          <h4 className="text-2xl leading-normal">
            A fast-growing digital marketing company empowers your business with
            organic traffic, engagement, and increased sales rates.
          </h4>
        </div>
        <div className="w-1/2  flex justify-center">
          <Image src={"/hand-image.svg"} className="w-full" alt="Hand" width={600} height={400} />
        </div>
      </div>
      <div className="text-4xl">
        <TextGradient>Adhard Digital</TextGradient> is a leading UAE business
        development agency specialising in digital marketing, SEO, web design,
        franchise marketing, content marketing, mobile apps, and software
        development.
      </div>
    </div>
  );
};

export default HeroSection;
