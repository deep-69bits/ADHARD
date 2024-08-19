import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-black lg:px-20 px-4 py-10">
      <svg
        onClick={scrollToTop}
        className="cursor-pointer absolute right-4 block lg:hidden translate-y-10"
        width="16"
        height="67"
        viewBox="0 0 16 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.7071 0.292892C8.31658 -0.0976334 7.68341 -0.0976333 7.29289 0.292892L0.92893 6.65685C0.538405 7.04738 0.538405 7.68054 0.92893 8.07107C1.31945 8.46159 1.95262 8.46159 2.34314 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.7071 0.292892ZM9 67L9 1L7 1L7 67L9 67Z"
          fill="white"
        />
      </svg>
      <div className="flex lg:flex-row flex-col gap-4 justify-between lg:items-center">
        <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4">
          <Link className="underline text-xl uppercase" href={"/about"}>
            About
          </Link>
          <Link className="underline text-xl uppercase" href={"/contact"}>
            Contact Us
          </Link>
          <Link className="underline text-xl uppercase" href={"/digital "}>
            Adhard Digital Marketing
          </Link>
          <Link className="underline text-xl uppercase" href={"/development"}>
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

          <div className="flex lg:flex-col flex-row  lg:mt-4 gap-2">
            <span className="uppercase ">LinkedIn</span>
            <span className="uppercase">Facebook</span>
            <span className="uppercase">Twitter</span>
            <span className="uppercase">Instagram</span>
          </div>
        </div>
        <div className="lg:w-4/5 w-full flex flex-col items-end">
          <svg
            onClick={scrollToTop}
            className="cursor-pointer lg:block hidden translate-y-10"
            width="16"
            height="67"
            viewBox="0 0 16 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.7071 0.292892C8.31658 -0.0976334 7.68341 -0.0976333 7.29289 0.292892L0.92893 6.65685C0.538405 7.04738 0.538405 7.68054 0.92893 8.07107C1.31945 8.46159 1.95262 8.46159 2.34314 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.7071 0.292892ZM9 67L9 1L7 1L7 67L9 67Z"
              fill="white"
            />
          </svg>
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
