import React, { useState } from "react";
import AppointmentTable from "./AppointmentTable";
import "./ManageAppointments.css";
import { FaSearch, FaFilter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ManageAppointments = () => {
  const { t } = useTranslation("manageAppointments");

  // Dữ liệu mẫu
  const appointments = [
    {
      id: "10033",
      name: "Anh Kiều",
      phone: "0935647894",
      status: t("context.status.needAdvice"),
      time: "13:00 - 30 min",
      initials: "AK",
      color: "pink",
      category: t("categories.scheduled"),
      date: "25/12/2024",
    },
    {
      id: "10233",
      name: "Nhật Trường",
      phone: "0926222354",
      status: t("context.status.needAdvice"),
      time: "15:00 - 30 min",
      initials: "NT",
      color: "purple",
      category: t("categories.scheduled"),
      date: "25/12/2024",
    },
    {
      id: "10233",
      name: "Nhật Quỳnh",
      phone: "0926222354",
      status: t("context.status.needAdvice"),
      time: "15:00 - 30 min",
      initials: "NT",
      color: "purple",
      category: t("categories.scheduled"),
      date: "25/12/2024",
    },
    {
      id: "25647",
      name: "Quốc Nga",
      phone: "0935647894",
      status: t("context.status.depositPaid"),
      time: "9h - 15/12/2024",
      initials: "QN",
      color: "violet",
      category: t("categories.waiting"),
      date: "15-12-2024",
    },
    {
      id: "25476",
      name: "Thị Bình",
      phone: "0935647894",
      status: t("context.status.depositPaid"),
      time: "10h - 17/12/2024",
      initials: "TB",
      color: "pink",
      category: t("categories.waiting"),
      date: "15-12-2024",
    },
    {
      id: "11233",
      name: "Hà Giang",
      phone: "0935647894",
      status: t("context.status.consulted"),
      time: "10/8/2024",
      initials: "GM",
      color: "lightblue",
      category: t("categories.completed"),
      date: "15-12-2024",
    },
    {
      id: "14033",
      name: "Văn Long",
      phone: "0935647894",
      status: t("context.status.consulted"),
      time: "9/10/2024",
      initials: "VL",
      color: "lightblue",
      category: t("categories.completed"),
      date: "15-12-2024",
    },
    {
      id: "14035",
      name: "Huỳnh Hùng",
      phone: "0935647894",
      status: t("context.status.consulted"),
      time: "9/10/2024",
      initials: "VL",
      color: "lightblue",
      category: t("categories.completed"),
      date: "15-12-2024",
    },
  ];

  // State hiển thị số lượng lịch hẹn
  const [visibleScheduled, setVisibleScheduled] = useState(2);
  const [visibleWaiting, setVisibleWaiting] = useState(2);
  const [visibleCompleted, setVisibleCompleted] = useState(2);

  // State lưu dữ liệu lọc
  const [filteredAppointments, setFilteredAppointments] =
    useState(appointments);

  // Xử lý khi nhấn "View More"
  const handleViewMore = (category) => {
    if (category === t("categories.scheduled")) {
      setVisibleScheduled((prev) => prev + 2);
    } else if (category === t("categories.waiting")) {
      setVisibleWaiting((prev) => prev + 2);
    } else if (category === t("categories.completed")) {
      setVisibleCompleted((prev) => prev + 2);
    }
  };

  // Xử lý tìm kiếm
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  // Lọc dữ liệu dựa trên danh mục và số lượng hiển thị
  const scheduledAppointments = filteredAppointments
    .filter(
      (item) =>
        item.category === t("categories.scheduled") &&
        (item.name.toLowerCase().includes(searchTerm) ||
          item.phone.includes(searchTerm))
    )
    .slice(0, visibleScheduled);

  const waitingAppointments = filteredAppointments
    .filter(
      (item) =>
        item.category === t("categories.waiting") &&
        (item.name.toLowerCase().includes(searchTerm) ||
          item.phone.includes(searchTerm))
    )
    .slice(0, visibleWaiting);

  const completedAppointments = filteredAppointments
    .filter(
      (item) =>
        item.category === t("categories.completed") &&
        (item.name.toLowerCase().includes(searchTerm) ||
          item.phone.includes(searchTerm))
    )
    .slice(0, visibleCompleted);

  // Lấy ngày hiện tại
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Xử lý khi nhấn "Today"
  const handleToday = () => {
    const today = currentDate; // Ngày hiện tại (định dạng DD/MM/YYYY)

    // Lọc lịch hẹn của ngày hôm nay
    const todayAppointments = appointments.filter(
      (appointment) => appointment.date === today
    );

    // Cập nhật state hiển thị lịch hẹn
    setFilteredAppointments(todayAppointments);
  };

  return (
    <div className="manage-appointments">
      <h2>{t("title")}</h2>
      <div className="filter-section">
        <div className="stats">
          <span>
            {t("stats.today")} <b>7</b>
          </span>
          <span>
            {t("stats.pending")} <b>2</b>
          </span>
          <span>
            {t("stats.processing")} <b>1</b>
          </span>
          <span>
            {t("stats.completed")} <b>5</b>
          </span>
        </div>
        <div className="search-filter">
          <div className="search-input-wrapper">
            <FaSearch className="icon" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button className="filters-btn">
            <FaFilter className="icon" />
            {t("filterButton")}
          </button>
          <div className="button-group">
            <button className="today-btn" onClick={handleToday}>
              {t("todayButton")}
            </button>
            <button className="list-btn">{t("listButton")}</button>
          </div>
        </div>
      </div>
      <h3 className="date-title">{currentDate}</h3>
      <AppointmentTable
        scheduledAppointments={scheduledAppointments}
        waitingAppointments={waitingAppointments}
        completedAppointments={completedAppointments}
        handleViewMore={handleViewMore} // Truyền hàm View More
      />
    </div>
  );
};

export default ManageAppointments;
