import React, { useState } from "react";
import { Nunito } from "next/font/google";
import Image from "next/image";
import MenuNavItem from "../_components/MenuNavItem";
import Detail from "../_components/Detail";
import MenuContainer from "../_components/MenuContainer";
import MenuNav from "../_components/MenuNav";
import MenuCard from "../_components/MenuCard";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const Nunitoo = Nunito({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <main
      className={`${Nunitoo.className} 2xl:px-32 mt-20 md:mt-32 w-[100%] min-h-screen flex  pb-10 overflow-x-hidden`}
    >
      <div className="px-5 sm:px-0 w-[100%] min-h-screen flex flex-col items-center overflow-x-hidden space-y-5">
        <MenuNav />
        <MenuContainer />
      </div>
      <div className="hidden xl:block w-[40%]">
        <Detail />
      </div>
      <Image
        src={"/explore/pizza.svg"}
        alt=""
        width={100}
        height={100}
        className=" fixed -bottom-[80px] -left-[120px] sm:-bottom-[100px] sm:-left-[150px] lg:-bottom-[130px] lg:-left-[180px] w-80 sm:w-[400px] lg:w-[500px] z-30"
      />
    </main>
  );
};

export default page;

// import React, { useState } from "react";
// import { Nunito } from "next/font/google";
// import Image from "next/image";
// import MenuNavItem from "../_components/MenuNavItem";
// import Detail from "../_components/Detail";
// import MenuContainer from "../_components/MenuContainer";
// import MenuNav from "../_components/MenuNav";

// const Nunitoo = Nunito({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const page = () => {
//   return (
//     <main
//       className={`${Nunitoo.className} 2xl:px-32 mt-20 md:mt-32 w-[100%] min-h-screen flex  pb-10 overflow-x-hidden`}
//     >
//       <div className="px-5 sm:px-0 w-[100%] min-h-screen flex flex-col items-center overflow-x-hidden space-y-5">
//         <MenuNav />
//         <MenuContainer />
//       </div>
//       <div className="hidden xl:block w-[40%]">
//         <Detail />
//       </div>
//       <Image
//         src={"/explore/pizza.svg"}
//         alt=""
//         width={100}
//         height={100}
//         className=" fixed -bottom-[80px] -left-[120px] sm:-bottom-[100px] sm:-left-[150px] lg:-bottom-[130px] lg:-left-[180px] w-80 sm:w-[400px] lg:w-[500px] z-30"
//       />
//     </main>
//   );
// };

// export default page;
