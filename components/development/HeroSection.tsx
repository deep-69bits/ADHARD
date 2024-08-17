import React from "react";
import PrimaryButton from "@/components/Button/PrimaryButton";
import SecondaryButton from "@/components/Button/SecondaryButton";

const HeroSection = () => {
  return (
    <div className="w-full h-full gradient py-20 flex flex-col  px-20 justify-center ">
      <div className="flex flex-row items-center gap-40 ">
        <div className="w-full flex flex-col gap-8">
          <h1 className="font-semibold text-8xl">ADHard Development</h1>
          <h4 className="text-2xl w-1/2 leading-normal">
            A fast-growing digital marketing company empowers your business with
            organic traffic, engagement, and increased sales rates.
          </h4>
          <div className="flex flex-row items-start gap-5">
            <PrimaryButton
              image="/icons/funds-box-line.svg"
              text="With 90% Success Rate"
            />
            <SecondaryButton image="/icons/funds-box-line.svg" text="HIRE US" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
