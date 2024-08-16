"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
    { name: "About", link: "/" },
    { name: "Development", link: "/" },
    { name: "Digital", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <div>
      <div
        className={
          "bg-custom-red w-screen px-20 pt-4 flex flex-row justify-between items-center"
        }
      >
        {}
        <Image src={"/Logo.svg"} alt="ADHARD_LOGO" height={100} width={100} />
        <div>
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
        <div className="w-full h-screen  top-0 bg-black  bg-opacity-75 z-50 absolute flex justify-end">
          <div
            id="triangle"
            className="h-screen w-[55%] py-10 flex flex-col gap-10 items-end px-20 bg-gradient-to-b from-custom-red via-black to-black "
          >
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
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
