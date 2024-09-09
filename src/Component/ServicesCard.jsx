import React from "react";

export default function ServicesCard({ Icon, Title, Description }) {
  return (
    <div className="w-full flex flex-col items-center justify-between bg-[#2C323D] hover:bg-[#6F4EFD] cursor-pointer transition-all rounded-2xl gap-6 sm:py-14 py-9 px-5">
      <img src={Icon} alt="" className="" />
      <h3 className="font-bold text-white sm:text-xl text-base">{Title}</h3>
      <p className="text-gray-400 text-center sm:text-base text-sm leading-8 sm:my-6 px-3">
        {Description}
      </p>
      <button className="flex items-center text-gray-400 sm:text-base text-sm sm:gap-0 gap-1">
        ادامه مطالب
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="sm:size-6 size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </div>
  );
}
