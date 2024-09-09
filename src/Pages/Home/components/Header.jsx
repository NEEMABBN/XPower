import React, { useState, useLayoutEffect, useRef } from "react";
import SideMenu from "./SideMenu";
import Navbar from "../../../Component/Navbar";
import LinearMotion from "../../../Component/LinearMotion";
import LandingStatistics from "../../../Component/LandingStatistics";
import LandingAboutUs from "../../../Component/LandingAboutUs";
import gsap from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const CloseMenu = () => {
    setIsMenuOpen(false);
  };

  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#animasap", { duration: 2, opacity: 0, scale: 0 });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <header className="w-full flex flex-col items-center gap-4 bg-[url(../../../src/assets/Image/Capa1.png)] xl:bg-auto bg-cover bg-no-repeat relative">
      <SideMenu
        isMenuOpen={isMenuOpen}
        ToggleMenu={ToggleMenu}
        CloseMenu={CloseMenu}
      />
      <Navbar ToggleMenu={ToggleMenu} />
      <div className="container mx-auto flex lg:flex-row flex-col-reverse items-center justify-between lg:gap-0 gap-10">
        <div
          ref={comp}
          className="lg:w-[50%] w-full flex flex-col lg:items-start items-center gap-9 sm:px-0 px-2"
        >
          <h2
            id="animasap"
            className="xl:text-[56px] md:text-[45px] sm:text-[30px] text-[25px] lg:text-start text-center BoldYekan font-extrabold bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#BDADFF]"
          >
            هر آنچه برای رسیدن به اندام ایده‌آل نیاز دارید
          </h2>
          <span className="bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#BDADFF] xl:text-3xl sm:text-xl text-lg sm:text-start text-center">
            تخصصی ترین وبسایت بدنسازی در ایران با مجوز رسمی
          </span>
          <LandingAboutUs />
          <LandingStatistics />
        </div>
        <div className="lg:w-[50%] md:w-auto w-[75%] relative">
          <img
            src="../../../src/assets/Image/Star.svg"
            alt=""
            className="absolute xl:top-14 top-0 left-4"
          />
          <img
            src="../../../src/assets/Image/CoachOrg.png"
            alt=""
            className="xl:translate-x-[-100px]"
          />
        </div>
      </div>
      <LinearMotion />
    </header>
  );
}
