import React from 'react'
import TextGradient from '../Text/TextGradient'
import SecondaryButton from '../Button/SecondaryButton';
import Image from 'next/image';

const AuthorSection = () => {
  return (
    <div className="px-20 gradient flex flex-row w-full gap-40  pt-10">
      <div className="w-1/2 flex flex-col gap-10">
        <div>
          <TextGradient className="font-semibold text-4xl">
            The aura behind
          </TextGradient>
          <div className="text-4xl font-semibold">Mr. Vivek Jain</div>
        </div>
        <div className="text-xl">
          He is Dubai based Indian Entrepreneur and an Angel Investor , He has
          founded and engraved many dynamic companies blooming with his vision.
          Vivek’s latest venture is budding and blooming across globe , ADHARD
          the complete tech solution ! Adhard will be covering online & offline
          Branding and Marketing along with Celebrity Management all under one
          cloud.
        </div>
        <SecondaryButton text="SAY Hii to VIVEK" />
      </div>
      <div className="w-1/2"> 
      <Image src={'/vivek-jain.svg'} alt='Vivek Jain' width={400} height={400} />
    </div>
    </div>
  );
}

export default AuthorSection