import React from 'react'
import TextGradient from '../Text/TextGradient';

const ClientsSection = () => {
  return (
    <div className="flex lg:flex-row flex-col items-start gap-10 w-full lg:px-20 px-4 py-20 justify-start bg-gradient-to-b from-black via-black to-custom-red">
      <TextGradient className="text-5xl font-semibold">
        Our clients
      </TextGradient>
      <div className="flex  flex-col items-start justify-start">
        <div className="text-7xl font-semibold">Words that matter</div>
      </div>
    </div>
  );
}

export default ClientsSection