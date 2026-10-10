import { Button } from "@heroui/react";
import Image from "next/image";

const Banner = () => {
  const date = Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
  }).format();

  return (
    <div className="mx-auto mt-5 w-full max-w-2xl sm:max-w-4xl lg:max-w-7xl px-3 sm:mt-7 sm:px-0 lg:mt-10">
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border bg-white md:grid-cols-3">

        {/* Left Content */}
        <div className="flex flex-col items-center px-4 py-6 text-center sm:text-start sm:px-6 sm:py-8 md:col-span-2 md:items-start md:px-6 md:py-10 lg:px-10">

          {/* Date */}
          <p className="pb-3 text-sm font-medium text-[#05893E] sm:pb-4">
            <span
              className="inline-block rounded-full bg-[#05893E]/10 px-3 py-1"
              suppressHydrationWarning
            >
              {date}
            </span>
          </p>

          {/* Heading */}
          <h2 className="max-w-2xl text-2xl font-bold leading-tight text-[#1D271F] sm:text-3xl lg:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-2xl pb-5 text-sm leading-6 text-[#1D271F]/70 sm:mt-4 sm:pb-7 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Button */}
          <Button
           
            
            className="h-11 w-full rounded-md bg-[#047F39] px-5 text-sm font-medium text-white shadow-md shadow-green-600/40 sm:w-auto"
          >
            <a href="#all-product">

            সব পণ্য দেখুন
            </a>
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center px-6 pb-7 md:col-span-1 md:px-4 md:py-6 lg:px-8">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের পণ্যের চিত্র"
            width={315}
            height={263}
            priority
            className="h-auto w-50 max-w-full sm:w-[240px] md:w-[230px] lg:w-[280px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;