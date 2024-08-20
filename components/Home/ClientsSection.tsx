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

const SVG1 = () => {
  return (
    <svg
      width="70"
      height="80"
      viewBox="0 0 119 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute translate-y-8 -translate-x-28 hidden lg:block"
    >
      <path
        d="M67.9031 154.654C73.298 143.946 79.3468 133.728 85.5591 123.674C91.7714 113.538 98.3107 103.647 105.013 93.9203C107.575 90.1602 110.218 86.4274 112.942 82.7218C113.215 82.2313 113.542 81.7681 113.923 81.3322L115.967 84.847L118.01 88.4436C117.738 88.9341 117.438 89.3973 117.111 89.8332C115.204 92.6669 113.297 95.5006 111.389 98.3343C104.632 108.034 97.684 117.625 90.5453 127.107C83.2704 136.507 75.9137 145.744 67.9031 154.654Z"
        fill="white"
      />
      <path
        d="M34.8625 85.7729C44.2591 78.4229 54.0642 71.7262 63.951 65.2744C73.9195 58.7955 83.997 52.5615 94.1834 46.5726C97.3973 44.7215 100.611 42.8976 103.825 41.1009C104.261 40.8287 104.697 40.5837 105.133 40.3659L107.012 43.5509L108.891 46.8176C108.455 47.0898 108.02 47.3621 107.584 47.6343C104.424 49.5399 101.265 51.4182 98.1055 53.2693C87.8646 59.2038 77.4875 64.9206 66.9743 70.4195C56.5155 75.8912 45.8933 81.1996 34.8625 85.7729Z"
        fill="white"
      />
      <path
        d="M-3.8147e-05 16.0212C11.4437 12.6699 23.0509 10.1359 34.6581 7.7654C46.3198 5.47665 58.0088 3.46038 69.725 1.71657C73.2126 1.17163 76.7002 0.653948 80.1878 0.163502C80.7872 0.109008 81.3595 0.0545034 81.9044 9.53674e-06L83.8661 3.43314L85.9097 6.86624C85.3647 6.97523 84.8198 7.05699 84.2748 7.11148C79.8063 7.92889 75.3106 8.66455 70.7876 9.31847C59.1259 11.0623 47.3825 12.5336 35.5573 13.7325C23.7866 14.8769 11.9341 15.8578 -3.8147e-05 16.0212Z"
        fill="white"
      />
    </svg>
  );
};
const SVG2 = () => {
  return (
    <svg
      width="70"
      height="80"
      className="absolute translate-y-[-170px] translate-x-[-30px] hidden lg:block"
      viewBox="0 0 119 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.1072 0C44.7123 10.7081 38.6635 20.9257 32.4512 30.9798C26.2389 41.1157 19.6996 51.0064 12.9968 60.7335C10.4356 64.4936 7.79265 68.2264 5.06795 71.932C4.79548 72.4225 4.4685 72.8857 4.08705 73.3216L2.04352 69.8068L0 66.2102C0.27247 65.7197 0.572167 65.2565 0.89913 64.8206C2.80642 61.9869 4.71371 59.1532 6.621 56.3195C13.3782 46.6196 20.3262 37.0287 27.4649 27.5467C34.7399 18.1465 42.0966 8.90976 50.1072 0Z"
        fill="white"
      />
      <path
        d="M83.1477 68.8809C73.7512 76.2309 63.9461 82.9277 54.0592 89.3794C44.0907 95.8583 34.0132 102.092 23.8268 108.081C20.6129 109.932 17.399 111.756 14.1851 113.553C13.7493 113.825 13.3135 114.07 12.8777 114.288L10.9984 111.103L9.11914 107.836C9.55492 107.564 9.99069 107.292 10.4265 107.02C13.5859 105.114 16.7453 103.236 19.9048 101.384C30.1457 95.45 40.5227 89.7333 51.036 84.2343C61.4948 78.7626 72.117 73.4542 83.1477 68.8809Z"
        fill="white"
      />
      <path
        d="M118.01 138.633C106.567 141.984 94.9594 144.518 83.3522 146.889C71.6905 149.177 60.0015 151.194 48.2853 152.937C44.7977 153.482 41.3101 154 37.8225 154.49C37.223 154.545 36.6508 154.599 36.1059 154.654L34.1441 151.221L32.1006 147.788C32.6455 147.679 33.1905 147.597 33.7354 147.542C38.2039 146.725 42.6997 145.989 47.2227 145.335C58.8844 143.592 70.6278 142.12 82.453 140.921C94.2237 139.777 106.076 138.796 118.01 138.633Z"
        fill="white"
      />
    </svg>
  );
};

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
    <div className="flex lg:flex-row flex-col items-start  w-full lg:px-20 px-4 pt-20 justify-start cta-gradient">
      <div className="w-[350px] ">
        <TextGradient className="text-5xl  font-semibold">
          Our clients
        </TextGradient>
      </div>
      <div className="w-full">
        <div className="lg:text-7xl text-6xl lg:mt-8 font-semibold">
          <SVG1 />
          Words that matter
          <SVG2 />
        </div>
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
