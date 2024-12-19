import React from "react";
import AppointmentTable from "./AppointmentTable";
import "./ManageAppointments.css";
import { FaSearch, FaFilter } from "react-icons/fa";

const ManageAppointments = () => {
  return (
    <div className="manage-appointments">
      <h2>Quản lý lịch hẹn kiểm tra xe</h2>

      {/* Main Content */}
      <div className="filter-section">
        {/* Phần thống kê */}
        <div className="stats">
          <span>
            Hôm nay <b>7</b>
          </span>
          <span>
            Đang chờ <b>2</b>
          </span>
          <span>
            Đang xử lý <b>1</b>
          </span>
          <span>
            Hoàn thành <b>5</b>
          </span>
        </div>

        {/* Phần tìm kiếm và bộ lọc */}
        <div className="search-filter">
          <div className="search-input-wrapper">
            <FaSearch className="icon" />
            <input
              type="text"
              placeholder="tìm kiếm lịch hẹn"
              className="search-input"
            />
          </div>
          <button className="filters-btn">
            <FaFilter className="icon" />
            Hiển thị bộ lọc
          </button>
          <div className="button-group">
            <button className="today-btn">today</button>
            <button className="list-btn">List</button>
          </div>
        </div>
      </div>

      <h3 className="date-title">December 13.2024</h3>
      <AppointmentTable />
    </div>
  );
};

export default ManageAppointments;
