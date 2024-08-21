"use client";
import React,{useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { emojiCursor } from "cursor-effects";

const Layout = ({ children }: any) => {
  const pathname = usePathname();
  const variants = {
    hidden: { opacity: 0, x: +200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
  };
  useEffect(() => {
    // Initialize the cursor effect with red and black emojis
    new emojiCursor({ emoji: ["🔴", "⚫", "❤️", "🖤"] });
  }, []);
  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className="bg-black text-white max-w-[1700px] mx-auto overflow-hidden"
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
};

export default Layout;
