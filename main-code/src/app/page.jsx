import Image from "next/image";
import heroImg from "/public/img.jpg";
import manuExcel from "/public/ManufacturingExcel.png";

export default function Home() {
  return (
    <>
      {/* <div className="bg-[#F9F9FF] w-full">
        <div className="grid pt-5 pb-6 max-w-[1128px] mx-auto md:grid-cols-2 md:pt-12 md:pb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold m-4 text-black">
              Elevate your style with Minu Creations, where precision meets
              perfection.
            </h1>
            <button className="bg-red-500 ml-4 mt-2 md:mt-6 p-2 rounded-lg text-white font-bold ">
              Lets Work Together
            </button>
          </div>
          <div className="md:flex hidden justify-end">
            <Image className="rounded-2xl h-full w-[50%]" src={heroImg} />
          </div>
        </div>
      </div> */}
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
            <button className="bg-red-500 ml-4 mt-2 md:mt-6 p-2 rounded-lg text-white font-bold ">
              Lets Work Together
            </button>
          </div>
          <div className="md:flex hidden justify-end">
            <Image className="rounded-2xl h-full w-[50%]" src={heroImg} />
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-semibold text-gray-500 max-w-[1128px] p-4 mx-auto text-center mt-20">
          At Minu Creations, we believe that every product we create is a
          testament to our dedication to craftsmanship and precision.
          Established with a passion for creating exceptional products, we
          specialize in crafting a wide range of custom-made components and
          products to meet the unique needs of our diverse clientele.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1128px] mx-auto mt-8">
          <div className="p-4 text-center mb-6">
            <Image
              className="rounded-3xl h-4/5 w-4/5 mx-auto md:h-36 md:w-36"
              src={manuExcel}
            />
            <h3 className="text-lg font-semibold mt-4">
              Our Manufacturing Excellence
            </h3>
          </div>
          <div className="p-4 text-center mb-6">
            <Image
              className="rounded-3xl h-4/5 w-4/5 md:h-36 md:w-36 mx-auto"
              src={manuExcel}
            />
            <h3 className="text-lg font-semibold mt-4">
              Cutting-Edge Manufacturing Facility
            </h3>
          </div>
          <div className="p-4 text-center mb-6">
            <Image
              className="rounded-3xl h-4/5 w-4/5 md:h-36 md:w-36 mx-auto"
              src={manuExcel}
            />
            <h3 className="text-lg font-semibold mt-4">
              Innovating for a Sustainable Future
            </h3>
          </div>
          <div className="p-4 text-center mb-6">
            <Image
              className="rounded-3xl h-4/5 w-4/5 mx-auto md:h-36 md:w-36"
              src={manuExcel}
            />
            <h3 className="text-lg font-semibold mt-4">
              Your Vision is Our Mission
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
