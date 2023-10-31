import Image from "next/image";
import { Montagu_Slab } from "next/font/google";

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
        <a
          href="/"
          className=" bg-[#FFD600] py-[10px] md:py-[12px]  xl:py-[15px]  w-[135px] md:w-[155px] xl:w-[205px] rounded-2xl text-center text-xl xl:text-2xl font-bold shadow-lg"
        >
          BROWSE
        </a>
      </div>
      <Image
        src="/home/leaf1.png"
        alt=""
        width={100}
        height={100}
        className="absolute top-12 mr-[40%]"
      />
      <Image
        src="/home/leaf2.png"
        alt=""
        width={100}
        height={100}
        className="absolute top-48 ml-[20%]"
      />
      <Image
        src="/home/left.svg"
        alt=""
        width={100}
        height={100}
        className="absolute -bottom-10 -left-16 w-60 sm:w-[350px] md:w-[400px] xl:w-[500px]"
      />
      <Image
        src="/home/right.svg"
        alt=""
        width={100}
        height={100}
        className="absolute -bottom-10 sm:-bottom-20 lg:-bottom-40 -right-6 w-60 sm:w-[400px] md:w-[480px] lg:w-[600px] xl:w-[700px]"
      />
    </main>
  );
}
