import React from 'react'
import TextGradient from '../Text/TextGradient'

const BannerSection = () => {
  return (
    <div className="bg-gradient-to-b w-full flex lg:flex-row flex-col lg:gap-10 gap-2 py-20 from-black via-black to-custom-red lg:px-20 px-4">
      <div className='w-[350px]'>
        <TextGradient className="text-5xl font-semibold">
          What we do
        </TextGradient>
      </div>
      <div className="lg:mt-10 flex lg:flex-row flex-col justify-start items-center lg:gap-0 gap-4  w-full ">
        <div className="font-semibold lg:text-7xl text-5xl w-full ">The best of all</div>
        <div className='lg:text-3xl text-xl w-full font-light'>
          WE USE EVERY TOOL WE HAVE TO HELP OUR CLIENTS RETHINK THEIR BUSINESS.
        </div>
      </div>
    </div>
  );
}

export default BannerSection