import { BatteryFull } from "lucide-react";
import Image from "next/image";
import React from "react";

function Philosophy() {
  return (
      <div className="py-4 relative border-2 border-black border-y-2 border-x-0 mx-6 flex justify-center items-center flex-col pointer-events-none">
          <div className="absolute top-[-9px] h-4 w-4 bg-black rotate-45"></div>
      <p className=" font-bold text-[14px] inline whitespace- leading-7 ">
        Stride with{" "}
        <span className=" p- px-0 rounded-full inline-flex justify-center items-center bg-slate-500/15 h-[30px] w-[50px]">
          <Image
            className="inline rounded-full  h-[25px] w-[45px]"
            alt="running"
            src={"/assets/running.jpg"}
            width={100}
            height={100}
          />
        </span>{" "}
        purpose . Embrace balance. Move forward, together. In every step,
        <span className="border-2 px-2 p-1 inline-block border-black rounded-2xl">
          <BatteryFull className="inline" strokeWidth={"2.75px"} /> find
          strength
        </span>
        . Champions of comfort, we craft innovation. We&apos;re not just shoes; we're
        a commitment to your journey. Join us, and let&apos;s conquer the road ahead.
        New Balance: Where every move matters.
      </p>
    </div>
  );
}

export default Philosophy;
