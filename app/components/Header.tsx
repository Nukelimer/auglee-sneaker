"use client";

import React, { useState, useEffect } from "react";
import Ads from "./Ads";
import Link from "next/link";
import {
  PanelLeftClose,
  PanelLeftOpen,
  SearchSlashIcon,
  SearchX,
  ShoppingBag,
  Tally4,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ImCancelCircle } from "react-icons/im";
import { FcCancel } from "react-icons/fc";
import { CgClose } from "react-icons/cg";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hideSearch, setHideSearch] = useState<boolean>(false);
  const urlPath = usePathname();

  const urls = [
    {
      name: "Women ",
      path: "/Female",
    },
    {
      name: "Men ",
      path: "/Man",
    },
    {
      name: "Kids ",
      path: "/Kids",
    },
    {
      name: "Discover ",
      path: "/discover",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div>
      <Ads />

      <div className="px-4 py-2 m-4 relative rounded-md border flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h1 className="font-bold text-2xl">
              Auglee{" "}
              <span className="animate-pulse font-Martian_Mono block">
                Sneakers
              </span>
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex text-[0.6rem] justify-evenly flex-1 items-center">
          {urls.map((url) => {
            return (
              <div key={url.path}>
                {urlPath === url.path ? (
                  <Link
                    className="font-bold border px-6 py-4 hover:transition-all hover:delay-300"
                    href={url.path}>
                    {url.name}
                  </Link>
                ) : (
                  <Link className="py-4 px-6" href={url.path}>
                    {url.name}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <nav
          className={`fixed text-base top-0 h-screen z-30 bg-black/80 text-white md:hidden flex flex-col right-0 w-screen text-[0.6rem] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}>
          <div className="translate-x-full w-[52%] bg-black h-screen flex flex-col items-center pt-14">
            <CgClose  size={30} className="w-full absolute left-16 sm:left-28 -translate-y-10" onClick={() => {
              setIsOpen(!isOpen)
              
            }}/>
            {urls.map((url) => {
              return (
                <div key={url.path} className="py-4" onClick={() => {
                  setIsOpen(!isOpen)
                  
                }}>
                  {urlPath === url.path ? (
                    <Link
                      className="font-bold border px-6 py-4 hover:transition-all hover:delay-300"
                      href={url.path}>
                      {url.name}
                    </Link>
                  ) : (
                    <Link className="py-4 px-6" href={url.path}>
                      {url.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        <div>
          <div>
            <div className="flex  justify-center items-center space-x-6">
              {/* {hideSearch ? (
                <SearchSlashIcon
                  strokeWidth={"0.75px"}
                  className="transition-all delay-700"
                  size={35}
                  onMouseDown={() => {
                    setHideSearch(!hideSearch);
                  }}
                />
              ) : (
                <SearchX
                  strokeWidth={"0.75px"}
                  className="transition-all delay-700"
                  size={35}
                  onMouseDown={() => {
                    setHideSearch(!hideSearch);
                  }}
                />
              )} */}

              <div className="hidden p-4 border justify-center items-center md:flex relative">
                <ShoppingBag
                  color={"black"}
                  className="bg-blac"
                  strokeWidth={"0.75px"}
                  size={35}
                />
                <span className="flex justify-self-center align-middle absolute text-center bottom-0 font-bold text-[10px] underline">
                  100
                </span>
              </div>

              <div className="md:hidden">
                {!isOpen &&(
                  <Tally4
                    strokeWidth={"0.75px"}
                    size={30}
                    onMouseDown={() => {
                      setIsOpen(!isOpen);
                    }}
                  />
                ) }
              </div>
            </div>
          </div>
          <form>
            {hideSearch && (
              <input
                type="text"
                className="bg-black absolute left-[45%] rounded-md px-4 py-2 top-40 right-0 w-[200px] outline-dotted focus:outline-dotted focus:outline-gray-800 z-30 focus:text-white text-white focus:outline-2 outline-2 outline-gray-800 placeholder:text-white transition-all delay-500"
                placeholder="search..."
                name="searchbar"
                id="text"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
