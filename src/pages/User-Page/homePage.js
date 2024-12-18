import React from "react";
import LayoutUser from "../../layout/layoutUser";
import { FaSearch } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import BannerSwiper from "../../components/BannerSwipper";
import FilterBar from "../../components/FilterBar";
import MotoCard from "../../components/MotoCard";

function HomePage() {
  const bikes = [
    {
      id: 1,
      name: "Honda Sh 125i",
      year: "2020",
      mileage: "1000km",
      price: "60.000.000đ",
      image:
        "https://media.moitruongvadothi.vn/images/2023/10/25/9883-1698207232-9883-1695003555-gia-xe-honda-sh-2023-1.jpg",
    },
    {
      id: 2,
      name: "Ducati Monster 821",
      year: "2023",
      mileage: "1600km",
      price: "126.000.000đ",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
    },
    {
      id: 3,
      name: "BMW R1250GS",
      year: "2021",
      mileage: "3000km",
      price: "148.000.000đ",
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838",
    },
    {
      id: 4,
      name: "Honda Sh mode",
      year: "2023",
      mileage: "1400km",
      price: "50.000.000đ",
      image:
        "https://kuongngan.com/wp-content/uploads/2023/08/nqWK6azOcQk9GhvZvtcS.png",
    },
    {
      id: 5,
      name: "Honda Sh 125i",
      year: "2021",
      mileage: "3000km",
      price: "45.000.000đ",
      image:
        "https://thanhnien.mediacdn.vn/Uploaded/bahung/2022_12_10/honda-sh5-2240.jpeg",
    },
    {
      id: 6,
      name: "Xe moto Honda CB190R",
      year: "2017",
      mileage: "12000km",
      price: "47.000.000đ",
      image: "https://tayamotor.vn/wp-content/uploads/2017/12/negra_0.png",
    },
  ];
  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto relative bg-white">
        <div className="mb-8 relative">
          <BannerSwiper />
          <FilterBar />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-1/2 z-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full py-3 pl-4 pr-12 text-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#0e0f2b]"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0e0f2b] hover:text-[#b27939]"
              >
                <FaSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto px-4 py-14 bg-white rounded-md" style={{ marginTop: "4rem" }}>
        <h2 className="text-2xl font-bold mb-4">Xe chất lượng</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <MotoCard
              key={bike.id}
              image={bike.image}
              name={bike.name}
              year={bike.year}
              mileage={bike.mileage}
              price={bike.price}
            />
          ))}
        </div>
      </div>
    </LayoutUser>
  );
}

export default HomePage;
