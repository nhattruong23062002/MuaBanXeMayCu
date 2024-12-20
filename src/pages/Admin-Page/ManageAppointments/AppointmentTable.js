import React from "react";
import AppointmentCard from "./AppointmentCard";

const AppointmentTable = ({ appointments }) => {
  const getBackgroundColor = (category) => {
    switch (category) {
      case "Khách hẹn":
        return "bg-red-100"; // Màu đỏ nhạt
      case "Khách đang chờ":
        return "bg-yellow-100"; // Màu vàng nhạt
      case "Khách hoàn thành":
        return "bg-green-100"; // Màu xanh nhạt
      default:
        return "bg-white"; // Màu trắng
    }
  };

  const getTitleBackgroundColor = (category) => {
    switch (category) {
      case "Khách hẹn":
        return "bg-blue-500"; // Màu xanh dương
      case "Khách đang chờ":
        return "bg-yellow-500"; // Màu vàng
      case "Khách hoàn thành":
        return "bg-green-500"; // Màu xanh lá
      default:
        return "bg-gray-400"; // Màu xám
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Tách dữ liệu thành các cột dựa trên category */}
      {["Khách hẹn", "Khách đang chờ", "Khách hoàn thành"].map((category) => (
        <div
          className={`p-4 rounded-lg shadow ${getBackgroundColor(category)}`}
          key={category}
        >
          <h4
            className={`text-white text-center py-2 rounded-md ${getTitleBackgroundColor(
              category
            )}`}
          >
            {category}
          </h4>
          <div className="space-y-4 mt-4">
            {appointments
              .filter((item) => item.category === category)
              .map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  id={appointment.id}
                  name={appointment.name}
                  phone={appointment.phone}
                  status={appointment.status}
                  time={appointment.time}
                  initials={appointment.initials}
                  color={appointment.color}
                />
              ))}
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Xem thêm lịch hẹn
          </button>
        </div>
      ))}
    </div>
  );
};

export default AppointmentTable;