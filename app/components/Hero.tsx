import React from "react";
import VideoPlayer from "./Video";
import HeroSection from "./HeroSection";

function Hero() {
  return (
    <div className="lg:grid grid-cols-2 overflow-hidden">
      <div className="lg: lg:h-[680px]">
        <VideoPlayer />
      </div>

      <div className="lg:col-span-1 w-full lg:h-1/2 ">
        <div className="m-4 lg:mt-0 rounded-md ">
          <HeroSection
            heading={"New Balance Products are ugly - Chiamaka Micheal "}
            content={
              "Despite their unconventional appearance, New Balance sneakers hold a special place as my favorite footwear, blending comfort and style uniquely."
            }
            imageSrc={""}
            hashtag={""}
          />
        </div>
        <div className="lg:flex lg:w-full">
          <div className="m-4 rounded-md pointer-events-none lg:w-1/2">
            <HeroSection
              heading={""}
              content={""}
              imageSrc={"/assets/sneaker-hero.jpg"}
              hashtag={"#CleanFeet"}
            />
          </div>

          <div className="m-4 rounded-md pointer-events-none  lg:w-1/2 lg:h-fit">
            <HeroSection
              heading={""}
              content={""}
              imageSrc={"/assets/sneaker-hero-2.jpg"}
              hashtag={"#Steeze"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
