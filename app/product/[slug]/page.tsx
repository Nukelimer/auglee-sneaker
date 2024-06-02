import ImagesCollections from "@/app/components/ImagesCollections";
import { client } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import { singleProduct } from "@/lib/types";
import { Baby, Star, Truck } from "lucide-react";
import React from "react";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";

const getData = async (slug: string) => {
  const fetchArrivals = `*[_type == "shoes" && slug.current == '${slug}'][0]{

    name,
    _id,
  'slug': slug.current,
      'categoryName': category->name,
      price,
      description,
       images
}`;

  const fetchedArrivalsData = await client.fetch(fetchArrivals);

  return fetchedArrivalsData;
};

async function page(params: { params: { slug: string } }) {
  const data: singleProduct = await getData(params.params.slug);
  const randomNumber = Math.floor(Math.random() * 5);
  const randomNumber2 = Math.random() + "";
  const randomRatings = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  const randomDiscounts = Math.floor(Math.random() * (50 - 10 + 1)) + 1;

  const originalPrice = data.price;
  const discountPercentage = randomDiscounts;
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;



  return (
    <div className="  h-screen  ">
      <div className="  mx-auto max-w-screen-xl px-4 md:px-8 rounded-md">
        <div className="grid gap-8 md:grid-cols-2">
          <ImagesCollections images={data.images} name={data.name} />
          <div className="md py-8 ">
            <div className="mb-2 md:mb-3">
              <h2 className="text-3xl md:mb-4 md:text-5xl font-PT_Sans font-bold">{data.name}.</h2>
              <span className="mb-0.5 inline-block ">
                {data.categoryName === "Man" ? (
                  <FcBusinessman size={30} />
                ) : data.categoryName === "Female" ? (
                  <FcBusinesswoman size={30} />
                ) : (
                  <Baby size={30} />
                )}
              </span>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button>
                <span>{`${randomNumber}.${
                  randomNumber2.split(".")[1][0]
                } /5.0 `}</span>

                <Star className="ml-4" strokeWidth={"0.85px"} />
              </Button>

              <p>{randomRatings} Ratings.</p>
            </div>
            <div className="mb-4">
              <div className="flex flex-col items- gap-2">
                <div className="flex gap-4 ">
                <span className="text-sm">
                  &#8358;{discountedPrice.toLocaleString()}
                </span>{" "}
                <span className="text-sm mb-0 5 text-red-400 line-through">
                  &#8358;{data.price.toLocaleString()}
                </span>
             </div>

                <p className="block text-sm animate-bounce">Shop now with {discountAmount.toLocaleString()} ({discountPercentage}%) discount off. </p>

                <p className="text-sm text-gray-500 ">Excl. of VAT.</p>
              </div>

              <div className="my-6 flex items-center gap-2 text-gray-600">
                <Truck className="w-6 h-6" />
                <span className="text-sm"> 3-7 days shipping.</span>

              </div>

              <div className="flex gap-2.5">
                <Button variant={'outline'}>Add to Cart</Button>
                <Button variant={'link'}>Shop Now</Button>
              </div>
            </div>
              <p className="text-[0.6rem]">{ data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
