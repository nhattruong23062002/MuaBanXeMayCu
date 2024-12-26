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

      {/* Số điện thoại */}
      <div className="appointment-item">
        <FaPhoneAlt className="icon-phone" />
        <span>{phone}</span>
      </div>

      {/* Trạng thái */}
      <div className="appointment-item">
        <FaInfoCircle className="icon-status" />
        <span>{status}</span>
      </div>

      {/* Thời gian */}
      <div className="appointment-item">
        <FaClock className="icon-time" />
        <span>{time}</span>
      </div>

      <div className="initials" style={{ backgroundColor: color }}>
        {initials}
      </div>
    </div>
  );
};

export default AppointmentCard;