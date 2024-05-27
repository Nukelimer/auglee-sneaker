import React from "react";

export default function Footer() {
  return (
    <div className="bg-black w-full text-white p-4">
      {" "}
      <div className="text-center mb-3">
        <h1 className="font-bold text-2xl">
          Auglee{" "}
          <span className="animate-pulse font-Martian_Mono block">
            Sneakers
          </span>
        </h1>
      </div>
      <div className="border-t border-teal-50 pb-4">
        <h2  className=" pb-4 font-bold font-PT_Sans text-center text-2xl pt-4">
          Socials
        </h2>
        <div className="flex gap-3 justify-center text-[10px]">
          <p className="border-x px-1">Instagram</p>
          <p className="border-x px-1">Facebook</p>
          <p className="border-x px-1">Twitter</p>
        </div>
      </div>
      <div className="border-t border-teal-50 pb-4">
        <h2  className=" pb-4 font-bold font-PT_Sans text-center text-2xl pt-4">
          Products
        </h2>
        <div className="flex gap-3 justify-center text-[10px]">
          <p className="border-x px-1">Shoes</p>
          <p className="border-x px-1">Pants</p>
          <p className="border-x px-1">T-Shirt</p>
          <p className="border-x px-1">Accessories</p>
        </div>
          </div>
          
          <div className="border-t border-teal-50 pb-4">
        <h2  className=" pb-4 font-bold font-PT_Sans text-center text-2xl pt-4">
          Buying
        </h2>
        <div className="flex gap-3 justify-center text-[10px]">
          <p className="border-x px-1">Shop</p>
          <p className="border-x px-1">Privacy</p>
          <p className="border-x px-1">Term of Use</p>
          <p className="border-x px-1">Customers Service</p>
        </div>
      </div>
    </div>
  );
}
