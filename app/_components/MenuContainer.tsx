"use client";
import React, { useState } from "react";
import MenuCard from "../_components/MenuCard";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

function MenuContainer() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") ?? "";
  const search = searchParams.get("search") ?? "";
  let url = filter
    ? search === "b"
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`
      : `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    : `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  // console.log("filter : ", filter, " search : ", search);
  // console.log("url : ", url);

  const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div className=" pt-60 text-xl">loading...</div>;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 lg:gap-y-8 w-[340px] sm:w-[570px] md:w-[600px] lg:w-[800px] ">
      {data.meals ? (
        data?.meals?.map((e: any) => {
          return <MenuCard data={e} key={e.idMeal} />;
        })
      ) : (
        <div className=" text-xl mt-60 text-center w-[210%] sm:w-[330%] lg:w-[440%] xl:w-[430%] ">
          no data
        </div>
      )}
    </div>
  );
}

export default MenuContainer;
