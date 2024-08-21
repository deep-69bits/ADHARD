import React from "react";
import PrimaryButton from "@/components/Button/PrimaryButton";
import SecondaryButton from "@/components/Button/SecondaryButton";

const HeroSection = () => {
  return (
    <div className="w-full h-full gradient lg:py-40 py-20 flex flex-col  lg:px-20 px-4 justify-center ">
      <div className="flex flex-row items-center gap-40 ">
        <div className="w-full flex flex-col gap-8">
          <h1 className="font-semibold lg:text-9xl text-6xl flex lg:flex-row flex-col gap-2">
            <span>
              ADHard
            </span>
            <span className="flex">
              Devel{" "}
              <dotlottie-player
                src="https://lottie.host/f49e5088-3844-4817-a0fd-ad345bc09ec0/Q219pHIaKX.json"
                background="transparent"
                speed="1"
                style={{ width: "150px", minWidth: "50px" }}
                loop
                autoplay
              ></dotlottie-player>
              pment
            </span>
          </h1>
          <h4 className="text-2xl lg:w-1/2 leading-normal">
            A fast-growing digital marketing company empowers your business with
            organic traffic, engagement, and increased sales rates.
          </h4>
          <div className="flex lg:flex-row flex-col items-start gap-5">
            <PrimaryButton
              image="/icons/funds-box-line.svg"
              text="With 90% Success Rate"
            />
            <SecondaryButton link="/contact" text="HIRE US" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
