"use client";
import React from "react";
import SecondaryButton from "../Button/SecondaryButton";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

interface LabelProps {
  children: React.ReactNode;
}

interface ServiceItem {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  labels: string[];
  image1: string;
  image2: string;
}

const ServiceData: ServiceItem[] = [
  {
    id: 1,
    title: "UI/UX Design",
    subTitle: "Design that improves user experience",
    description:
      "Conducting research to understand the target audience, behaviors.",
    labels: ["Color", "Design", "Typography", "Wireframe"],
    image1: "/serviceImages/image 12.svg",
    image2: "/serviceImages/image 13.svg",
  },
  {
    id: 2,
    title: "App Development",
    subTitle: "All from responsive to good code",
    description:
      "The process of creating software applications for mobile devices, such as smartphones.",
    labels: ["Color", "Design", "Typography", "Wireframe"],
    image1: "/serviceImages/image 14.svg",
    image2: "/serviceImages/image 15.svg",
  },
  {
    id: 3,
    title: "block chain",
    subTitle: "Decentralised, secure, transparent.",
    description:
      "Digital ledger that records transactions across multiple computers, ensuring data integrity.",
    labels: ["Color", "Design", "Typography", "Wireframe"],
    image1: "/serviceImages/image 16.svg",
    image2: "/serviceImages/image 17.svg",
  },
  {
    id: 4,
    title: "Web Development",
    subTitle: "Responsive, interactive, coding, backend.",
    description:
      "Web development is the process of building and maintaining websites or web applications.",
    labels: ["Color", "Design", "Typography", "Wireframe"],
    image1: "/serviceImages/image 18.svg",
    image2: "/serviceImages/image 19.svg",
  },
  {
    id: 5,
    title: "Cloud Service",
    subTitle: "Scalable, on-demand, storage, computing, flexible.",
    description: "On-demand computing resources and storage over the internet.",
    labels: ["Color", "Design", "Typography", "Wireframe"],
    image1: "/serviceImages/image 20.svg",
    image2: "/serviceImages/image 21.svg",
  },
];

interface ServiceCardProps {
  item: ServiceItem;
}

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <div className="w-full text-left text-xl font-semibold btn_gradient py-2 px-3 lg:w-[300px]">
      {children}
    </div>
  );
};

interface ServiceItem {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  labels: string[];
  image1: string;
  image2: string;
}

interface ServiceCardProps {
  item: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <div>
      <div className="text-custom-red uppercase lg:text-xl text-lg mt-40">
        {item.subTitle}
      </div>
      <div className="uppercase font-semibold lg:text-8xl text-5xl pt-2">
        {item.title}
      </div>
      <div className="lg:w-1/3 w-full m-auto lg:text-2xl text-xl my-4">
        {item.description}
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-between">
        {item.id % 2 ? (
          <div className="flex lg:w-1/2 w-full flex-col gap-4">
            {item.labels.map((label, index) => (
              <Label key={index}>{label}</Label>
            ))}
            <SecondaryButton link="/contact" text="HIRE US" />
          </div>
        ) : (
          <div className="lg:w-1/2 w-full">
            <Parallax speed={-2}>
              <Image
                src={item.image1}
                alt=""
                width={200}
                height={200}
                className="lg:mx-[25%]"
              />
            </Parallax>
            <Parallax speed={-1}>
              <Image
                src={item.image2}
                alt=""
                width={200}
                height={200}
                className="lg:mx-[50%] mx-[45%]"
              />
            </Parallax>
          </div>
        )}
        <svg
          width="4"
          className="h-full max-h-96 hidden lg:block"
          viewBox="0 0 4 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 0L1.99998 506" stroke="white" strokeWidth="3" />
        </svg>
        {item.id % 2 ? (
          <div className="lg:w-1/2 lg:mt-4 mt-4 w-full">
            <Parallax speed={-2}>
              <Image
                src={item.image1}
                alt=""
                width={200}
                height={200}
                className="lg:mx-[25%]"
              />
            </Parallax>
            <Parallax speed={-1}>
              <Image
                src={item.image2}
                alt=""
                width={200}
                height={200}
                className="mx-[45%]"
              />
            </Parallax>
          </div>
        ) : (
          <div className="flex lg:w-1/2 w-full flex-col lg:items-end item gap-4 lg:mt-0 mt-4">
            {item.labels.map((label, index) => (
              <Label key={index}>{label}</Label>
            ))}
            <SecondaryButton link="/contact" text="HIRE US" />
          </div>
        )}
      </div>
      <svg
        width="4"
        className=" mx-auto mt-10 h-40 lg:hidden block"
        viewBox="0 0 4 506"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 0L1.99998 506" stroke="white" strokeWidth="3" />
      </svg>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <div className="lg:px-20 px-4 py-10 text-center">
      {ServiceData.map((item, index) => (
        <ParallaxProvider key={index}>
          <ServiceCard  item={item} />
        </ParallaxProvider>
      ))}
    </div>
  );
};

export default ServicesSection;
