import Image from "next/image";
import React from "react";
import classNames from "classnames";

const PrimaryButton = ({ image, text, className }: any) => {
  return (
    <div
      className={classNames(
        "inline-flex px-9 cursor-pointer py-3 justify-center rounded-sm bg-gradient-to-r from-custom-red via-black to-custom-red items-center gap-2",
        className
      )}
    >
      {image ? <Image src={image} height={20} width={20} alt="icon" /> : null}
      <span className="text-xl font-extrabold leading-normal">{text}</span>
    </div>
  );
};

export default PrimaryButton;
