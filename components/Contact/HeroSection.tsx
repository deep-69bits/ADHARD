/* eslint-disable react/no-unescaped-entities */
import React from "react";

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-r w-full from-custom-red lg:text-left text-center text-xl font-semibold via-black to-custom-red py-2 px-6 lg:w-[300px]">
      {children}
    </div>
  );
};

const Icon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM21.1535 18.1024L19.4893 16.9929C20.4436 15.5642 21 13.8471 21 12.0001C21 10.153 20.4436 8.4359 19.4893 7.00722L21.1535 5.89771C22.32 7.64386 23 9.74254 23 12.0001C23 14.2576 22.32 16.3562 21.1535 18.1024Z"
        fill="white"
      />
    </svg>
  );
};

const HeroSection = () => {
  return (
    <div className="w-full h-full gradient py-20 flex lg:flex-row bg-blue-200 flex-col lg:px-20 px-4 justify-center  gap-4">
      <div className="flex lg:flex-row flex-col w-full items-end lg:gap-40 gap-5">
        <div className="w-full flex flex-col gap-8">
          <h1 className="font-semibold lg:text-8xl text-6xl">Write to Us</h1>
          <h4 className="text-2xl lg:w-1/2 leading-normal">
            Ready to get started? Write, call, point a finger - and we'll get
            back to you as quickly as we can.
          </h4>
          <div className="flex lg:flex-row w-full flex-col items-start gap-5">
            <div
              className={
                "inline-flex px-9 cursor-pointer py-3 justify-center rounded-sm bg-gradient-to-r from-custom-red via-black to-custom-red items-center gap-2"
              }
            >
              <Icon />
              <span className="text-lg w-full font-extrabold leading-normal">
                We follow back in next 12 hours
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end w-full gap-3">
        <Label>Email- info@adhard.com</Label>
        <Label>Email- info@adhard.com</Label>
        <Label>Email- info@adhard.com</Label>
      </div>
    </div>
  );
};

export default HeroSection;
