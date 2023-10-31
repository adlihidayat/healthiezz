import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

function MenuNavItem({ title, img, category, setCategory }: any) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "b";
  const open = searchParams.get("open") ?? "b";
  const router = useRouter();

  const setFilter = () => {
    if (category === title) {
      setCategory("");
      router.push(`/explore?search=${search}&open=${open}`);
    } else {
      setCategory(title);
      router.push(`/explore?search=${search}&filter=${title}&open=${open}`);
    }
  };

  return (
    <button
      className="relative flex flex-col items-center hover:-translate-y-[7px] duration-300"
      onClick={setFilter}
    >
      <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl absolute -top-6 lg:-top-8 custom-shadow">
        <Image
          src={img}
          alt=""
          width={100}
          height={100}
          className="w-6 h-auto"
        />
      </div>
      <span
        className={` pb-4 lg:pb-4 pt-8 w-20 lg:w-24 text-center ${
          category === title
            ? "border border-[#853356] text-[#853356] "
            : "bg-[#853356] text-white"
        }   font-bold text-xs lg:text-[13px] custom-shadow rounded-b-3xl rounded-t-lg `}
      >
        {title}
      </span>
    </button>
  );
}

export default MenuNavItem;
