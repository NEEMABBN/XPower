import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductsCard from "../../../Component/ProductsCard";

export default function Products() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-8 mt-28 overflow-hidden">
      <h2 className="text-[#6F4EFD] md:text-2xl text-lg font-semibold">
        محصولات
      </h2>
      <h3 className="text-white font-semibold md:text-3xl sm:text-2xl">
        جدیدترین محصولات
      </h3>
      <div className="w-full flex items-center my-4 sm:px-0 px-10">
        <div className="w-[4px] h-[400px] bg-[#060b25] md:shadow-[0_0_200px_180px_rgba(6,11,37,1)] sm:shadow-[0_0_200px_180px_rgba(6,11,37,0.7)] relative z-10"></div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
          className="mySwiper py-16 cursor-grab"
        >
          <SwiperSlide>
            <ProductsCard
              Image={"../../../../src/assets/Image/gainer.png"}
              Name={"گینر ژن 3000 گرم"}
              Price={"9/600/000 تومان"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsCard
              Image={"../../../../src/assets/Image/whey-1.png"}
              Name={"پروتئین وی یورویتال 1000 گرم"}
              Price={"1/800/000 تومان"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsCard
              Image={"../../../../src/assets/Image/whey-2.png"}
              Name={"پروتئین وی ژن استار 2270 گرم"}
              Price={"2/290/000 تومان"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsCard
              Image={"../../../../src/assets/Image/whey-3.png"}
              Name={"دلیشس وی پروتئین کیو ان تی"}
              Price={"3/180/000 تومان"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsCard
              Image={"../../../../src/assets/Image/gainer.png"}
              Name={"گینر ژن 3000 گرم"}
              Price={"9/600/000 تومان"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsCard
              Image={"../../../../src/assets/Image/whey-1.png"}
              Name={"پروتئین وی یورویتال 1000 گرم"}
              Price={"1/800/000 تومان"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsCard
              Image={"../../../../src/assets/Image/whey-2.png"}
              Name={"پروتئین وی ژن استار 2270 گرم"}
              Price={"2/290/000 تومان"}
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-[4px] h-[400px] bg-[#060b25] md:shadow-[0_0_200px_180px_rgba(6,11,37,1)] sm:shadow-[0_0_200px_180px_rgba(6,11,37,0.7)] relative z-10"></div>
      </div>
    </div>
  );
}
