import Image from "next/image";
import heroImg from "/public/img.jpg";

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
        <div className="grid pt-5 pb-6 max-w-[1128px] mx-auto md:grid-cols-2 md:pt-12 md:pb-12">
          <div>
            <p className="text-sm m-4 font-semibold text-gray-400">
              WELCOME TO
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold m-4 text-black">
              Minu Creations
            </h1>
            <p className="m-4 font-semibold text-gray-400">
              Experience the pinnacle of fashion at Minu Creations. Our
              precision-driven garments manufacturing unit transforms dreams
              into reality. From unique prototypes to large-scale production,
              we're your dedicated partner. With cutting-edge technology and
              skilled craftsmanship.
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
      <div></div>
    </>
  );
}
