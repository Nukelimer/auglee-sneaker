import Image from "next/image";
import React from "react";
import storeImg from "../../public/assets/Store.jpg";
function Store() {
  return (
    <Image
      src={storeImg}
      width={600}
      height={600}
      quality={100}
      alt="store"
      className=" md:w-full md:max-h-[900px] overflow-clip"
    />
  );
}

export default Store;
