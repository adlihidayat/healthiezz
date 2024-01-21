import Image from "next/image";
import { Montagu_Slab } from "next/font/google";
import Link from "next/link";

const MontaguSlab = Montagu_Slab({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col items-center justify-center space-y-20 overflow-hidden bg-[#FEFEFE]">
      <h1
        className={`${MontaguSlab.className} text-[64px] sm:text-[75px] lg:text-[95px] 2xl:text-[105px] leading-none text-center font-medium w-[330px] sm:w-[400px] lg:w-[700px]`}
      >
        Healthy food is not nasty food
      </h1>
      <div className=" flex flex-col items-center space-y-4">
        <span
          className={`${MontaguSlab.className} text-xl md:text-2xl xl:text-3xl font-light`}
        >
          Find and cook it now!
        </span>
        <Link
          href={"/explore?search=b&open=53060"}
          className="z-30 bg-[#FFD600] py-[10px] md:py-[12px]  xl:py-[15px]  w-[135px] md:w-[155px] xl:w-[205px] rounded-2xl text-center text-xl xl:text-2xl font-bold shadow-lg"
        >
          BROWSE
        </Link>
      </div>
      <Image
        src="/home/leaf1.webp"
        alt=""
        width={200}
        height={200}
        className="absolute w-[90px] top-12 mr-[40%]"
      />
      <Image
        src="/home/leaf2.webp"
        alt=""
        width={200}
        height={200}
        className="absolute w-[90px] top-48 ml-[20%]"
      />
      <Image
        src="/home/left.webp"
        alt=""
        width={1000}
        height={1000}
        priority={true}
        className="absolute -bottom-20 -left-28 md:-left-36 md:-bottom-28 xl:-left-52 xl:-bottom-40 w-72 sm:w-[350px] md:w-[450px] xl:w-[600px]"
      />
      <Image
        src="/home/right.webp"
        alt=""
        width={1000}
        height={1000}
        priority={true}
        className="absolute -bottom-20 -right-20 sm:-bottom-28 sm:-right-28 lg:-bottom-40 xl:-right-40  w-80 sm:w-[450px] md:w-[520px] lg:w-[600px] xl:w-[700px]"
      />
    </main>
  );
}
