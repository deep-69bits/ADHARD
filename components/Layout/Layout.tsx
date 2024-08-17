import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-black text-white max-w-[1700px] mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
