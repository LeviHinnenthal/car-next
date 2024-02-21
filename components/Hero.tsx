"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero overflow-hidden">
      <div className="flex-1 pt-32 padding-x">
        <h1 className="hero__title leading-[65px] mb-10">
          Find, book or rent a car <br /> - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.{" "}
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container max-h-[400px] overflow-hidden md:max-h-[700px] -mt-60 md:mt-0 ml-20 md:ml-0 md:z-10 -z-10">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain object-bottom" />
          <div className="hero__image-overlay invisible md:visible -mt-46 md:mt-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
