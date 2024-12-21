import React, { useState } from "react";
import "./ManageUsers.css";
import {
  FaTrashAlt,
  FaFilter,
  FaFileExport,
  FaChartLine,
} from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const ManageUsers = () => {
  const { t } = useTranslation("manageUsers"); // Hook để sử dụng bản dịch

  // Dữ liệu mẫu
  const users = [
    {
      name: "Lê Văn A",
      email: "A@gmail.com",
      city: t("cities.daNang"),
      status: t("status.active"),
      posts: 15,
      transactions: 5,
    },
    {
      name: "Tạ Văn B",
      email: "B@gmail.com",
      city: t("cities.haNoi"),
      status: t("status.inactive"),
      posts: 5,
      transactions: 2,
    },
    {
      name: "Lê Hùng",
      email: "Hung@gmail.com",
      city: t("cities.hue"),
      status: t("status.active"),
      posts: 0,
      transactions: 0,
    },
    {
      name: "Trần Đô",
      email: "Do12@gmail.com",
      city: t("cities.kontum"),
      status: t("status.active"),
      posts: 4,
      transactions: 2,
    },
  ];
  const [searchTerm, setSearchTerm] = useState(""); // Lưu từ khóa tìm kiếm
  const [filteredData, setFilteredData] = useState(users); // Lưu dữ liệu được lọc

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = users.filter(
      (item) =>
        item.city.toLowerCase().includes(value) || // Lọc theo thành phố
        item.name.toLowerCase().includes(value) // Lọc theo tên
    );

    setFilteredData(filtered || []); // Cập nhật dữ liệu đã lọc
  };

  return (
    <div className="manage-users-container">
      <h1>{t("title")}</h1>
      {/* Header */}
      <div className="header">
        <h2>{t("title")}</h2>
        <button className="add-user-btn">
          <IoPersonAddOutline /> {t("actions.addUser")}
        </button>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <p>{t("summaryCards.totalUsers")}</p>
          <h3>
            45 <span>{t("units.users")}</span>
          </h3>
          <small className="growth-indicator">
            <FaChartLine className="chart-icon" />
            5.0%
          </small>
        </div>
        <div className="card">
          <p>{t("summaryCards.active")}</p>
          <h3>
            15 <span>{t("units.users")}</span>
          </h3>
          <small className="growth-indicator">
            <FaChartLine className="chart-icon" />
            5.0%
          </small>
        </div>
        <div className="card">
          <p>{t("summaryCards.newUsers")}</p>
          <h3>
            20 <span>{t("units.users")}</span>
          </h3>
          <small className="growth-indicator">
            <FaChartLine className="chart-icon" />
            15.0%
          </small>
        </div>
        <div className="card">
          <p>{t("summaryCards.inactive")}</p>
          <h3>
            5 <span>{t("units.users")}</span>
          </h3>
          <small className="decrease-indicator">
            <FaChartLine className="chart-icon decrease" />
            15%
          </small>
        </div>
      </div>

      {/* Filter and Actions */}
      <div className="actions-users">
        <input
          type="text"
          placeholder={t("actions.searchPlaceholder")}
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="delete-btn-users">
          <FaTrashAlt /> {t("actions.delete")}
        </button>
        <button className="export-btn-users">
          <FaFileExport /> {t("actions.export")}
        </button>
        <button className="filter-btn-users">
          <FaFilter /> {t("actions.filter")}
        </button>
      </div>

      {/* Users Table */}
      <table className="users-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>{t("tableHeaders.name")}</th>
            <th>{t("tableHeaders.email")}</th>
            <th>{t("tableHeaders.city")}</th>
            <th>{t("tableHeaders.status")}</th>
            <th>{t("tableHeaders.posts")}</th>
            <th>{t("tableHeaders.transactions")}</th>
            <th>{t("tableHeaders.actions")}</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>
                {user.status === t("status.active") ? (
                  <span className="status-active">●</span>
                ) : (
                  <span className="status-inactive">●</span>
                )}
                {user.status}
              </td>
              <td>
                {user.posts} {t("units.posts")}
              </td>
              <td>
                {user.transactions} {t("units.transactions")}
              </td>
              <td>
                <button className="edit-btn-users">
                  <FaPenToSquare className="edit-icon-users" />{" "}
                  {t("actions.edit")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
