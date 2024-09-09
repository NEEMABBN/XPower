import React from "react";

export default function VipCard({ Icon, Text, Position }) {
  return (
    <div className={`xl:w-[18%] lg:w-[22%] md:w-[16%] sm:w-[18%] w-[32%] bg-[#FFFFFF5C] backdrop-blur-[6.7px] rounded-2xl absolute ${Position}`}>
      <div className="w-full flex flex-col items-center relative pt-16 pb-5">
        <img src={Icon} alt="" className="absolute top-[-2rem]" />
        <span className="text-white leading-8 text-center">{Text}</span>
      </div>
    </div>
  );
}
