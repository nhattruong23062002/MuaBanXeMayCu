import React, { useState } from "react";
import RatingModal from "./RatingModal";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function MotoPurchased({ car }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation("motoPurchased"); // Sử dụng namespace "motoPurchased"

  const handleShowPurchaseDetail = () => {
    navigate("/purchaseDetail");
  };

  const handleShowPostDetail = () => {
    navigate("/postDetail");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start text-sm">
      <img
        src={car.image}
        alt={car.name}
        className="w-24 h-20 object-cover rounded-md mb-4 md:mb-0"
      />

      <div className="flex-1 ml-4 text-center md:text-left">
        <h2 className="text-lg font-bold">{car.name}</h2>
        <div className="flex justify-center md:justify-start space-x-2">
          <p className="text-gray-600 m-0">{car.year}</p>
          <p className="text-gray-600">{car.mileage}</p>
        </div>
        {car.seller && (
          <p className="text-gray-600 font-medium m-0">
            {t("seller")}: {car.seller}
          </p>
        )}

        {car.sold && (
          <div className="flex">
            <p className="text-gray-600 font-medium m-0 mr-3">
              {t("sold")}: {car.sold}
            </p>
            <p className="text-gray-600 font-medium m-0">
              {t("trading")}: {car.trading}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
        <p className="text-[#d59648] text-lg font-bold mb-2">{car.price}</p>
        {car.seller && (
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              className="bg-[#d59648] text-white px-3 py-1 rounded-md hover:bg-[#b27939] w-full sm:w-auto"
              onClick={handleShowPurchaseDetail}
            >
              {t("viewDetails")}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-gray-400 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100 w-full sm:w-auto"
            >
              {t("rate")}
            </button>
          </div>
        )}
        {car.sold && (
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              className="bg-[#4caf50] text-white px-3 py-1 rounded-md hover:bg-[#4caf90] w-full sm:w-auto flex items-center"
              onClick={handleShowPostDetail}
            >
              <FaEdit />
              {t("editInfo")}
            </button>
          </div>
        )}
      </div>
      <RatingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default MotoPurchased;
