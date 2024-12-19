import React, { useState } from "react";
import LayoutUser from "../../layout/layoutUser";
import BannerSwiper from "../../components/BannerSwipper";
import FilterBar from "../../components/FilterBar";
import MotoCard from "../../components/MotoCard";
import AdBanner from "../../components/AdBanner";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    price: 100,
    year: "",
    location: "",
  });

  console.log("filters",filters)

  const bikes = [
    {
      id: 1,
      name: "Honda Sh 125i",
      year: "2020",
      type:"Xe tay ga",
      mileage: "1000km",
      price: 20,
      location: "Hà Nội",
      image:
        "https://media.moitruongvadothi.vn/images/2023/10/25/9883-1698207232-9883-1695003555-gia-xe-honda-sh-2023-1.jpg",
    },
    {
      id: 2,
      name: "Ducati Monster 821",
      year: "2023",
      type:"Xe phân khối lớn",
      mileage: "1600km",
      price: 40,
      location: "TP.HCM",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
    },
    {
      id: 3,
      name: "BMW R1250GS",
      year: "2021",
      type:"Xe phân khối lớn",
      mileage: "3000km",
      price: 50,
      location: "Hà Nội",
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838",
    },
    {
      id: 4,
      name: "Honda Sh mode",
      year: "2023",
      mileage: "1400km",
      price: 70,
      type:"Xe tay ga",
      location: "TP.HCM",
      image:
        "https://kuongngan.com/wp-content/uploads/2023/08/nqWK6azOcQk9GhvZvtcS.png",
    },
    {
      id: 5,
      name: "Honda Sh 125i",
      year: "2021",
      type:"Xe tay ga",
      mileage: "3000km",
      price: 68,
      location: "Đà Nẵng",
      image:
        "https://thanhnien.mediacdn.vn/Uploaded/bahung/2022_12_10/honda-sh5-2240.jpeg",
    },
    {
      id: 6,
      name: "Xe moto Honda CB190R",
      year: "2017",
      type:"Xe phân khối lớn",
      mileage: "12000km",
      price: 77,
      location: "Đà Nẵng",
      image: "https://tayamotor.vn/wp-content/uploads/2017/12/negra_0.png",
    },
  ];

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredBikes = bikes.filter((bike) => {
    return (
      (!filters.type || bike.type === filters.type) &&
      (!filters.year || bike.year === filters.year) &&
      (!filters.location || bike.location === filters.location) &&
      bike.price <= filters.price * 2 && 
      bike.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  

  return (
    <LayoutUser>
      <AdBanner />
      <div className="max-w-[800px] mx-auto relative bg-white">
        <div className="mb-8 relative">
          <BannerSwiper />
          <FilterBar onFilter={handleFilter} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-1/2 z-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-4 pr-12 text-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#0e0f2b]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-14 bg-white rounded-md" style={{ marginTop: "4rem" }}>
        <h2 className="text-2xl font-bold mb-4">Xe chất lượng</h2>
        {filteredBikes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredBikes.map((bike) => (
              <MotoCard
                key={bike.id}
                image={bike.image}
                name={bike.name}
                year={bike.year}
                mileage={bike.mileage}
                price={`${bike.price}.000.000đ`}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Không tìm thấy xe phù hợp.</p>
        )}
      </div>
    </LayoutUser>
  );
}

export default HomePage;
