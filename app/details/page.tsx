import React from "react";
import { Nunito } from "next/font/google";
import Detail from "../_components/Detail";

const Nunitoo = Nunito({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

function page() {
  return (
    <div className=" w-[100%] mt-20 md:mt-32 ">
      <Detail />
    </div>
  );
}

export default page;
