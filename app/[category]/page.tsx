import React from "react";
import { client } from "../lib/utils";
import { simplifiedProducts } from "@/lib/types";
import Image from "next/image";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { Baby, View } from "lucide-react";
import Link from "next/link";

async function fetchCategory(category: string) {
  const query = `*[_type == "shoes" && category->name == '${category}']{

        name,
        _id,
      'slug': slug.current,
          'categoryName': category->name,
          price,
           "imageUrl": images[0].asset->url,
    }`;

  const data = await client.fetch(query);

  // console.log(data);
  return data;
}

async function CategoryPage({ params }: { params: { category: string } }) {
  const data: simplifiedProducts[] = await fetchCategory(params.category);
  return (
    <>
      <h2 className="ml-4 text-5xl py-4 ">
        Our Product for{" "}
        {params.category == "Man"
          ? "Men"
          : params.category === "Female"
            ? "Women"
            : params.category}
        .
      </h2>
      <div className="  md:grid md:grid-cols-3 gap-9 my-4 p-4">
        {data.map((product) => {
          // console.log(product);
          return (
            <>
              <div className=" flex  flex-col justify-center items-center" key={product._id}>
                <div className="relative ">
                  <Image
                    src={product.imageUrl}
                    width={300}
                    height={300}
                    alt={product.name}
                    className="rounded-2xl shadow-lg"
                  />

                  <div className="absolute  w-full px-4  bottom-2 flex space-x-6 justify-between">
                    <Link
                      href={`/product/${product.slug}`}
                      className="bg-transparent hover:cursor-pointer border hover:bg-white hover:text-green-300 hover:border-green-300 border-black p-2 rounded-full animate-pulse">
                      <View />
                    </Link>
                  </div>
                </div>
                <div className="mb-16 mt-4  ">
                  <h2 className="text-4xl font-bold  mb-2 font-PT_Sans ">
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

export default CategoryPage;


