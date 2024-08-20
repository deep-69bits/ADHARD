import React from "react";
import PrimaryButton from "@/components/Button/PrimaryButton";
import SecondaryButton from "@/components/Button/SecondaryButton";
import TextGradient from "@/components/Text/TextGradient";
import Image from "next/image";

const FlowerSVG = () => {
  return (
    <svg
      width="106"
      className="mx-1 rotate-element lg:w-[106px] lg:h-[106px] w-[50px] h-[50px]"
      height="106"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M53 0V106" stroke="white" stroke-width="11" />
      <path d="M0 53L106 53" stroke="white" stroke-width="11" />
      <path d="M16 15L90.9533 89.9533" stroke="white" stroke-width="11" />
      <path d="M91.9534 15L17.0001 89.9533" stroke="white" stroke-width="11" />
    </svg>
  );
};
const HeroSection = () => {
  const images = [
    { src: "/partners/l11.svg", alt: "Image 2" },
    { src: "/partners/l1 2.svg", alt: "Image 3" },
    { src: "/partners/l1 3.svg", alt: "Image 4" },
    { src: "/partners/l1 4.svg", alt: "Image 5" },
  ];
  const repeatedImages = Array(5).fill(images).flat();
  return (
    <div className="w-full h-full py-20 flex flex-col  lg:px-20 px-4 justify-center bg-gradient-to-b from-custom-red via-black to-black">
      <div className="flex flex-row items-center gap-40 ">
        <div className="w-full flex flex-col gap-8">
          <h1 className="font-semibold lg:text-9xl text-6xl  hidden lg:flex">
            AB <FlowerSVG /> UT ADHARD
          </h1>
          <h1 className="font-semibold lg:text-9xl text-7xl lg:hidden flex flex-col">
            <span className="flex items-center">
              {" "}
              AB <FlowerSVG /> UT
            </span>
            ADHARD
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
            <SecondaryButton
              link="/contact"
              text="HIRE US"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 w-full">
        <TextGradient className="text-4xl translate-y-0 font-semibold">
          Our
        </TextGradient>
        <div className="flex flex-col lg:flex-row  items-center">
          <div className="lg:w-[400px] gap-4 text-3xl font-semibold">
            20+ Trusted Partners
          </div>
          <div className="image-loop">
            <div className="images flex gap-10">
              {repeatedImages.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="mx-10"
                  width={200}
                  height={200}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
