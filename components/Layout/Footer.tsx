import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="bg-black px-20 py-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-4">
          <Link className="underline text-xl uppercase" href={"/"}>
            Our Business Policy
          </Link>
          <Link className="underline text-xl uppercase" href={"/"}>
            Terms & Condition
          </Link>
        </div>
      </div>

      <div className="flex gap-5  mt-10 items-center justify-between">
        <div className="flex flex-col gap-4">
          <span className="uppercase">made with ❤️ in india</span>
          <span className="uppercase">info@adhard.com</span>
          <span className="uppercase">+971 55 631 0801</span>
          <br /><br /> <br />
          <span className="uppercase mt-10">LinkedIn</span>
          <span className="uppercase">Facebook</span>
          <span className="uppercase">Twitter</span>
          <span className="uppercase">Instagram</span>
        </div>
        <div className="w-4/5 flex flex-col items-end">
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
}

export default Footer