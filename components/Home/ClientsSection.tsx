"use client";
import React from "react";
import TextGradient from "../Text/TextGradient";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Image from "next/image";

const Clients = [
  {
    id: 1,
    name: "Mr. Luke Julian",
    occupation: "Catch, CTO",
    image: "/clients/luke.svg",
    message: `“ The line's length and style can be changed to better fit your document's general layout and style. Stars, dashes, or even graphical element are some other divider alternatives. “`,
  },
  {
    id: 2,
    name: "Mr. Luke Julian",
    occupation: "Catch, CTO",
    image: "/clients/luke.svg",
    message: `“ The line's length and style can be changed to better fit your document's general layout and style. Stars, dashes, or even graphical element are some other divider alternatives. “`,
  },
];

const SwiperButtons = ({ index }: any) => {
  const swiperBtn = useSwiper();
  return (
    <div className="flex items-center gap-4">
      <button onClick={() => swiperBtn.slidePrev()}>
        <svg
          width="87"
          height="16"
          viewBox="0 0 87 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H87V7H1V9Z"
            fill={index === 1 ? "#666666" : "white"}
          />
        </svg>
      </button>
      <button onClick={() => swiperBtn.slideNext()}>
        <svg
          width="87"
          height="16"
          viewBox="0 0 87 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.7071 8.70711C87.0976 8.31658 87.0976 7.68342 86.7071 7.29289L80.3431 0.928932C79.9526 0.538408 79.3195 0.538408 78.9289 0.928932C78.5384 1.31946 78.5384 1.95262 78.9289 2.34315L84.5858 8L78.9289 13.6569C78.5384 14.0474 78.5384 14.6805 78.9289 15.0711C79.3195 15.4616 79.9526 15.4616 80.3431 15.0711L86.7071 8.70711ZM0 9H86V7H0V9Z"
            fill={index === Clients.length ? "#666666" : "white"}
          />
        </svg>
      </button>
    </div>
  );
};

const ClientCard = ({ item }: any) => {
  return (
    <div className="flex lg:flex-row flex-col lg:items-end items-end gap-4">
      <div className="flex flex-col w-full ">
        <div className="text-2xl mb-6">{item.message}</div>
        <div className="flex flex-row place-items-end gap-5 justify-end bg-blue-300">
          <Image
            src={item.image}
            className="w-full h-full"
            width={400}
            height={400}
            alt=""
          />
        </div>
      </div>
      <div className="hidden translate-y-[-80px] lg:w-[300px] lg:flex flex-col">
        <span className="text-2xl font-bold">{item.name}</span>
        <span className="tex-xl">{item.occupation}</span>
      </div>
      <div className="lg:translate-y-[-200px]  lg:w-fit w-full flex justify-center lg:mb-0 mb-10 lg:mt-2 mt-5">
        <SwiperButtons index={item.id} />
      </div>
    </div>
  );
};

const ClientsSection = () => {
  return (
    <div className="flex lg:flex-row flex-col items-start  w-full lg:px-20 px-4 pt-20 justify-start bg-gradient-to-b from-black via-black to-custom-red">
      <div className="w-[350px] ">
        <TextGradient className="text-5xl  font-semibold">
          Our clients
        </TextGradient>
      </div>
      <div className="w-full">
        <div className="text-7xl font-semibold">Words that matter</div>
        <div className="mt-10 lg:max-w-[1100px] w-full">
          <Swiper
            navigation={true}
            modules={[Pagination, A11y]}
            className="mySwiper"
          >
            {Clients.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                <ClientCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
