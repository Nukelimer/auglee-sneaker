async function fetchAll() {
  const query = `*[_type == "shoes"]| order(_createAt desc){
  
      name,
      _id,
    'slug': slug.current,
        'categoryName': category->name,
        price,
        'imageUrl': images[3].asset->url
    }`;

  const allData = await client.fetch(query);

  // console.log(data);
  return allData;
}

import { simplifiedProducts } from "@/lib/types";
import React from "react";
import { client } from "../lib/utils";
import Link from "next/link";
import { View } from "lucide-react";
import Image from "next/image";

async function page() {
  const allData: simplifiedProducts[] = await fetchAll();

  return (
    <>
      <h2 className="m-4 z-0 text-2xl md:text-4xl py-4 ">
        Explore all Products.
      </h2>
      <div className=" flex flex-col place-items-center place-content-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-9 my-4 p-4">
        {allData.map((product) => {
          // console.log(product);
          return (
            <>
              <div className="" key={product._id}>
                <div className="relative flex justify-center border w-fit">
                  <Image
                    src={product.imageUrl}
                    width={300}
                    height={300}
                    alt={product.name}
                    className="rounded-2xl shadow-lg"
                  />

                  <div className="absolute  w-full px-4 bottom-3  overflow-hidden  flex space-x-6 justify-between">
                    <Link
                      href={`/product/${product.slug}`}
                      className="bg-transparent hover:cursor-pointer border hover:bg-white hover:text-sky-700 hover:border-sky-700 border-black p-2 rounded-full animate-pulse">
                      <View />
                    </Link>
                  </div>
                </div>
                <div className="mb-16 mt-4 pl-6 ">
                  <h2 className="text-4xl font-bold mb-2 font-PT_Sans ">
                    {product.name}
                  </h2>
                  <p className="text-xl text-neutral-400 font-medium">
                    &#8358;{product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default page;
