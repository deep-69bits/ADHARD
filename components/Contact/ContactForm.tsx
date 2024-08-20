import React from "react";
import SecondaryButton from "../Button/SecondaryButton";

const ContactForm = () => {
  return (
    <div id="contact-form" className="px-4 lg:px-20 py-20 grid grid-flow-row lg:grid-cols-2 grid-cols-1 gap-5">
      <div>
        Do you have a project in mind? <br /> Contact AdHard and start working
        to make it <br /> real and beyond expectations. It is just as <br />{" "}
        easy as staring to type:
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="bg-transparent text-4xl placeholder:text-white border-b border-b-white pb-2  focus:outline-none text-white"
          placeholder="Name"
        />
        <input
          type="email"
          className="bg-transparent text-4xl placeholder:text-white border-b border-b-white pb-2  focus:outline-none text-white"
          placeholder="Email"
        />
        <input
          type="text"
          className="bg-transparent text-4xl placeholder:text-white border-b border-b-white pb-2  focus:outline-none text-white"
          placeholder="Mobile"
        />
        <input
          type="text"
          className="bg-transparent text-4xl placeholder:text-white border-b border-b-white pb-2  focus:outline-none text-white"
          placeholder="Service"
        />
        <input
          type="text"
          className="bg-transparent text-4xl placeholder:text-white border-b border-b-white pb-2  focus:outline-none text-white"
          placeholder="Message"
        />
        <div className="mt-5">
          <SecondaryButton link="/contact" text="SEND" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
