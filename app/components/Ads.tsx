
import { X } from "lucide-react";
import React, { useState } from "react";

function Ads() {
  const [hideAd, setHideAd] = useState<boolean>(true);
  return (
    <>
      {hideAd && (
        <div className="bg-black flex text-white font-PT_Sans py-4 justify-between items-center px-2">
          <p className="  text-nowrap ">
            Sign up and get up to 29% off all new collections.
          </p>
          <X
            className=" cursor-pointer   "
            color="#fff"
            onMouseDown={() => {
              setHideAd(false);
            }}
          />
        </div>
      )}
    </>
  );
}

export default Ads;
