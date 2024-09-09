import React from "react";

export default function FooterMenu({
  Title,
  Option1,
  Option2,
  Option3,
  Option4,
}) {
  return (
    <div className="flex flex-col md:items-start items-center gap-6">
      <h3 className="text-white sm:text-xl font-semibold">{Title}</h3>
      <ul className="flex flex-col md:items-start items-center gap-4">
        <li className="cursor-pointer text-gray-400 hover:text-white transition-all sm:text-base text-sm text-center">
          {Option1}
        </li>
        <li className="cursor-pointer text-gray-400 hover:text-white transition-all sm:text-base text-sm text-center">
          {Option2}
        </li>
        <li className="cursor-pointer text-gray-400 hover:text-white transition-all sm:text-base text-sm text-center">
          {Option3}
        </li>
        <li className="cursor-pointer text-gray-400 hover:text-white transition-all sm:text-base text-sm text-center">
          {Option4}
        </li>
      </ul>
    </div>
  );
}
