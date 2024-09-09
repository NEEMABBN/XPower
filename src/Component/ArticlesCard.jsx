import React from "react";

export default function ArticlesCard({ Image, Title, Description }) {
  return (
    <div className="w-full flex flex-col items-center justify-between relative cursor-pointer bg-[#2C323D] transition-all rounded-2xl">
      <img src={Image} alt="" className="w-full rounded-t-2xl" />
      <div className="w-full flex flex-col items-start gap-4 px-8 py-6 rounded-b-2xl">
        <h3 className="xl:text-xl sm:text-base text-[15px] text-white font-semibold">
          {Title}
        </h3>
        <p className="text-gray-400 line-clamp-3 leading-8 xl:text-lg sm:text-base text-sm">
          {Description}
        </p>
      </div>
      <div className="absolute bg-[#6F4EFD] p-2 rounded-xl text-inherit bottom-[-1.4rem]">
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
      </div>
    </div>
  );
}
