import React, { useState } from "react";
import LayoutUser from "../../layout/layoutUser";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import MotoPurchased from "../../components/MotoPurchased";

function PurchasedPage() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      name: "Honda SH 125i",
      year: 2020,
      mileage: "5000km",
      price: "60.000.000 đ",
      image: "https://media.moitruongvadothi.vn/images/2023/10/25/9883-1698207232-9883-1695003555-gia-xe-honda-sh-2023-1.jpg",
      seller: "Nhat moto",
    },
    {
      id: 2,
      name: "Honda SH 125i",
      year: 2020,
      mileage: "5000km",
      price: "60.000.000 đ",
      image: "https://media.moitruongvadothi.vn/images/2023/10/25/9883-1698207232-9883-1695003555-gia-xe-honda-sh-2023-1.jpg",
      seller: "Nhat moto",
    },
  ];

  const tabs = [
    { id: "all", label: "Tất cả" },
    { id: "pending", label: "Đang chờ" },
    { id: "processing", label: "Giao dịch" },
    { id: "completed", label: "Hoàn tất" },
  ];

  return (
    <LayoutUser>
      <div className="bg-gray-100 min-h-screen p-6 max-w-[800px] mx-auto">
        <div className="flex items-center mb-4">
          <button
            className="text-2xl mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="text-2xl font-bold">Quản lý xe đã mua</h1>
        </div>

        <div className="flex border-b-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg px-4 py-2 font-medium ${
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

export default PurchasedPage;
