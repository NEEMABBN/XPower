import React from "react";

export default function LandingStatistics() {
  return (
    <div className="xl:w-full w-[90%] flex sm:flex-row flex-col items-center justify-between sm:gap-0 gap-4">
      <div className="flex sm:flex-col flex-row-reverse sm:w-auto w-full sm:justify-normal justify-between items-center px-3">
        <span className="sm:text-4xl text-2xl text-white font-bold">۲۰۰۰+</span>
        <span className="text-[#8F82CA]">کاربر فعال</span>
      </div>
      <div className="sm:w-[1px] w-full sm:h-[60px] h-[2px] sm:bg-gradient-to-b bg-gradient-to-r rounded-full from-white to-[#1a1a1a]"></div>
      <div className="flex sm:flex-col flex-row-reverse sm:w-auto w-full sm:justify-normal justify-between items-center px-3">
        <span className="sm:text-4xl text-2xl text-white font-bold">۲۵۰+</span>
        <span className="text-[#8F82CA]">مکمل بدن سازی</span>
      </div>
      <div className="sm:w-[1px] w-full sm:h-[60px] h-[2px] sm:bg-gradient-to-b bg-gradient-to-l rounded-full from-white to-[#1a1a1a]"></div>
      <div className="flex sm:flex-col flex-row-reverse sm:w-auto w-full sm:justify-normal justify-between items-center px-3">
        <span className="sm:text-4xl text-2xl text-white font-bold">۱۰۰۰+</span>
        <span className="text-[#8F82CA]">رژیم غذایی آنلاین</span>
      </div>
    </div>
  );
}
