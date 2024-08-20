import React from 'react'
import Link from 'next/link';
const ContactButton = () => {
  return (
    <Link
      href={"/contact#contact-form"}
      className="cursor-pointer bg-[rgba(35, 35, 35, 0.70)] flex  gap-4 px-6 rounded-md py-2 bg-black bg-opacity-40 font-medium"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM21.1535 18.1024L19.4893 16.9929C20.4436 15.5642 21 13.8471 21 12.0001C21 10.153 20.4436 8.4359 19.4893 7.00722L21.1535 5.89771C22.32 7.64386 23 9.74254 23 12.0001C23 14.2576 22.32 16.3562 21.1535 18.1024Z"
          fill="white"
        />
      </svg>
      Schedule a Call
    </Link>
  );
}

export default ContactButton