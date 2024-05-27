"use client";

import React from "react";
import { ShowCollections } from "./Swiper";
import { images } from "@/lib/images";
import Image from "next/image";
import { Globe, Recycle } from "lucide-react";

export default function Mission() {
  return (
    <div className="flex  lg:flex-row flex-col justify-center items-center lg:justify-start lg:items-start">
      <div className=" lg:ml-12 flex justify-center items-center w-[80vw] lg:h-full flex-col m-6 lg:w-1/3 ">
        <ShowCollections />
        <div className=" flex gap-2 lg:gap-0 lg:mx-0 mx-1 overflow-x-scroll w-[80vw]  lg:w-[100%]">
          {images.map((img, i) => {
            return (
              <Image
                key={i}
                className="flex items-center aspect-square justify-center rounded-md h-[30px] mx-auto w-[30px]  "
                alt={img.alt}
                src={img.src}
                width={50}
                height={50}
                priority
                quality={100}
              />
            );
          })}
        </div>
      </div>

      <div className=" p-4 lg:ml-12 bg-[#6D8450]  lg:h-full lg:rounded-md lg:m-6  lg:w-[100%] lg:min-h-[433px] lg:justify-center lg:items-center">
        <h1 className="uppercase font-extrabold text-2xl">
          New Balance is changing the way fashion is percieved.
        </h1>

        <div className="lg:flex lg:mt-12 lg:gap-12 lg:text-justify">
          <div className=" py-4">
            <span className="flex lg:mb-4 items-center font-bold uppercase text-lg">
              <Globe
                className="mr-4 bg-black p-2 rounded-full"
                size={35}
                color="#fff"
              />{" "}
              Mission{" "}
            </span>
            <p className="text-sm">
              {" "}
              We are challenging dressing from the conventional way it has been
              known in this 21st century
            </p>
          </div>

          <div className="py-4">
            <span className="lg:mb-4 flex items-center font-bold uppercase text-lg">
              <Recycle
                className="mr-4 bg-black p-2 rounded-full"
                size={35}
                color="#fff"
              />{" "}
              Sustainablity{" "}
            </span>
            <p className="text-sm">
              {" "}
              Our product are race, people, financial status inclusive: even
              folks that Sapa wants to injure can come in.
            </p>
          </div>
        </div>
      </div>
    </div>



  );
}
