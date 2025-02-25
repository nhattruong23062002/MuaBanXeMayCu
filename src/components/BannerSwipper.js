import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function BannerSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={false}
      loop={true}
      className="rounded-b-lg shadow-lg"
    >
      <SwiperSlide>
        <img
          src="Banner4.png"
          alt="Banner 2"
          className="w-full h-[350px] sm:h-[430px] object-cover rounded-b-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="Banner3.png"
          alt="Banner 3"
          className="w-full h-[350px] sm:h-[430px]  object-cover rounded-b-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://otohoangkim-storage.sgp1.cdn.digitaloceanspaces.com/Bentley-Continental-GT-Azure-2024-1.webp"
          alt="Banner 1"
          className="w-full h-[350px] sm:h-[430px]  object-cover rounded-b-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="Banner2.png"
          alt="Banner 3"
          className="w-full h-[350px] sm:h-[430px] object-cover rounded-b-lg"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerSwiper;
