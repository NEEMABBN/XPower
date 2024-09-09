import React from "react";
import VipCard from "../../../Component/VipCard";

export default function VIP() {
  return (
    <div className="container mx-auto flex lg:flex-row flex-col-reverse items-center lg:gap-0 gap-24 mt-24">
      <div className="lg:w-[50%] w-full flex flex-col lg:items-start items-center gap-8 sm:px-0 px-3">
        <h3 className="xl:text-[56px] md:text-[45px] sm:text-[30px] text-[25px] lg:text-start text-center font-extrabold BoldYekan bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#BDADFF]">
          برنامه تمرینی کاملا اختصاصی برای شما...
        </h3>
        <p className="xl:text-xl sm:text-base text-sm lg:text-start text-center leading-8 text-gray-400">
          هر کسی با یه هدفی ورزش میکنه، کاهش وزن ،افزایش وزن، بدنسازی، حفظ تناسب
          اندامش ، آسیب جسمانی خیلیا هم نمیذاره بعضی از حرکات رو انجام بدن ، با
          ایکس پاور یه برنامه ورزشی کاملا مختص به شرایط خودتون دریافت خواهید
          کرد.
        </p>
        <div className="w-full flex sm:flex-row flex-col items-center lg:justify-start justify-center xl:gap-11 gap-7">
          <button className="bg-[#6f4efd] text-white rounded-lg py-3 px-4">
            دریافت برنامه‌تمرینی
          </button>
          <button className="flex items-center gap-2 text-white">
            مشاهده نظرات
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="lg:w-[50%] w-full relative flex items-center lg:justify-end justify-center">
        <img
          src="../../../src/assets/Image/BodyImage.png"
          alt=""
          className="sm:shadow-[0_0_100px_1px_rgba(111,78,253,0.6)] shadow-[0_0_60px_0_rgba(111,78,253,0.5)] rounded-[33px] xl:w-auto lg:w-[85%] sm:w-[65%] w-[80%]"
        />
        <VipCard
          Icon={"../../../../src/assets/Image/clockIcon.svg"}
          Text={"برنامه تمرینی کاملا اختصاصی"}
          Position={
            "lg:top-[14rem] sm:top-[7rem] top-[-2rem] xl:right-[10rem] lg:right-[2rem] sm:right-[4rem] right-[0.5rem]"
          }
        />
        <VipCard
          Icon={"../../../../src/assets/Image/medalIcon.svg"}
          Text={"زیرنظر بهترین مربی ها"}
          Position={
            "xl:bottom-[-4rem] lg:bottom-[-5.5rem] sm:bottom-[2rem] bottom-[-5rem] xl:left-[7rem] sm:left-[4rem] left-[0.5rem]"
          }
        />
      </div>
    </div>
  );
}
