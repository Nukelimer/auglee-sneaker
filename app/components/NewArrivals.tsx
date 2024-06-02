import React, { Dispatch, SetStateAction, useState } from "react";
import { client } from "../lib/utils";
// import { simplifiedProducts } from "@/lib/simplifiedProduct";
import Image from "next/image";
import Link from "next/link";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { Baby } from "lucide-react";
import { simplifiedProducts } from "@/lib/types";

const getData = async () => {
  const fetchArrivals = `*[_type == "shoes"][0...4]| order(_createAt desc){

    name,
    _id,
  'slug': slug.current,
      'categoryName': category->name,
      price,
      'imageUrl': images[3].asset->url
}`;

  const fetchedArrivalsData = await client.fetch(fetchArrivals);

  return fetchedArrivalsData;
};

type Props = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

export default async function NewArrivals() {
  const data: simplifiedProducts[] = await getData();

  return (
    <div className="  md:grid md:grid-cols-3 gap-9 my-4 p-4">
      {data.map((product) => {
        // console.log(product);

        return (
          <div className="" key={product._id}>
            <div className="">
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  width={300}
                  height={300}
                  alt={product.name}
                  className="rounded-2xl shadow-lg"
                />

                <div className="absolute w-full px-4  bottom-2 flex space-x-6 justify-between">
                  <Link
                    href={`/product/${product.slug}`}
                    className="bg-transparent hover:cursor-pointer border hover:bg-white hover:text-green-300 hover:border-green-300 border-black px-6 py-2 rounded-3xl">
                    View Product
                  </Link>

                  {product.categoryName === "Female" ? (
                    <FcBusinesswoman size={30} />
                  ) : product.categoryName == "Man" ? (
                    <FcBusinessman size={30} />
                  ) : (
                    product.categoryName === "Kids" && <Baby size={30} />
                  )}
                </div>
              </div>
              <div className="mt-3 ">
                <h2 className="text-4xl font-bold font-PT_Sans ">
                  {product.name}
                </h2>
                <p className="text-xl text-neutral-400 font-medium">
                  &#8358;{product.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
