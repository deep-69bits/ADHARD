import React from "react";
import TextGradient from "../Text/TextGradient";
import SecondaryButton from "../Button/SecondaryButton";
import Image from "next/image";

const AuthorSection = () => {
  return (
    <div className="lg:px-20 gradient px-4 flex lg:flex-row flex-col w-full lg:gap-40 gap-10  pt-10">
      <div className="lg:w-1/2 w-full flex flex-col gap-10">
        <div>
          <TextGradient
            className="font-semibold text-4xl"
            text=" The aura behind"
          >
            The aura behind
          </TextGradient>
          <div className="text-4xl font-semibold">Mr. Vivek Jain</div>
        </div>
        <div className="text-xl">
          He is Dubai based Indian Entrepreneur and an Angel Investor , He has
          founded and engraved many dynamic companies blooming with his vision.
          <br />
          Vivek’s latest venture is budding and blooming across globe , ADHARD
          the complete tech solution ! Adhard will be covering online & offline
          Branding and Marketing along with Celebrity Management all under one
          cloud.
        </div>
        <div className="hidden lg:block">
          <SecondaryButton text="SAY Hii to VIVEK" />
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <Image
          src={"/vivek-jain.svg"}
          alt="Vivek Jain"
          width={400}
          height={400}
        />
        <div className="lg:hidden block">
          <SecondaryButton className="w-full" text="SAY Hii to VIVEK" />
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
