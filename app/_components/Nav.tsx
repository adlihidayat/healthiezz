"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {} from "next/router";
import React, { useState } from "react";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const [userInput, setUserInput] = useState("");
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("open") ?? "53060";

  return (
    <header className="bg-[#FEFEFE] z-50 ovex fixed w-screen h-20 md:h-32 px-[10%] flex justify-between items-center top-0">
      <div className="flex items-center space-x-10">
        <a href="/">
          <Image
            src={"/logo.png"}
            alt=""
            width={100}
            height={100}
            className="w-7"
          />
        </a>
        <nav
          onClick={() => setIsActive(false)}
          className={` ${
            isActive ? "flex" : "hidden"
          } duration-300 md:flex absolute right-[10%] top-16 md:static flex-col bg-slate-100 md:bg-transparent rounded-xl md:flex-row  justify-center items-center space-y-2 md:space-y-0 md:space-x-5 text-lg font-semibold`}
        >
          <Link
            href={"/"}
            className={`${
              path === "/" && "bg-slate-200 md:bg-[#FFAF37]"
            } w-[100%] text-center  px-[14px] py-[2px] rounded-lg`}
          >
            HOME
          </Link>
          <Link
            className={`${
              (path === "/explore" || path === "/details") &&
              "bg-slate-200 md:bg-[#FFAF37]"
            } px-[14px] py-[2px] rounded-lg w-[100%] text-center `}
            href={"/explore?search=b&open=53060"}
          >
            EXPLORE
          </Link>
          <Link
            className={`${
              path === "/contact" && "bg-slate-200 md:bg-[#FFAF37]"
            } px-[14px] py-[2px] rounded-lg w-[100%] text-center `}
            href={"/contact"}
          >
            CONTACT
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setIsActive(!isActive)}
        className="flex flex-col space-y-1 md:hidden"
      >
        <div className=" h-[3px] w-7 bg-black rounded-full"></div>
        <div className=" h-[3px] w-7 bg-black rounded-full"></div>
        <div className=" h-[3px] w-7 bg-black rounded-full"></div>
      </button>
      <div className="hidden md:inline-block relative">
        <input
          onChange={(e: any) => setUserInput(e.target.value)}
          type={userInput}
          placeholder="Ingredients or Nutrients"
          className="absolute right-10 bottom-1 border-b-2 border-black py-1 pl-1 pr-5 focus:outline-none"
        />
        <button
          onClick={() =>
            router.push(`/explore?search=${userInput}&open=${search}`)
          }
        >
          <Image
            src={"/search.svg"}
            alt=""
            width={100}
            height={100}
            className="w-7"
          />
        </button>
      </div>
    </header>
  );
};

export default Nav;
