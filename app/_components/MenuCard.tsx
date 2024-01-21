import React from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const OpenSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

function MenuCard({ activeMenu, data, setActiveMenu }: any) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "b";
  const filter = searchParams.get("filter") ?? "";
  const open = searchParams.get("open") ?? "";
  const router = useRouter();

  const showMenu = () => {
    if (window.innerWidth < 1281) {
      router.push(`/details?open=${data.idMeal}`);
    } else {
      router.push(
        `/explore?search=${search}${filter && `&filter=${filter}`}&open=${
          data.idMeal
        }`
      );
    }
  };

  return (
    <button
      onClick={showMenu}
      className={`${
        OpenSans.className
      } group max-w-[200px] hover:-translate-y-[15px] duration-300 h-60 pb-5 pt-7 font-semibold relative flex flex-col space-y-3 items-center text-center rounded-2xl ${
        open === data.idMeal
          ? "bg-[#f9f6f0] xl:bg-white xl:border-[0.5px] xl:border-black "
          : " bg-[#f9f6f0] hover:opacity-70 duration-300"
      }`}
    >
      <div className="w-20 h-20 group-hover:w-[88px] group-hover:h-[88px] duration-300 bg-black rounded-full relative overflow-hidden">
        <Image src={data.strMealThumb} alt="" width={100} height={100} />
      </div>
      <p className="group-hover:text-[18px] group-hover:w-36 duration-300 w-32 h-16 overflow-hidden leading-5">
        {data.strMeal}
      </p>
      <span className="text-[#95832f] h-10 group-hover:text-[18px] group-hover:w-36 duration-300">
        #{data.idMeal}
      </span>
    </button>
  );
}

export default MenuCard;
