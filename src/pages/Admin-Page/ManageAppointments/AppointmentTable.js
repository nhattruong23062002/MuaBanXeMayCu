import React from "react";
import AppointmentCard from "./AppointmentCard";
import { useTranslation } from "react-i18next";

const AppointmentTable = ({ appointments }) => {
  const { t } = useTranslation("manageAppointments");
  const getBackgroundColor = (category) => {
    switch (category) {
      case t("categories.scheduled"):
        return "#f8d7da"; // Màu đỏ nhạt
      case t("categories.waiting"):
        return "#fff3cd"; // Màu vàng nhạt
      case t("categories.completed"):
        return "#d4edda"; // Màu xanh nhạt
      default:
        return "bg-white"; // Màu trắng
    }
  };

  const getTitleBackgroundColor = (category) => {
    switch (category) {
      case t("categories.scheduled"):
        return "#3498db"; // Màu xanh dương
      case t("categories.waiting"):
        return "#f1c40f"; // Màu vàng
      case t("categories.completed"):
        return "#2ecc71"; // Màu xanh lá
      default:
        return "bg-gray-400"; // Màu xám
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Tách dữ liệu thành các cột dựa trên category */}
      {[
        t("categories.scheduled"),
        t("categories.waiting"),
        t("categories.completed"),
      ].map((category) => (
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
          {appointments
            .filter((item) => item.category === category)
            .map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                id={appointment.id}
                name={appointment.name}
                phone={appointment.phone}
                status={appointment.status}
                time={appointment.time} // Thay đổi nếu có thời gian trong dữ liệu
                initials={appointment.initials}
                color={appointment.color}
              />
            ))}
          <button className="add-appointment-btn">
            {" "}
            {t("buttons.viewMore")}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AppointmentTable;