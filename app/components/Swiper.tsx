"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from "@/lib/images";
import Image from "next/image";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

type Props = {
  alts: string;
  srcs: string;
};
export function ShowCollections() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs rounded-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.start}>
      <CarouselContent className="rounded-md pointer-events-none">
        {images.map((image) => {
          return (
            <CarouselItem key={image.alt} className="rounde-md">
              <div className="p-1">
                <Card className="rounded-md relative">
                  <Image
                    className="flex items-center justify-center rounded-md"
                    alt={image.alt}
                    src={image.src}
                    width={900}
                    height={900}
                    priority
                    quality={100}
                  />

                  <div className=" w-1/2 left-20 absolute bottom-0 flex justify-center items-center bg-white mx-auto rounded-t-md">
                    <div className=" py-1 my-1 rounded flex justify-center items-center bg-stone-400 w-[90%]">
                      
                    <p className="mr-4 text-[10px]">Learn More </p> <ArrowUpRight size={20} />
                 </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
