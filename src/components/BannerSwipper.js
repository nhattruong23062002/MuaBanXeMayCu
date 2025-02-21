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
      pagination={{ clickable: true }}
      loop={true}
      className="rounded-b-lg shadow-lg"
    >
      <SwiperSlide>
        <img
          src="https://xe.muabannhanh.com/upload/thumbnails/700/2021/04/28/lai-xe-jpg.jpg"
          alt="Banner 2"
          className="w-full h-[430px] object-cover rounded-b-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://static.danhgiaxe.com/data/201525/although-the-scirocco-is-sold-around-the-world-it-is-doesnt-look-like-the-stylish-coupe-will-be-coming-to-america-anytime-soon_779.jpg"
          alt="Banner 3"
          className="w-full h-[430px] object-cover rounded-b-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://otohoangkim-storage.sgp1.cdn.digitaloceanspaces.com/Bentley-Continental-GT-Azure-2024-1.webp"
          alt="Banner 1"
          className="w-full h-[430px] object-cover rounded-b-lg"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerSwiper;
