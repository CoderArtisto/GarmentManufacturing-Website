"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "/public/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className=" text-white flex px-4 py-2 justify-between mx-auto max-w-[1128px] items-center">
        <a href="#">
          <Image className="h-25 w-20" src={logo} />
        </a>
        <ul className="hidden md:flex">
          <a href="#">
            <li className="p-4 hover:text-gray-400 font-medium">Home</li>
          </a>
          <a href="#">
            <li className="p-4 hover:text-gray-400 font-medium">About</li>
          </a>
          <a href="#">
            <li className="p-4 hover:text-gray-400 font-medium">Products</li>
          </a>
          <a href="#">
            <li className="p-4 hover:text-gray-400 font-medium">Blog</li>
          </a>
        </ul>
        <button className="hidden md:flex bg-green-400 hover:bg-green-500 text-black font-bold p-2 px-3 rounded-lg">
          Contact Us
        </button>
        <button onClick={handleNav} className="md:hidden">
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>
      </div>
      <div
        className={
          !nav
            ? "navlinks-for-mobile w-[40%] border-r border-gray-600"
            : "hidden"
        }
      >
        <ul className="text-white md:hidden ml-1 ease-in duration-500">
          <a href="#">
            <li className="p-4  hover:text-gray-400 font-medium">Home</li>
          </a>
          <a href="#">
            <li className="p-4  hover:text-gray-400 font-medium">About</li>
          </a>
          <a href="#">
            <li className="p-4  hover:text-gray-400 font-medium">Products</li>
          </a>
          <a href="#">
            <li className="p-4  hover:text-gray-400 font-medium">Blog</li>
          </a>
          <button className="bg-green-400 hover:bg-green-500 text-black font-bold p-2 px-3 rounded-lg m-4">
            Contact Us
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
