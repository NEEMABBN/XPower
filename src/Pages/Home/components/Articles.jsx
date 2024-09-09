import React from "react";
import ArticlesCard from "../../../Component/ArticlesCard";

export default function Articles() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-16 mt-28">
      <h2 className="bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#BDADFF] sm:text-3xl text-lg font-semibold">
        جدیدترین مقالات
      </h2>
      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 sm:px-0 px-8">
        <ArticlesCard
          Image={"../../../../src/assets/Image/M1.png"}
          Title={"پولدارترین بدنسازهای تاریخ"}
          Description={
            "صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند..."
          }
        />
        <ArticlesCard
          Image={"../../../../src/assets/Image/M2.png"}
          Title={"برنامه‌تمرینی اینتروال چربی سوزی"}
          Description={
            "تمرینات اینتروال (HIIT) موثرترین روش تمرین برای چربی سوزی و حفظ عضلات است. در ادامه سعی می‌کنم درمورد تمرینات اینتروال بیشتر..."
          }
        />
        <ArticlesCard
          Image={"../../../../src/assets/Image/M3.png"}
          Title={"چقدر مقدار وزنه انتخاب کنم؟"}
          Description={
            "صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند با ما همراه باشید."
          }
        />
      </div>
    </div>
  );
}
