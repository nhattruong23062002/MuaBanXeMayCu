import React, { useState } from "react";
import RatingModal from "./RatingModal";

function MotoPurchased({ car }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <img
        src={car.image}
        alt={car.name}
        className="w-24 h-20 object-cover rounded-md"
      />

      <div className="flex-1 ml-4 text-left">
        <h2 className="text-lg font-bold">{car.name}</h2>
        <p className="text-gray-600 text-sm">
          {car.year} &nbsp; {car.mileage}
        </p>
        <p className="text-gray-600 text-sm font-medium mt-2">
          Người bán: {car.seller}
        </p>
      </div>

      <div className="text-right">
        <p className="text-[#d59648] text-lg font-bold mb-2">{car.price}</p>
        <div className="flex space-x-2">
          <button className="bg-[#d59648] text-white px-3 py-1 rounded-md text-sm hover:bg-[#b27939]">
            Xem chi tiết đơn
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-gray-400 px-3 py-1 rounded-md text-sm text-gray-700 hover:bg-gray-100"
          >
            Đánh giá
          </button>
        </div>
        <RatingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default MotoPurchased;
