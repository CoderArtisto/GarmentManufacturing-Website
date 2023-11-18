import { CalendarSearch } from "lucide-react";
import React from "react";
import Image from "next/image";
import mainImg from "/public/AboutUsMain.JPG";
import a1 from "/public/ManufacturingExcel.png";
import a2 from "/public/machineryFinal.png";
import a3 from "/public/sustainablity.jpg";
import a4 from "/public/clientCentric.jpg";

const About = () => {
  return (
    <div className="text-orange-100">
      <div className="mx-auto max-w-[1128px] grid grid-cols-1 text-center p-12 pt-20 pb-15 ">
        <h1 className="text-4xl md:text-7xl font-extrabold">Who are We?</h1>
        <h2 className="text-2xl md:text-3xl">Let's Know !!</h2>
      </div>
      <p className="max-w-[1128px] mx-auto p-4 text-center">
        We are a leading garment manufacturer synonymous with precision and
        innovation. Specializing in custom-made pieces, we blend cutting-edge
        technology with skilled craftsmanship. From prototypes to large-scale
        production, our client-centric approach ensures your unique style is
        seamlessly brought to life. Join us in defining the future of fashion
        with excellence and sustainability.
      </p>

      <div className="grid gap-5 md:hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1128px] mt-12 mb-6 mx-auto p-4">
          <Image
            src={a1}
            className="rounded-3xl h-4/5 w-3/5 md:h-36 md:w-36 mx-auto md:mx-0"
          />
          <div className=" md:col-span-2 text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
              Our Crafting Excellence
            </h2>
            <p className="text-base md:text-lg">
              We take pride in our ability to offer a variety of manufacturing
              services. Whether you require one-of-a-kind prototypes,
              small-batch production, or large-scale manufacturing, Minu
              Creations is your reliable partner.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1128px] mt-12 mb-6 mx-auto p-4">
          <Image
            src={a2}
            className="rounded-3xl h-5/5 w-4/5 md:h-36 md:w-36 mx-auto mb-6"
          />
          <div className=" md:col-span-2 text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
              Cutting-Edge Manufacturing Facility
            </h2>
            <p className="text-base md:text-lg">
              Our state-of-the-art facility in Faridabad is equipped with
              cutting-edge technology and staffed by a highly skilled and
              experienced team. With a focus on quality, efficiency, and
              continuous improvement, we ensure that every product that bears
              the Minu Creations name meets the highest industry standards.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1128px] mt-12 mb-6 mx-auto p-4">
          <Image
            src={a3}
            className="rounded-3xl h-5/5 w-3/5 md:h-36 md:w-36 mb-6 mx-auto md:mx-0"
          />
          <div className=" md:col-span-2 text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
              Innovating for a Sustainable Future
            </h2>
            <p className="text-base md:text-lg">
              Our commitment to environmental sustainability is an integral part
              of our ethos. We prioritize eco-friendly practices in our
              manufacturing processes and materials, contributing to a greener
              and more sustainable future.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1128px] mt-12 mb-6 mx-auto p-4">
          <Image
            src={a4}
            className="rounded-3xl h-5/5 w-3/5 md:h-36 md:w-36 mb-6 mx-auto md:mx-0"
          />
          <div className=" md:col-span-2 text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
              Your Vision is Our Mission
            </h2>
            <p className="text-base md:text-lg">
              As a customer-centric manufacturing unit, we value open
              communication and collaboration. Our experienced team is always
              ready to work closely with you to understand your specific
              requirements, ensuring that the end product not only meets but
              exceeds your expectations.
            </p>
          </div>
        </div>
      </div>
      {/* ********************************************************************** */}
      <div className="grid gap-4 hidden md:flex md:flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1128px] mt-12 mb-6 mx-auto p-4">
          <Image
            src={a1}
            className="rounded-3xl h-4/5 w-3/5 md:h-36 md:w-36 mx-auto md:mx-0"
          />
          <div className=" md:col-span-2 text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
              Our Crafting Excellence
            </h2>
            <p className="text-base md:text-lg">
              We take pride in our ability to offer a variety of manufacturing
              services. Whether you require one-of-a-kind prototypes,
              small-batch production, or large-scale manufacturing, Minu
              Creations is your reliable partner.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1128px] mt-12 mb-6 mx-auto p-4">
          <div className=" md:col-span-2 text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
              Cutting-Edge Manufacturing Facility
            </h2>
            <p className="text-base md:text-lg">
              Our state-of-the-art facility in Faridabad is equipped with
              cutting-edge technology and staffed by a highly skilled and
              experienced team. With a focus on quality, efficiency, and
              continuous improvement, we ensure that every product that bears
              the Minu Creations name meets the highest industry standards.
            </p>
          </div>
          <Image
            src={a2}
            className="rounded-3xl h-4/5 w-3/5 md:h-36 md:w-36 ml-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1128px] mt-12 mb-6 mx-auto p-4">
          <Image
            src={a3}
            className="rounded-3xl h-4/5 w-3/5 md:h-36 md:w-36 mx-auto md:mx-0"
          />
          <div className=" md:col-span-2 text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
              Innovating for a Sustainable Future
            </h2>
            <p className="text-base md:text-lg">
              Our commitment to environmental sustainability is an integral part
              of our ethos. We prioritize eco-friendly practices in our
              manufacturing processes and materials, contributing to a greener
              and more sustainable future.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1128px] mt-12 mb-6 mx-auto p-4">
          <div className=" md:col-span-2 text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
              Your Vision is Our Mission
            </h2>
            <p className="text-base md:text-lg">
              As a customer-centric manufacturing unit, we value open
              communication and collaboration. Our experienced team is always
              ready to work closely with you to understand your specific
              requirements, ensuring that the end product not only meets but
              exceeds your expectations.
            </p>
          </div>
          <Image
            src={a4}
            className="rounded-3xl h-4/5 w-3/5 md:h-36 md:w-36 ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
