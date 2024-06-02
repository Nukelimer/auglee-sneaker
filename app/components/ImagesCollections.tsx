"use client";

import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../lib/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface iaApps {
  images: any;
  name: string;
}

function ImagesCollections({ images, name }: iaApps) {
  const [previewedImage, setPreviewedImage] = useState(images[0]);

  const switchImage = (img: any) => {
    setPreviewedImage(img);
    console.log(img);
  };

  return (
    <>
      {images.length > 1 ? (
        <div className="grid gap-4 h-full lg:grid-cols-5 ">
          <div className="order-last flex gap-6 lg:order-none lg:flex-col">
            {images.map((img: any, id: number) => {
              return (
                <div
                  key={id}
                  className={`overflow-y-scroll rounded-md bg-neutral-300 cursor-pointer ${
                    previewedImage === img ? "opacity-100" : "opacity-30"
                  }`}
                  onClick={() => switchImage(img)}>
                  <Image
                    src={urlFor(img).url()}
                    alt={name}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              );
            })}
          </div>

          <div className="relative rounded-lg lg:col-span-4 bg-neutral-100">
            <Link href={"/"}>
              <ArrowLeft
                className="ml-6 mt-6 absolute"
                size={30}
                strokeWidth={"0.75px"}
              />
            </Link>
            <Image
              src={urlFor(previewedImage).url()}
              alt={name}
              width={400}
              height={400}
              className="h-full w-full object-fill rounded-md object-center"
            />
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
}

export default ImagesCollections;
