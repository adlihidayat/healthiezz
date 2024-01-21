"use client";
import React, { ReactNode } from "react";
import { Nunito } from "next/font/google";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const Nunitoo = Nunito({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

function Detail() {
  const searchParams = useSearchParams();
  const open = searchParams.get("open") ?? "b";
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${open}`;
  const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div className=" pt-60 text-xl">loading...</div>;
  let x = data.meals[0];

  const arr: ReactNode[] = [
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  ];
  const Ingredients: string[] = [];
  {
    arr.map(
      (e: any) =>
        Object.values(data.meals[0])[e] &&
        Ingredients.push(`
          ${Object.values(data.meals[0])[e + 20]}
          ${Object.values(data.meals[0])[e]}`)
    );
  }

  const tag = data.meals[0].strTags?.split(",") ?? null;
  const embed = data.meals[0].strYoutube?.split("/watch?v=") ?? null;

  return (
    <div className={`${Nunitoo.className} w-[100%] min-h-screen xl:px-8`}>
      <div className="w-[100%] h-80 bg-black max-w-xl sm:ml-8 xl:ml-0 sm:rounded-3xl relative overflow-hidden">
        <Image
          src={data.meals[0].strMealThumb}
          alt=""
          width={100}
          height={100}
          className="w-[100%] h-full object-cover"
        />
      </div>
      <div className="  py-10 px-8 xl:px-0  rounded-t-3xl flex flex-col space-y-5">
        <h1 className=" font-bold text-2xl">{data.meals[0].strMeal}</h1>
        <div className="flex space-x-2">
          <div className="w-max px-3 flex space-x-2 items-center border-2 text-[#6264e7] border-[#6264e7] justify-center rounded-full">
            <div className="w-4 h-4 ">
              <Image
                src={"/details/flag.svg"}
                alt=""
                width={100}
                height={100}
                className="w-[85%]"
              />
            </div>
            <span>{data.meals[0].strArea}</span>
          </div>
          <div className="w-max px-3 flex space-x-2 items-center border-2 text-[#eaad4d] border-[#eaad4d] justify-center rounded-full">
            <div className="w-4 h-4">
              <Image
                src={"/details/spoon.svg"}
                alt=""
                width={100}
                height={100}
                className="w-[100%]"
              />
            </div>
            <span>{data.meals[0].strCategory}</span>
          </div>
        </div>
        <p className="text-base text-[#9e9e9e] border-b-2 border-gray-300 pb-5 text-justify">
          {data.meals[0].strInstructions}
        </p>
        {tag && (
          <div className="grid grid-cols-2 gap-y-5 border-b-2 border-gray-300 pb-5">
            {tag.map((e: any) => (
              <div
                key={e}
                className="text-[#5D5D5D]  flex space-x-2 items-center font-bold"
              >
                <div className="w-5 h-5 bg-black rounded"></div>
                <span>{e}</span>
              </div>
            ))}
          </div>
        )}
        <div className="border-b-2 border-gray-300 pb-5">
          <h2 className=" font-bold text-lg mb-5">Ingredients</h2>
          <ul className=" text-sm text-[#767676] px-5">
            {Ingredients.map((e) => (
              <li className=" list-disc text-base" key={e}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h2 className=" font-bold text-lg mb-5">Tutorial</h2>
          <iframe
            className=" rounded-3xl w-[100%] h-[50vw] bg-black max-w-xl max-h-80 xl:max-h-60"
            width="100"
            height="100"
            src={embed[0] + "/embed/" + embed[1]}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Detail;
