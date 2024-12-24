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
    },
    {
      id: "11233",
      name: "Giang Mai",
      phone: "0935647894",
      status: t("context.status.consulted"),
      time: "10/8/2024",
      initials: "GM",
      color: "lightblue",
      category: t("categories.completed"),
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
    },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // Lưu từ khóa tìm kiếm
  const [filteredData, setFilteredData] = useState(appointments); // Lưu dữ liệu được lọc

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Lọc dữ liệu dựa trên ID, tên, hoặc số điện thoại
    const filtered = appointments.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.id.toLowerCase().includes(value) ||
        item.phone.includes(value)
    );

    setFilteredData(filtered || []);
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
            <button className="today-btn">{t("todayButton")}</button>
            <button className="list-btn">{t("listButton")}</button>
          </div>
        </div>
      </div>
      <h3 className="date-title">{t("dateTitle")}</h3>
      <AppointmentTable appointments={filteredData} />
    </div>
  );
};

export default ManageAppointments;
