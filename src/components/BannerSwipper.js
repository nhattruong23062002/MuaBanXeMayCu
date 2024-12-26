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
          src="https://hoahonda.com.vn/wp-content/uploads/2022/08/cacloaixemayphuhopvoinhanvienvanphong.jpg.webp"
          alt="Banner 2"
          className="w-full h-[430px] object-cover rounded-b-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://maudon.net/wp-content/uploads/2024/07/tai-giay-mua-ban-xe-may-2.jpg"
          alt="Banner 3"
          className="w-full h-[430px] object-cover rounded-b-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://hoahonda.com.vn/wp-content/uploads/2022/05/Peach-Brown-Abstract-International-Self-Day-Care-Twitter-Post-1920-%C3%97-1080-px-1920-%C3%97-1080-px.png"
          alt="Banner 1"
          className="w-full h-[430px] object-cover rounded-b-lg"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerSwiper;
