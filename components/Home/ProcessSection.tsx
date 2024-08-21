"use client";
import React from "react";
import TextGradient from "../Text/TextGradient";
import SecondaryButton from "../Button/SecondaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, A11y } from "swiper/modules";

const ProcessData = [
  {
    number: 1,
    title: "Strategy",
    description:
      "We craft result-driven strategies to meet the desired needs of audiences and stay ahead of the curve.",
  },
  {
    number: 2,
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies to create innovative solutions that drive growth and efficiency.",
  },
  {
    number: 3,
    title: "Collaboration",
    description:
      "Our team works closely with clients to ensure seamless collaboration and achieve shared goals.",
  },
  {
    number: 4,
    title: "Excellence",
    description:
      "We maintain the highest standards of quality in every project, delivering exceptional results every time.",
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
            fill={index === ProcessData.length ? "#666666" : "white"}
          />
        </svg>
      </button>
    </div>
  );
};

const ProcessCard = ({ item }: any) => {
  return (
    <div className="flex lg:flex-row flex-col gap-10 justify-start">
      <div className="text-2xl w-fit font-semibold">0{item.number}</div>
      <div className="w-full">
        <div className="flex w-full justify-between items-center">
          <span className="uppercase text-2xl font-medium">{item.title}</span>
          <span className="lg:block    hidden">
            <SwiperButtons index={item.number} />
          </span>
        </div>
        <hr className="my-3" />
        <div>
          <div className="text-xl">{item.description}</div>
        </div>
      </div>
      <span className="lg:hidden  flex items-center justify-center">
        <SwiperButtons index={item.number} />
      </span>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div className="lg:px-20 px-4 lg:py-32 py-10 flex lg:gap-0 gap-10 lg:flex-row flex-col">
      <div className="flex lg:w-[45%] w-full flex-col gap-2">
        <TextGradient className="text-4xl font-semibold">Our</TextGradient>
        <div className="text-6xl font-semibold">Process</div>
        <SecondaryButton  link="/contact" text="HIRE US"/>
      </div>
      <div className="lg:w-[55%] w-full">
        <Swiper
          navigation={true}
          modules={[Pagination, A11y]}
          className="mySwiper"
        >
          {ProcessData.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <ProcessCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProcessSection;
