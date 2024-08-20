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

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <div className=" w-full lg:text-left text-center text-base font-semibold btn_gradient py-2 px-2 lg:w-[300px]">
      {children}
    </div>
  );
};


const ServiceSection = () => {
  return (
    <div className="lg:px-20 px-4 py-20">
      <TextGradient className="text-4xl"> Our services that</TextGradient>
      <div className="lg:flex  items-center justify-start gap-5">
        <Label>Eliminate Challenges, Capture Results</Label>
        <div className="text-6xl font-semibold">
          <svg
            className="absolute translate-x-[-30px] lg:block hidden translate-y-[-100px]"
            width="89"
            height="85"
            viewBox="0 0 119 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.1072 0C44.7123 10.7081 38.6635 20.9257 32.4512 30.9798C26.2389 41.1157 19.6996 51.0064 12.9968 60.7335C10.4356 64.4936 7.79265 68.2264 5.06795 71.932C4.79548 72.4225 4.4685 72.8857 4.08705 73.3216L2.04352 69.8068L0 66.2102C0.27247 65.7197 0.572167 65.2565 0.89913 64.8206C2.80642 61.9869 4.71371 59.1532 6.621 56.3195C13.3782 46.6196 20.3262 37.0287 27.4649 27.5467C34.7399 18.1465 42.0966 8.90976 50.1072 0Z"
              fill="white"
            />
            <path
              d="M83.1479 68.8809C73.7513 76.2309 63.9462 82.9277 54.0594 89.3794C44.0908 95.8583 34.0134 102.092 23.8269 108.081C20.613 109.932 17.3991 111.756 14.1852 113.553C13.7495 113.825 13.3137 114.07 12.8779 114.288L10.9986 111.103L9.11926 107.836C9.55505 107.564 9.99081 107.292 10.4266 107.02C13.586 105.114 16.7455 103.236 19.9049 101.384C30.1458 95.45 40.5229 89.7333 51.0361 84.2343C61.4949 78.7626 72.1171 73.4542 83.1479 68.8809Z"
              fill="white"
            />
            <path
              d="M118.01 138.633C106.566 141.984 94.9593 144.518 83.352 146.889C71.6903 149.177 60.0014 151.194 48.2852 152.937C44.7975 153.482 41.3099 154 37.8223 154.49C37.2229 154.545 36.6507 154.599 36.1057 154.654L34.144 151.221L32.1005 147.788C32.6454 147.679 33.1903 147.597 33.7353 147.542C38.2038 146.725 42.6995 145.989 47.2225 145.335C58.8842 143.592 70.6277 142.12 82.4529 140.921C94.2236 139.777 106.076 138.796 118.01 138.633Z"
              fill="white"
            />
          </svg>
          Express your ambitions
          <svg
            className="absolute translate-x-[-100px] lg:block hidden translate-y-[10px]"
            width="89"
            height="85"
            viewBox="0 0 119 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.9029 154.654C73.2978 143.946 79.3467 133.728 85.559 123.674C91.7713 113.538 98.3105 103.647 105.013 93.9203C107.575 90.1602 110.217 86.4274 112.942 82.7218C113.215 82.2313 113.542 81.7681 113.923 81.3322L115.967 84.847L118.01 88.4436C117.738 88.9341 117.438 89.3973 117.111 89.8332C115.204 92.6669 113.296 95.5006 111.389 98.3343C104.632 108.034 97.6839 117.625 90.5452 127.107C83.2703 136.507 75.9136 145.744 67.9029 154.654Z"
              fill="white"
            />
            <path
              d="M34.8623 85.7729C44.2589 78.4229 54.0639 71.7262 63.9508 65.2744C73.9193 58.7955 83.9968 52.5615 94.1832 46.5726C97.3971 44.7215 100.611 42.8976 103.825 41.1009C104.261 40.8287 104.696 40.5837 105.132 40.3659L107.012 43.5509L108.891 46.8176C108.455 47.0898 108.019 47.3621 107.584 47.6343C104.424 49.5399 101.265 51.4182 98.1052 53.2693C87.8643 59.2038 77.4873 64.9206 66.974 70.4195C56.5152 75.8912 45.893 81.1996 34.8623 85.7729Z"
              fill="white"
            />
            <path
              d="M-3.8147e-05 16.0211C11.4437 12.6697 23.0509 10.1358 34.6581 7.76528C46.3198 5.47653 58.0088 3.46026 69.725 1.71645C73.2126 1.17151 76.7002 0.653826 80.1878 0.16338C80.7872 0.108886 81.3595 0.0543814 81.9044 -0.000112534L83.8661 3.43302L85.9097 6.86612C85.3647 6.97511 84.8198 7.05687 84.2748 7.11136C79.8063 7.92877 75.3106 8.66442 70.7876 9.31835C59.1259 11.0622 47.3825 12.5335 35.5573 13.7324C23.7866 14.8767 11.9341 15.8576 -3.8147e-05 16.0211Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="grid mt-32 grid-flow-row lg:grid-cols-2 grid-cols-1 gap-20">
        {Services.map((item, index) => {
          return <ServiceCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
