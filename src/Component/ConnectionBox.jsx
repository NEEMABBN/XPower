import React from "react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function ConnectionBox() {
  return (
    <div className="container mx-auto flex md:flex-row flex-col md:gap-0 sm:gap-3 gap-7 items-center justify-between bg-[#2C323D] sm:rounded-t-2xl rounded-t-3xl mt-40 px-10 py-6">
      <div className="flex items-center lg:gap-3 gap-2">
        <span className="text-white">شماره تماس :</span>
        <span className="text-white">09388322989</span>
      </div>
      <div className="md:w-auto w-full flex sm:flex-row flex-col items-center justify-between lg:gap-11 gap-5">
        <span className="text-white">ما را در شبکه‌های اجتماعی دنبال کنید</span>
        <div className="flex items-center lg:gap-6 md:gap-3 gap-6">
          <FaTelegramPlane className="text-white text-3xl" />
          <FaInstagram className="text-white text-3xl" />
          <FaWhatsapp className="text-white text-3xl" />
          <FaTwitter className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
}
