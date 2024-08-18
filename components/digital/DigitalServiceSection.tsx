import React from "react";
import Image from "next/image";

const DigitalServiceCard = ({ item }: any) => {
  return (
    <div className="w-full p-10 flex  flex-col gap-10 justify-start items-start bg-gradient-to-b from-custom-red via-custom-red to-black">
      <Image src={item.icon} alt={item.icon} width={70} height={50} />
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

const DigitalServiceSection = () => {
  return (
    <div className="lg:px-20 px-4 py-10 ">
      <div className="font-semibold lg:text-6xl text-4xl lg:w-2/3 w-full">
        We create digital products using advanced technologies, make
        unforgettable designs and transform brands.
      </div>
      <div className="grid grid-flow-row lg:grid-cols-4 gap-10 mt-10 md:grid-cols-2 grid-cols-1">
        {Services.map((item, index) => {
          return <DigitalServiceCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default DigitalServiceSection;
