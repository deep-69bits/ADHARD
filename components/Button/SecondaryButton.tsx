import React from "react";
import Image from "next/image";
const SecondaryButton = ({ image, text }: any) => {
  return (
    <div className="inline-flex w-fit group px-11  cursor-pointer bg-white rounded-sm  transition-all duration-500 hover:bg-gradient-to-r  from-custom-red via-black to-custom-red  py-3 justify-center items-center gap-3">
      <span className="text-xl group-hover:text-white text-custom-red  font-extrabold leading-normal">
        {text}
      </span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:translate-x-2 transition-all duration-300 group-hover:fill-white"
      >
        <path
          d="M12 13H4V11H12V4L20 12L12 20V13Z"
          fill="#E1181F"
          className="transition-all duration-300 group-hover:fill-white"
        />
      </svg>
    </div>
  );
};

export default SecondaryButton;
