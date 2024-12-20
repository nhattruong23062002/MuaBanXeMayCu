import React, { useState } from "react";
import AppointmentTable from "./AppointmentTable";
import "./ManageAppointments.css";
import { FaSearch, FaFilter } from "react-icons/fa";

const ManageAppointments = () => {
  // Dữ liệu mẫu
  const appointments = [
    {
      id: "10033",
      name: "Anh Kiều",
      phone: "0935647894",
      status: "cần tư vấn mua xe",
      time: "13:00 - 30 min",
      initials: "AK",
      color: "pink",
      category: "Khách hẹn",
    },
    {
      id: "10233",
      name: "Nhật Trường",
      phone: "0926222354",
      status: "cần tư vấn mua xe",
      time: "15:00 - 30 min",
      initials: "NT",
      color: "purple",
      category: "Khách hẹn",
    },
    {
      id: "25647",
      name: "Quốc Nga",
      phone: "0935647894",
      status: "Đã cọc tiền",
      time: "9h - 15/12/2024",
      initials: "QN",
      color: "violet",
      category: "Khách đang chờ",
    },
    {
      id: "25476",
      name: "Thị Bình",
      phone: "0935647894",
      status: "Đã cọc tiền",
      time: "10h - 17/12/2024",
      initials: "TB",
      color: "pink",
      category: "Khách đang chờ",
    },
    {
      id: "11233",
      name: "Giang Mai",
      phone: "0935647894",
      status: "Đã tư vấn",
      time: "10/8/2024",
      initials: "GM",
      color: "lightblue",
      category: "Khách hoàn thành",
    },
    {
      id: "14033",
      name: "Văn Long",
      phone: "0935647894",
      status: "Đã tư vấn",
      time: "9/10/2024",
      initials: "VL",
      color: "lightblue",
      category: "Khách hoàn thành",
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
              placeholder="Tìm kiếm lịch hẹn"
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
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

      {/* Truyền dữ liệu đã lọc xuống AppointmentTable */}
      <AppointmentTable appointments={filteredData} />
    </div>
  );
};

export default ManageAppointments;
