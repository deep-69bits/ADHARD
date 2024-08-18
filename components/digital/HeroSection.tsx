import React from 'react'
import PrimaryButton from "@/components/Button/PrimaryButton";
import SecondaryButton from "@/components/Button/SecondaryButton";

const HeroSection = () => {
  return (
    <div className="w-full h-full gradient py-20 flex flex-col  lg:px-20 px-4 justify-center ">
      <div className="flex flex-row items-center gap-40 ">
        <div className="w-full flex flex-col gap-8">
          <h1 className="font-semibold lg:text-8xl text-6xl">ADHard Digital</h1>
          <h4 className="text-2xl lg:w-1/2 leading-normal">
            Leverage a variety of technologies to streamline operations.
          </h4>
          <div className="flex lg:flex-row flex-col items-start gap-5">
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
}

export default HeroSection