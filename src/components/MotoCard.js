import React from "react";
import { useNavigate } from "react-router-dom";

function MotoCard({ image, name, year, mileage, price }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detailmoto`);
  }
  return (
    <div onClick={handleClick} className="border rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-sm text-gray-600 m-0">
          {year} &nbsp;&nbsp; {mileage}km
        </p>
        <p className="text-[#d59648] font-bold text-lg mt-2 m-0">{price}</p>
      </div>
    </div>
  );
}

export default MotoCard;
