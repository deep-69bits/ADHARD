import React from "react";
import TextGradient from "../Text/TextGradient";
import PrimaryButton from "../Button/PrimaryButton";
import Image from "next/image";

const ServiceCard = ({ item }: any) => {
  return (
    <div className="w-full p-10 flex lg:flex-row flex-col gap-10 justify-start items-start bg-gradient-to-b from-custom-red via-custom-red to-black">
      <Image
        src={item.icon}
        alt={item.icon}
        width={70}
        height={50}
      />
      <div>
        <h6 className="font-bold text-2xl mb-2">{item.title}</h6>
        <p className="text-xl font-light">{item.description} </p>
      </div>
    </div>
  );
};

const Services = [
  {
    title: "SEARCH ENGINE MARKETING",
    description:
      "We optimize sites to bring you striking conversions with the help of impressive traffic.",
    icon: "/icons/social-media-1.svg",
  },
  {
    title: "SOCIAL MEDIA OPTIMIZATION",
    description:
      "We customize unique social media marketing strategies to make your brand soar up high!",
    icon: "/icons/seo-1.svg",
  },
  {
    title: "CONTENT MARKETING",
    description:
      "Let us help you attract and retain more web traffic with ace content that sells!",
    icon: "/icons/content-1.svg",
  },
  {
    title: "WEBSITE ANALYTICS",
    description:
      "We draw powerful insights from virtually non-existent data to spruce up your strategies.",
    icon: "/icons/ana-1.svg",
  },
];
const ServiceSection = () => {
  return (
    <div className="lg:px-20 px-4 py-20">
      <TextGradient className="text-4xl"> Our services that</TextGradient>
      <div className="lg:flex  items-center justify-start">
        <PrimaryButton
          className="lg:scale-75"
          text="Eliminate Challenges, Capture Results"
        />
        <div className="text-7xl font-semibold">Express your ambitions</div>
      </div>
      <div className="grid mt-20 grid-flow-row lg:grid-cols-2 grid-cols-1 gap-20">
        {Services.map((item,index)=>{
            return <ServiceCard  item={item} key={index}/>;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
