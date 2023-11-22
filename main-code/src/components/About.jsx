import React from "react";
import f1 from "/public/ManufacturingExcel.png";
import f2 from "/public/machineryFinal.png";
import f3 from "/public/sustainablity.jpg";
import f4 from "/public/clientCentric.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="">
        /{" "}
        <p className="font-semibold text-gray-400 max-w-[1128px] p-4 mx-auto text-center mt-20">
          At Minu Creations, we believe that every product we create is a
          testament to our dedication to craftsmanship and precision.
          Established with a passion for creating exceptional products, we
          specialize in crafting a wide range of custom-made components and
          products to meet the unique needs of our diverse clientele.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-4 max-w-[1128px] mx-auto mt-8 text-white">
          <div className="p-4 text-center mb-6">
            <Image
              className="rounded-3xl h-4/5 w-4/5 mx-auto md:h-36 md:w-36"
              src={f1}
            />
            <h3 className="text-lg font-semibold mt-4">
              Our Crafting Excellence
            </h3>
          </div>
          <div className="p-4 text-center mb-6">
            <Image
              className="rounded-3xl h-4/5 w-4/5 md:h-36 md:w-36 mx-auto"
              src={f2}
            />
            <h3 className="text-lg font-semibold mt-4">
              Cutting-Edge Manufacturing Facility
            </h3>
          </div>
          <div className="p-4 text-center mb-6">
            <Image
              className="rounded-3xl h-4/5 w-4/5 md:h-36 md:w-36 mx-auto"
              src={f3}
            />
            <h3 className="text-lg font-semibold mt-4">
              Innovating for a Sustainable Future
            </h3>
          </div>
          <div className="p-4 text-center mb-6">
            <Image
              className="rounded-3xl h-4/5 w-3/5 mx-auto md:h-36 md:w-36"
              src={f4}
            />
            <h3 className="text-lg font-semibold mt-4">
              Client-Centric Approach
            </h3>
          </div>
          <a href="/about" className="flex justify-center">
            <button className="m-4 border-green-400 border hover:bg-green-400 hover:text-black font-bold transition ease-in-out duration-500 rounded-lg p-4 mx-9">
              Know More About Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
