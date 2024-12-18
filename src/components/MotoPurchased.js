import React, { useState } from "react";
import RatingModal from "./RatingModal";

function MotoPurchased({ car }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <p className="text-gray-600 font-medium m-0">
          Người bán: {car.seller}
        </p>
      </div>

      <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
        <p className="text-[#d59648] text-lg font-bold mb-2">{car.price}</p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button className="bg-[#d59648] text-white px-3 py-1 rounded-md hover:bg-[#b27939] w-full sm:w-auto">
            Xem chi tiết đơn
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-gray-400 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100 w-full sm:w-auto"
          >
            Đánh giá
          </button>
        </div>
      </div>

      <RatingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default MotoPurchased;
