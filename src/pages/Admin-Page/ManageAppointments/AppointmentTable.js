import React from "react";
import AppointmentCard from "./AppointmentCard";
import { useTranslation } from "react-i18next";

const AppointmentTable = ({
  scheduledAppointments,
  waitingAppointments,
  completedAppointments,
  handleViewMore,
}) => {
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
        return "#ffffff"; // Màu trắng
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
        return "#bdc3c7"; // Màu xám
    }
  };

  // Hàm để render từng cột lịch hẹn
  const renderColumn = (appointments, category, viewMoreHandler) => (
    <div
      className="column"
      style={{
        backgroundColor: getBackgroundColor(category),
      }}
    >
      <h4
        style={{
          backgroundColor: getTitleBackgroundColor(category),
          color: "white",
          padding: "10px",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        {category}
      </h4>
      {appointments.map((appointment) => (
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
      <button
        className="add-appointment-btn"
        onClick={() => viewMoreHandler(category)}
      >
        {t("buttons.viewMore")}
      </button>
    </div>
  );

  return (
    <div className="appointment-table">
      {renderColumn(
        scheduledAppointments,
        t("categories.scheduled"),
        handleViewMore
      )}
      {renderColumn(
        waitingAppointments,
        t("categories.waiting"),
        handleViewMore
      )}
      {renderColumn(
        completedAppointments,
        t("categories.completed"),
        handleViewMore
      )}
    </div>
  );
};

export default AppointmentTable;
