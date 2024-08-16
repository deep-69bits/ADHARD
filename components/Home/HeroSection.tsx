import Image from "next/image";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import TextGradient from "../Text/TextGradient";
const HeroSection = () => {
  return (
    <div className="w-screen min-h-screen h-full flex flex-col items-center px-20 justify-center bg-gradient-to-b from-custom-red via-black to-black">
      <div className="flex flex-row items-center gap-40 ">
        <div className="w-1/2 flex flex-col gap-8">
          <h1 className="font-semibold text-8xl">All In One Digital Hub</h1>
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
          <Image src={"/hand.svg"} alt="Hand" width={400} height={400} />
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
