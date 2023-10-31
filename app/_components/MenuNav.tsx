"use client";
import React, { useState } from "react";
import MenuNavItem from "../_components/MenuNavItem";

function MenuNav() {
  const [category, setCategory] = useState("");
  return (
    <div className="navMenu w-[100%] sm:w-[85%] xl:w-[78%] h-32 lg:h-40 pt-5  flex items-center overflow-x-scroll space-x-5 lg:space-x-10 px-5">
      <MenuNavItem
        img={"explore/nav/Beef.svg"}
        title="Beef"
        category={category}
        setCategory={setCategory}
      />
      <MenuNavItem
        img={"explore/nav/Chicken.svg"}
        title="Chicken"
        category={category}
        setCategory={setCategory}
      />
      <MenuNavItem
        img={"explore/nav/Dessert.svg"}
        title="Dessert"
        category={category}
        setCategory={setCategory}
      />
      <MenuNavItem
        img={"explore/nav/Pork.svg"}
        title="Pork"
        category={category}
        setCategory={setCategory}
      />
      <MenuNavItem
        img={"explore/nav/Pasta.svg"}
        title="Pasta"
        category={category}
        setCategory={setCategory}
      />
      <MenuNavItem
        img={"explore/nav/Seafood.svg"}
        title="Seafood"
        category={category}
        setCategory={setCategory}
      />
      <MenuNavItem
        img={"explore/nav/Side.svg"}
        title="Side"
        category={category}
        setCategory={setCategory}
      />
      <MenuNavItem
        img={"explore/nav/Vegan.svg"}
        title="Vegan"
        category={category}
        setCategory={setCategory}
      />
      <MenuNavItem
        img={"explore/nav/Miscellaneous.svg"}
        title="Miscellaneous"
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
}

export default MenuNav;
