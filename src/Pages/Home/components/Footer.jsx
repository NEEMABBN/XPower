import React from "react";
import ConnectionBox from "../../../Component/ConnectionBox";
import FooterMenu from "../../../Component/FooterMenu";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center">
      <ConnectionBox />
      <div className="w-full bg-[#6F4EFD]">
        <div className="container mx-auto flex md:flex-row flex-col items-center justify-between py-20 gap-16">
          <div className="flex items-center lg:gap-20 sm:gap-10 gap-4">
            <FooterMenu
              Title={"راهنمای مشتریان"}
              Option1={"پاسخ به پرسش‌های متداول"}
              Option2={"روش‌های ارسال کالا"}
              Option3={"روش‌های پرداخت"}
              Option4={"قوانین و مقررات"}
            />
            <FooterMenu
              Title={"راهنمای مشتریان"}
              Option1={"پاسخ به پرسش‌های متداول"}
              Option2={"روش‌های ارسال کالا"}
              Option3={"روش‌های پرداخت"}
              Option4={"قوانین و مقررات"}
            />
          </div>
          <div className="flex items-center lg:gap-16 md:gap-4 sm:gap-16 gap-5">
            <img
              src="../../../src/assets/Image/images-zard.png"
              alt=""
              className=""
            />
            <div className="bg-white px-2 py-5 rounded-md">
              <img
                src="../../../src/assets/Image/ENAMAD.png"
                alt="amy icke"
                className=""
              />
            </div>
          </div>
        </div>
        <div className="container text-center mx-auto bg-[#684CEB] sm:rounded-xl py-3 my-7">
          <span className="text-gray-400 sm:text-xl font-semibold">
            کلیه حقوق متعلق به این وبسایت میباشد
          </span>
        </div>
      </div>
    </div>
  );
}
