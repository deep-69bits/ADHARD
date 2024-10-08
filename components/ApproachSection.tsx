"use client"
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ApproachSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const textVariants = (delay:number) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay },
    },
  });

  return (
    <motion.div
      ref={sectionRef}
      className="lg:px-20 px-4 py-20"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="uppercase text-2xl">Approach to work</div>
      <div className="flex flex-col gap-4 capitalize font-semibold text-6xl mt-10">
        <motion.div variants={textVariants(0.5)}>
          You {`Don't`} Need Something
        </motion.div>
        <motion.div variants={textVariants(0.8)}>ordinary.</motion.div>
        <motion.div variants={textVariants(1.1)}>You Need</motion.div>
        <motion.div
          className="text-custom-red flex"
          variants={textVariants(1.4)}
        >
          ADHARD
          <svg
            width="90"
            height="60"
            className="translate-x-[-20px] translate-y-[-10px]"
            viewBox="0 0 90 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.1072 0C44.7123 10.7081 38.6635 20.9257 32.4512 30.9798C26.2389 41.1157 19.6996 51.0064 12.9968 60.7335C10.4356 64.4936 7.79265 68.2264 5.06795 71.932C4.79548 72.4225 4.4685 72.8857 4.08705 73.3216L2.04352 69.8068L0 66.2102C0.27247 65.7197 0.572167 65.2565 0.89913 64.8206C2.80642 61.9869 4.71371 59.1532 6.621 56.3195C13.3782 46.6196 20.3262 37.0287 27.4649 27.5467C34.7399 18.1465 42.0966 8.90976 50.1072 0Z"
              fill="white"
            />
            <path
              d="M81.0286 53C71.632 60.3501 61.8269 67.0468 51.9401 73.4985C41.9716 79.9775 31.8941 86.2114 21.7077 92.2003C18.4938 94.0515 15.2799 95.8754 12.066 97.672C11.6302 97.9443 11.1944 98.1893 10.7586 98.4071L8.8793 95.222L7 91.9553C7.43578 91.6831 7.87155 91.4109 8.30733 91.1387C11.4668 89.2331 14.6262 87.3547 17.7856 85.5036C28.0265 79.5691 38.4036 73.8524 48.9169 68.3535C59.3756 62.8817 69.9978 57.5734 81.0286 53Z"
              fill="white"
            />
            <path
              d="M89.9097 111C78.466 114.351 66.8588 116.885 55.2516 119.256C43.5899 121.545 31.9009 123.561 20.1847 125.305C16.6971 125.85 13.2095 126.367 9.72187 126.858C9.12243 126.912 8.55022 126.967 8.00528 127.021L6.04352 123.588L4 120.155C4.54494 120.046 5.08988 119.964 5.63482 119.91C10.1033 119.092 14.5991 118.357 19.1221 117.703C30.7838 115.959 42.5272 114.488 54.3524 113.289C66.1231 112.144 77.9755 111.163 89.9097 111Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ApproachSection;

