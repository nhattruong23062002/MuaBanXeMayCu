import React, { useState } from "react";
import LayoutUser from "../../layout/layoutUser";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import MotoPurchased from "../../components/MotoPurchased";

function SellPage() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      name: "Ducati Monster 821",
      year: 2020,
      mileage: "5000km",
      price: "130.000.000 đ",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
      sold : "0",
      trading: "0"
    },
    {
      id: 2,
      name: "Honda Sh mode",
      year: 2020,
      mileage: "5000km",
      price: "60.000.000 đ",
      image: "https://kuongngan.com/wp-content/uploads/2023/08/nqWK6azOcQk9GhvZvtcS.png",
      sold : "0",
      trading: "1"
    },
  ];

  const tabs = [
    { id: "all", label: "Sản phẩm của tôi" },
    { id: "pending", label: "Đang chờ" },
    { id: "processing", label: "Giao dịch" },
    { id: "completed", label: "Hoàn tất" },
  ];

  return (
    <LayoutUser>
      <div className="bg-gray-100 min-h-screen p-4 sm:p-6 max-w-[800px] mx-auto">
        <div className="flex items-center mb-4">
          <button
            className="text-xl sm:text-2xl mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="text-lg sm:text-2xl font-bold">Quản lý xe đang bán</h1>
        </div>

        <div className="flex border-b-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm sm:text-lg px-2 sm:px-4 py-1 sm:py-2 font-medium ${
                activeTab === tab.id
                  ? "text-[#d59648] border-b-2 border-[#d59648]"
                  : "text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {cars.map((car) => (
            <MotoPurchased key={car.id} car={car} />
          ))}
        </div>
      </div>
    </LayoutUser>
  );
}

export default SellPage;
