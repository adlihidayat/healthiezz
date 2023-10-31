import React from "react";
import { Montagu_Slab } from "next/font/google";
import Image from "next/image";

const MontaguSlab = Montagu_Slab({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

function page() {
  return (
    <main className="pt- md:pt-40 h-screen w-screen px-[10%] flex flex-col justify-center space-y-32">
      <h1
        className={` text-[38px] sm:text-[58px] lg:text-[78px] xl:text-[98px] leading-none ${MontaguSlab.className} w-60 sm:w-auto`}
      >
        FOLLOW US ON SOCIAL MEDIA
      </h1>
      <div className="flex space-x-6 items-center">
        <a href="https://mail.google.com/">
          <Image
            src={"/contacts/email.svg"}
            alt=""
            width={100}
            height={100}
            className="w-8 sm:w-10"
          />
        </a>
        <a href="https://www.youtube.com/">
          <Image
            src={"/contacts/youtube.svg"}
            alt=""
            width={100}
            height={100}
            className="w-9 sm:w-11"
          />
        </a>
        <a href="https://www.instagram.com/">
          <Image
            src={"/contacts/instagram.svg"}
            alt=""
            width={100}
            height={100}
            className="w-7 sm:w-9"
          />
        </a>
        <a href="https://www.tiktok.com/">
          <Image
            src={"/contacts/tiktok.svg"}
            alt=""
            width={100}
            height={100}
            className="w-6 sm:w-8"
          />
        </a>
      </div>
    </main>
  );
}

export default page;
