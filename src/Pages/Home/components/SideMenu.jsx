import React from "react";
import { IoClose } from "react-icons/io5";

export default function SideMenu({ isMenuOpen, CloseMenu }) {
  return (
    <div
      className={`${
        isMenuOpen ? "right-0" : "right-[-100%]"
      } fixed md:w-[30%] w-[50%] h-screen bg-[#060B25BF] backdrop-blur-[12.8px] top-0 z-50 transition-all duration-300 md:hidden flex flex-col items-center gap-5 py-4 px-2`}
    >
      <div className="w-full flex items-center justify-between">
        <h2 className="font-extrabold sm:text-3xl text-2xl BoldYekan bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#BDADFF]">
          X.POWER
        </h2>
        <IoClose
          onClick={CloseMenu}
          className="text-[#BDADFF] sm:text-3xl text-2xl cursor-pointer"
        />
      </div>
      <ul className="w-full flex flex-col items-center gap-4">
        <li className="bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#BDADFF] font-semibold w-full text-center border-b-2 py-2 border-[#BDADFF] text-[15px]">
          صفحه اصلی
        </li>
        <li className="bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#BDADFF] font-semibold w-full text-center border-b-2 py-2 border-[#BDADFF] text-[15px]">
          فروشگاه
        </li>
        <li className="bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#BDADFF] font-semibold w-full text-center border-b-2 py-2 border-[#BDADFF] text-[15px]">
          خدمات
        </li>
        <li className="bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#BDADFF] font-semibold w-full text-center border-b-2 py-2 border-[#BDADFF] text-[15px]">
          بلاگ
        </li>
        <li className="bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#BDADFF] font-semibold w-full text-center border-b-2 py-2 border-[#BDADFF] text-[15px]">
          درباره‌ما
        </li>
      </ul>
    </div>
  );
}
