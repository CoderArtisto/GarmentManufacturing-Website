import React from "react";

const Footer = () => {
  return (
    <div className="text-black bg-white w-full justify-center items-center">
      <div className=" flex justify-between mx-auto p-8">
        <a className="items-center flex" href="">
          <h4 className="text-base font-semibold md:text-lg">
            © 2023 Minu Creations All rights reserved.
          </h4>
        </a>
        <ul className="flex font-medium">
          <a className="p-4" href="#">
            <li>About</li>
          </a>
          <a className="p-4" href="#">
            <li>Contact</li>
          </a>
          <a className="p-4" href="#">
            <li>Our People</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
