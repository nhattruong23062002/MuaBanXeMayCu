import React from "react";
import AppointmentCard from "./AppointmentCard";

const AppointmentTable = ({ appointments }) => {
  const getBackgroundColor = (category) => {
    switch (category) {
      case "Khách hẹn":
        return "#f8d7da"; // Màu đỏ nhạt
      case "Khách đang chờ":
        return "#fff3cd"; // Màu vàng nhạt
      case "Khách hoàn thành":
        return "#d4edda"; // Màu xanh nhạt
      default:
        return "#ffffff"; // Màu trắng
    }
  };
  const getTitleBackgroundColor = (category) => {
    switch (category) {
      case "Khách hẹn":
        return "#3498db"; // Màu xanh dương
      case "Khách đang chờ":
        return "#f1c40f"; // Màu vàng
      case "Khách hoàn thành":
        return "#2ecc71"; // Màu xanh lá
      default:
        return "#bdc3c7"; // Màu xám
    }
  };
  return (
    <div className="appointment-table">
      {/* Tách dữ liệu thành các cột dựa trên category */}
      {["Khách hẹn", "Khách đang chờ", "Khách hoàn thành"].map((category) => (
        <div
          className="column"
          key={category}
          style={{ backgroundColor: getBackgroundColor(category) }}
        >
          <h4
            style={{
              backgroundColor: getTitleBackgroundColor(category), // Màu nền tiêu đề
              color: "white", // Màu chữ trắng
              padding: "10px",
              borderRadius: "4px",
              textAlign: "center",
            }}
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
          <button className="add-appointment-btn">Xem thêm lịch hẹn</button>
        </div>
      ))}
    </div>
  );
};

export default AppointmentTable;
