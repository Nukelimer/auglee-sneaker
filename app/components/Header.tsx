"use client";

import React, { useState } from "react";
import Ads from "./Ads";
import Link from "next/link";
import {
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  SearchSlash,
  SearchSlashIcon,
  SearchX,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hideSearch, setHideSearch] = useState<boolean>(false);

  const urls = [
    {
      name: "Women ",
      path: "/women",
    },
    {
      name: "Men ",
      path: "/Men",
    },
    {
      name: "kids ",
      path: "/kids",
    },
    {
      name: "discover ",
      path: "/discover",
    },
  ];
  return (
    <div className=" ">
      <Ads />

      <div className="px-4 py-2  m-4  rounded-md border flex justify-between items-center">
        <div className="">
          <h1 className="font-bold text-2xl">
            Auglee{" "}
            <span className="animate-pulse font-Martian_Mono block">
              Sneakers
            </span>
          </h1>
        </div>
        <div className="hidden">
          <ul className="flex">
            {urls.map((url, index) => {
              return (
                <li key={index}>
                  <Link href={url.path}>{url.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <div className="">
            <div className="flex  space-x-6">
              {hideSearch ? (
                <SearchSlashIcon
                  strokeWidth={"0.75px"}
                  className="transition-all delay-700"
                  size={30}
                  onMouseDown={() => {
                    setHideSearch(!hideSearch);
                  }}
                />
              ) : (
                <SearchX
                  strokeWidth={"0.75px"}
                  className="transition-all delay-700"
                  size={30}
                  onMouseDown={() => {
                    setHideSearch(!hideSearch);
                  }}
                />
              )}

              <div className="">
                {isOpen ? (
                  <PanelLeftOpen
                    strokeWidth={"0.75px"}
                    size={30}
                    onMouseDown={() => {
                      setIsOpen(!isOpen);
                    }}
                  />
                ) : (
                  <PanelLeftClose
                    strokeWidth={"0.75px"}
                    size={30}
                    className="transition-opacity delay-[3000]"
                    onMouseDown={() => {
                      setIsOpen(!isOpen);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <form>
            <>
              {hideSearch && (
                <input
                  type="text"
                  className="bg-black  absolute left-[45%] rounded-md px-4 py-2 top-40 right-0 w-[200px] outline-dotted  focus:outline-dotted  focus:outline-gray-800 focus:text-white  text-white  focus:outline-2  outline-2 outline-gray-800 placeholder:text-white transition-all delay-500"
                  placeholder="search..."
                  name="searchbar"
                  id="text"
                />
              )}
            </>
          </form>
        </div>
      </div>
    </div>
  );
}
