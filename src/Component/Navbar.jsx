import React from "react";
import { TiThMenu } from "react-icons/ti";

export default function Navbar({ ToggleMenu }) {
  return (
    <nav className="container mx-auto flex items-center justify-between py-6 sm:px-0 px-4">
      <div className="flex md:items-center items-start md:gap-11 sm:gap-4 gap-2">
        <TiThMenu
          className="text-white sm:text-3xl text-2xl cursor-pointer md:hidden block"
          onClick={ToggleMenu}
        />
        <h1 className="text-white font-extrabold md:text-3xl text-2xl BoldYekan">
          X.POWER
        </h1>
        <ul className="md:flex hidden items-center gap-4">
          <li className="text-white hover:text-[#6F4EFD] transition-all lg:text-lg cursor-pointer">
            صفحه اصلی
          </li>
          <li className="text-white hover:text-[#6F4EFD] transition-all lg:text-lg cursor-pointer">
            فروشگاه
          </li>
          <li className="text-white hover:text-[#6F4EFD] transition-all lg:text-lg cursor-pointer">
            خدمات
          </li>
          <li className="text-white hover:text-[#6F4EFD] transition-all lg:text-lg cursor-pointer">
            بلاگ
          </li>
          <li className="text-white hover:text-[#6F4EFD] transition-all lg:text-lg cursor-pointer">
            درباره‌ما
          </li>
        </ul>
      </div>
      <button className="bg-[#6F4EFD] text-white rounded-md py-2 px-6 sm:text-base text-sm font-semibold hover:shadow-[0_0_20px_-1px_rgba(110,78,253,0.55)] transition-all">
        ورود و ثبت نام
      </button>
    </nav>
  );
}
