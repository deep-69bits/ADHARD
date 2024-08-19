import React from "react";
import Script from "next/script";
import Image from "next/image";
const CTASection = () => {
  return (
    <div className="flex flex-col items-center text-center lg:px-20 px-4 py-20 justify-center gradient">
      <Script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      ></Script>
      <Image src={"/Logo.svg"} alt="ADHARD_LOGO" height={100} width={100} />

      <div className="pt-4 uppercase text-2xl">
        ready to do something <br /> cool together?
      </div>

      <div className="flex lg:flex-row flex-col my-10 items-center border border-custom-red py-6 px-10 lg:text-8xl text-7xl w-full lg:w-fit font-semibold">
        {`LET'S`}
        <dotlottie-player
          src="https://lottie.host/804dbaf6-b4d4-49cc-b84f-30588ec42a43/ryq41gA0sY.json"
          background="transparent"
          speed="1"
          className="lg:w-[300px] w-[100px]"
          loop
          autoplay
        ></dotlottie-player>
        START
      </div>
      <div className="text-2xl">
        We will be happy to discuss your project <br /> and your business objectives
      </div>
    </div>
  );
};

export default CTASection;
