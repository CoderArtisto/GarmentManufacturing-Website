import React from "react";
import heroImage from "/public/img.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="bg-[#F9F9FF] w-full">
        <div className="grid pt-5 pb-6 max-w-[1128px] pr-4 mx-auto md:grid-cols-2 md:pt-12 md:pb-12">
          <div>
            <p className="text-sm m-4 font-semibold text-gray-400">
              WELCOME TO
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold m-4 text-black">
              Minu Creations
            </h1>
            <p className="m-4 font-semibold text-gray-400">
              Your trusted partner in the world of manufacturing excellence.
              Nestled in the bustling industrial hub of Faridabad, Haryana, Minu
              Creations is a manufacturing unit with big dreams and a commitment
              to delivering quality, innovation, and reliability.
            </p>
            <a href="#">
              <button className="bg-red-500 ml-4 mt-2 md:mt-6 p-2 rounded-lg text-white font-bold ">
                Lets Work Together
              </button>
            </a>
          </div>
          <div className="md:flex hidden justify-end">
            <Image className="rounded-2xl h-full w-[50%]" src={heroImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
