import React from "react";
import ServicesCard from "../../../Component/ServicesCard";

export default function Services() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-8 mt-20">
      <h2 className="text-[#6F4EFD] md:text-2xl text-lg font-semibold">
        خدمات ما
      </h2>
      <h3 className="text-white font-semibold md:text-3xl sm:text-2xl">
        ما در ایکس پاور چه خدماتی ارائه می‌کنیم؟
      </h3>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:px-0 px-8 gap-4 my-9">
        <ServicesCard
          Icon={"../../../../src/assets/Image/Layer_1.svg"}
          Title={"برنامه تمرینی"}
          Description={
            "ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی"
          }
        />
        <ServicesCard
          Icon={"../../../../src/assets/Image/Layer_2.svg"}
          Title={"رژیم غذایی"}
          Description={
            "ارائه آنلاین رژیم‌های غذایی ویژه ورزشکاران و افرادی که دوستدار سلامتی هستند"
          }
        />
        <ServicesCard
          Icon={"../../../../src/assets/Image/Layer_3.svg"}
          Title={"مکمل های بدنسازی"}
          Description={
            "بررسی انواع مکمل‌های بدنسازی برای انتخاب بهترین مکمل بدنسازی"
          }
        />
        <ServicesCard
          Icon={"../../../../src/assets/Image/Layer_4.svg"}
          Title={"برنامه تمرینی"}
          Description={
            "ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی"
          }
        />
      </div>
    </div>
  );
}
