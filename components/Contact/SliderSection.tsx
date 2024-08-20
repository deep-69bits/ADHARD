import React from "react";
import Image from "next/image";
const SayHi = () => {
  return <div className="text-8xl mx-4 inline-block font-semibold"> SAY Hii</div>;
};
const SliderSection = () => {
  const images = [
    { src: "/partners/20+ Trusted Partners.svg", alt: "Image 1" },
    { src: "/partners/l11.svg", alt: "Image 2" },
    { src: "/partners/l1 2.svg", alt: "Image 3" },
    { src: "/partners/l1 3.svg", alt: "Image 4" },
    { src: "/partners/l1 4.svg", alt: "Image 5" },
    { src: "/partners/l1 4.svg", alt: "Image 5" },
    { src: "/partners/l1 4.svg", alt: "Image 5" },
  ];
  const repeatedImages = Array(2).fill(images).flat();
  return (
    <div className="my-5 bg-gradient-to-b from-custom-red via-black to-black">
      <div className="mt-10 w-full">
        <div className="image-loop">
          <div className="images flex gap-10">
            {repeatedImages.map((image, index) => (
              <SayHi key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
