"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ContactButton from "../Button/ContactButton";

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [open]);

  const NavLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Development", link: "/development" },
    { name: "Digital", link: "/digital" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div>
      <div
        className={
          "bg-[#F10000] max-w-[1700px] m-auto w-screen lg:px-20 px-4 pt-4 flex lg:flex-row gap-4 flex-col justify-between items-center"
        }
      >
        {}
        <Image
          src={"/Logo.svg"}
          alt="ADHARD_LOGO"
          height={100}
          width={100}
          className="lg:block hidden"
        />
        <div>
          <Image
            src={"/Header_logo2.svg"}
            alt="ADHARD_LOGO"
            height={100}
            width={100}
            className="lg:hidden w-full block"
          />
          <hr className="mt-2 h-1  lg:hidden w-full block" />
        </div>
        <div className="flex w-full lg:w-fit justify-between items-center gap-4">
          <ContactButton />
          <Image
            onClick={() => {
              setOpen(!open);
            }}
            src={"/HamburgerIcon.svg"}
            alt="ADHARD_LOGO"
            height={100}
            width={40}
            className="cursor-pointer"
          />
        </div>
      </div>

      {open ? (
        <div className="w-full h-screen  top-0 bg-black max-w-[1700px] bg-opacity-75 z-50 absolute  flex justify-end">
          <div
            id="triangle"
            className="h-screen  w-[55%] py-10 lg:flex hidden flex-col gap-10 items-end px-20 bg-gradient-to-b from-custom-red via-black to-black "
          >
            <div className="flex w-full lg:w-fit justify-between items-center gap-4">
              <ContactButton />
              <Image
                onClick={() => {
                  setOpen(!open);
                }}
                src={"/Cross.svg"}
                alt="ADHARD_LOGO"
                height={100}
                width={30}
                className="cursor-pointer"
              />
            </div>
            {NavLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => {
                    setOpen(!open);
                  }}
                  href={item.link}
                  className="text-7xl font-semibold"
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="flex uppercase gap-5 text-xl">
              <Link href={"/"}>LINKEDIN</Link>
              <Link href={"/"}>FACEBOOK</Link>
              <Link href={"/"}>TWITTER</Link>
              <Link href={"/"}>INSTAGRAM</Link>
            </div>
          </div>
          <div className="h-screen w-full py-10 flex lg:hidden flex-col gap-10 items-center lg:px-20 px-4 gradient">
            {NavLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => {
                    setOpen(!open);
                  }}
                  href={item.link}
                  className="text-5xl font-semibold"
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="flex uppercase gap-4 text-sm">
              <Link href={"/"}>LINKEDIN</Link>
              <Link href={"/"}>FACEBOOK</Link>
              <Link href={"/"}>TWITTER</Link>
              <Link href={"/"}>INSTAGRAM</Link>
            </div>
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="cursor-pointer max-w-[1700px] bg-[rgba(35, 35, 35, 0.70)] text-xl items-center flex text-center justify-center  gap-4 px-6 rounded-md py-2 bg-black bg-opacity-40 font-medium w-full"
            >
              Close
              <Image
                onClick={() => {
                  setOpen(!open);
                }}
                src={"/Cross.svg"}
                alt="ADHARD_LOGO"
                height={60}
                width={20}
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
