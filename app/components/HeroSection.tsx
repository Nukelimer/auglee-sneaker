import Image from "next/image";
import React from "react";

type Props = {
  heading: string;
  content: string;
  imageSrc: string;
  hashtag: string;
};
function HeroSection({ heading, content, imageSrc, hashtag }: Props) {
  return (
    <div className="bg-[#DBDAD7] pointer-events-none  w-full lg:rounded-lg lg:h-[100%]">
      {heading.length > 1 ? (
        <div className=" p-10 lg:h-[400px] ">
          {heading.length > 0 ? (
            <h1 className=" font-[900] text-4xl lg:text-5xl font-PT_Sans text-balance pb-6">
              {heading}
            </h1>
          ) : undefined}
          {content.length > 0 ? (
            <p className="text-balance text-sm">{content}</p>
          ) : undefined}
        </div>
      ) : undefined}
      <div className="relative flex flex-col  justify-center items-center  ">
        {hashtag.length > 0 ? (
          <p className=" lg:text-2xl  font-extrabold text-5xl bottom-10 absolute  text-center  text-white">
            {hashtag}
          </p>
        ) : undefined}

        {imageSrc.length > 0 ? (
          <Image
            src={imageSrc}
            width={200}
            height={200}
            className="w-full  lg:rounded-lg lg:h-[368px]"
            priority
            alt={hashtag}
          />
        ) : undefined}
      </div>
    </div>
  );
}

export default HeroSection;
