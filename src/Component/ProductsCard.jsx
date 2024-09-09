import React from "react";

export default function ProductsCard({ Image, Name, Price }) {
  return (
    <div className="w-full flex flex-col items-center bg-[#2C323D] hover:bg-[#6F4EFD] transition-all group rounded-2xl gap-8 pt-56 pb-14 px-7 relative">
      <div className="bg-[#1D1D1DC4] flex items-center justify-center backdrop-blur-sm py-6 px-9 border rounded-2xl absolute top-[-4rem]">
        <img src={Image} alt="" className="sm:w-auto w-[85%]" />
      </div>
      <span className="sm:text-lg text-white font-semibold">{Name}</span>
      <div className="w-full flex items-center justify-between">
        <span className="text-white sm:text-base text-sm">قیمت :</span>
        <span className="text-white sm:text-base text-sm">{Price}</span>
      </div>
      <button className="bg-[#6F4EFD] group-hover:bg-[#2C323D] transition-all text-white p-2 rounded-xl absolute bottom-[-1rem]">
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
