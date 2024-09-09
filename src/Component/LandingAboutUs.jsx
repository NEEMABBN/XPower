import React from "react";

export default function LandingAboutUs() {
  return (
    <div className="xl:w-full w-[90%] bg-gray-800 outline outline-1 outline-gray-400 rounded-2xl relative py-9 px-7">
      <div className="bg-[#6F4EFD] flex flex-col items-center justify-center absolute top-[-30px] left-[20px] rounded-full px-2 py-3">
        <img
          src="../../../src/assets/Image/ChampIcon.svg"
          alt=""
          className="w-[80%]"
        />
      </div>
      <p className="text-gray-400 xl:text-lg sm:text-base text-sm md:text-start text-center leading-8 tracking-wider">
        با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم گرفتیم دانش و
        تجربه خود را در اختیار همه علاقه‌مندان به این رشته ورزشی جذاب قرار دهیم.
      </p>
    </div>
  );
}
