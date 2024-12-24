import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // FaRegHeart là trái tim rỗng
import { FiPhoneCall } from "react-icons/fi";
import LayoutUser from "../../layout/layoutUser";
import MotoCard from "../../components/MotoCard";
import ContactModal from "../../components/ContactModal";
import { useTranslation } from "react-i18next";

function StoreDetailPage() {
  const { t } = useTranslation("storeDetail");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); // State quản lý trạng thái trái tim

  const bikes = [
    {
      id: 1,
      name: "Honda Sh 125i",
      year: "2020",
      mileage: "1000km",
      price: "6x.000.000đ",
      image:
        "https://media.moitruongvadothi.vn/images/2023/10/25/9883-1698207232-9883-1695003555-gia-xe-honda-sh-2023-1.jpg",
    },
    {
      id: 2,
      name: "Honda Sh mode",
      year: "2023",
      mileage: "1400km",
      price: "5x.000.000đ",
      image:
        "https://kuongngan.com/wp-content/uploads/2023/08/nqWK6azOcQk9GhvZvtcS.png",
    },
    {
      id: 3,
      name: "BMW R1250GS",
      year: "2021",
      mileage: "3000km",
      price: "14x.000.000đ",
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838",
    },
  ];

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Đảo ngược trạng thái "yêu thích"
  };

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto bg-white min-h-screen">
        <div className="bg-white py-4 shadow-md flex items-center px-4">
          <button
            className="text-2xl mr-4 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="text-xl font-bold text-gray-800">{t("pageTitle")}</h1>
        </div>

        <div className="bg-white rounded-b-lg p-6 text-center relative">
          <div className="w-40 h-40 rounded-full mx-auto border-2 border-blue-400 overflow-hidden">
            <img
              src="https://aloinan.com/wp-content/uploads/2018/01/logo-xe-may-3.jpg"
              alt={t("storeName")}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Button trái tim */}
          <button
            className="absolute top-6 right-6 text-2xl text-gray-600"
            onClick={toggleFavorite} // Gọi hàm toggleFavorite
          >
            {isFavorite ? (
              <FaHeart className="text-red-500" /> // Trái tim đặc
            ) : (
              <FaRegHeart /> // Trái tim rỗng
            )}
          </button>
          <h2 className="text-2xl font-bold mt-4">{t("storeName")}</h2>
        </div>

        <div className="bg-white rounded-lg mt-4">
          <div className="grid grid-cols-3 text-center py-4">
            <div className="flex justify-center items-center flex-col border border-600">
              <p className="text-gray-600 m-0">{t("stats.selling")}</p>
              <p className="text-lg font-bold">23</p>
            </div>
            <div className="flex justify-center items-center flex-col border border-600">
              <p className="text-gray-600 m-0">{t("stats.sold")}</p>
              <p className="text-lg font-bold">56</p>
            </div>
            <div className="flex justify-center items-center flex-col border border-600">
              <p className="text-gray-600 m-0">{t("stats.favorites")}</p>
              <p className="text-lg font-bold">200</p>
            </div>
          </div>
        </div>

        <div className="mx-8 mt-4">
          <h1 className="text-xl font-bold mb-4">{t("bikeListTitle")}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

        <div className="w-full max-w-[800px] mx-auto fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white py-3 shadow-md flex justify-center rounded-lg px-6">
          <button
            className="flex justify-center items-center gap-2 bg-[#d59600] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#d59640] w-full"
            onClick={() => setModalOpen(true)}
          >
            <FiPhoneCall />
            {t("contactButton")}
          </button>
        </div>

        {isModalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      </div>
    </LayoutUser>
  );
}

export default StoreDetailPage;
