import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-5 w-32  " alt="" />
          <p className="w-full md:w-1/2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            dolorem porro. Officia cupiditate voluptatem dolor. Sunt, sint
            obcaecati, aliquam aut ipsam neque voluptates minima, sapiente
            libero natus a eius non.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-2312-123</li>
            <li>ajaybhuj@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ ajay.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
