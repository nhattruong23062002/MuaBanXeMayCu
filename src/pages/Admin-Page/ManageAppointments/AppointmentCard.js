import React from "react";
import { FaPhoneAlt, FaInfoCircle, FaClock } from "react-icons/fa"; // Import các icon từ react-icons

const AppointmentCard = ({
  id,
  name,
  phone,
  time,
  initials,
  color,
  status,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      <p className="font-bold text-gray-800 mb-2">
        <span className="text-blue-500">#{id}</span> {name}
      </p>
      <p className="flex items-center text-gray-700 text-lg mb-2">
        <FaPhoneAlt className="text-blue-500 mr-2" /> {phone}
      </p>
      <p className="flex items-center text-gray-700 text-lg mb-2">
        <FaInfoCircle className="text-green-500 mr-2" /> {status}
      </p>
      <p className="flex items-center text-gray-700 text-lg mb-2">
        <FaClock className="text-yellow-500 mr-2" /> {time}
      </p>
      <div
        className="w-10 h-10 flex items-center justify-center text-white text-lg font-bold rounded-full mt-4 mx-auto"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
    </div>
  );
};

export default AppointmentCard;