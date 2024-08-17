import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-black lg:px-20 px-4 py-10">
      <div className="flex lg:flex-row flex-col gap-4 justify-between lg:items-center">
        <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4">
          <Link className="underline text-xl uppercase" href={"/"}>
            About
          </Link>
          <Link className="underline text-xl uppercase" href={"/"}>
            Contact Us
          </Link>
          <Link className="underline text-xl uppercase" href={"/"}>
            Adhard Digital Marketing
          </Link>
          <Link className="underline text-xl uppercase" href={"/"}>
            Adhard Development
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4">
          <Link className="underline text-xl uppercase" href={"/"}>
            Our Business Policy
          </Link>
          <Link className="underline text-xl uppercase" href={"/"}>
            Terms & Condition
          </Link>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-5  mt-10 lg:items-center items-start justify-between">
        <div className="flex flex-col gap-4">
          <span className="uppercase">made with ❤️ in india</span>
          <span className="uppercase">info@adhard.com</span>
          <span className="uppercase">+971 55 631 0801</span>

          <div className="flex lg:flex-col flex-row gap-2">
            <span className="uppercase ">LinkedIn</span>
            <span className="uppercase">Facebook</span>
            <span className="uppercase">Twitter</span>
            <span className="uppercase">Instagram</span>
          </div>
        </div>
        <div className="lg:w-4/5 w-full flex flex-col items-end">
          <Image
            className="w-full"
            src={"/Footer_Logo.svg"}
            alt="Logo"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
