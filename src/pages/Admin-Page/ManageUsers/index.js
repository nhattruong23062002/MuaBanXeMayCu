import React, { useState } from "react";
import ChartBar from "./Recharts"; // Import component biểu đồ
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
  const { t } = useTranslation("manageUsers");

  // Dữ liệu mẫu
  const users = [
    {
      name: "Lê Văn A",
      email: "A@gmail.com",
      city: t("cities.daNang"),
      status: t("status.active"),
      posts: 15,
      transactions: 5,
      role: "Người dùng"
    },
    {
      name: "Tạ Văn B",
      email: "B@gmail.com",
      city: t("cities.haNoi"),
      status: t("status.inactive"),
      posts: 5,
      transactions: 2,
      role: "Người dùng"
    },
    {
      name: "Lê Hùng",
      email: "Hung@gmail.com",
      city: t("cities.hue"),
      status: t("status.active"),
      posts: 0,
      transactions: 0,
      role: "Chuyên gia"
    },
    {
      name: "Trần Đô",
      email: "Do12@gmail.com",
      city: t("cities.kontum"),
      status: t("status.active"),
      posts: 4,
      transactions: 2,
      role: "Người dùng"
    },
    {
      name: "Văn Nga",
      email: "Nga12@gmail.com",
      city: t("cities.daNang"),
      status: t("status.active"),
      posts: 0,
      transactions: 0,
      role: "Chuyên gia"
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(users);

  // State quản lý biểu đồ
  const [selectedCard, setSelectedCard] = useState(null); // Quản lý card được chọn
  const [isChartVisible, setChartVisible] = useState(false); // Trạng thái hiển thị biểu đồ

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = users.filter(
      (item) =>
        item.city.toLowerCase().includes(value) || // Lọc theo thành phố
        item.name.toLowerCase().includes(value) // Lọc theo tên
    );

    setFilteredData(filtered || []);
  };

  // Xử lý khi bấm vào card
  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    setChartVisible(true); // Hiển thị biểu đồ
  };

  // Xử lý khi đóng biểu đồ
  const handleCloseChart = () => {
    setChartVisible(false); // Ẩn biểu đồ
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
        {[
          {
            id: "totalUsers",
            title: t("summaryCards.totalUsers"),
            value: 45,
            percent: "5.0%",
            isDecrease: false, // Tăng
          },
          {
            id: "active",
            title: t("summaryCards.active"),
            value: 15,
            percent: "5.0%",
            isDecrease: false, // Tăng
          },
          {
            id: "newUsers",
            title: t("summaryCards.newUsers"),
            value: 20,
            percent: "15.0%",
            isDecrease: false, // Tăng
          },
          {
            id: "inactive",
            title: t("summaryCards.inactive"),
            value: 5,
            percent: "-15.0%",
            isDecrease: true, // Giảm
          },
        ].map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={() => handleCardClick(card.id)} // Đảm bảo ID được truyền đúng
          >
            <p>{card.title}</p>
            <h3>
              {card.value} <span>{t("units.users")}</span>
            </h3>
            <small
              className={`growth-indicator ${card.isDecrease ? "decrease-indicator" : ""
                }`}
            >
              <FaChartLine
                className={`chart-icon ${card.isDecrease ? "chart-icon decrease" : ""
                  }`}
              />
              {card.percent}
            </small>
          </div>
        ))}
      </div>
      {/* Biểu đồ */}
      {isChartVisible && (
        <div className="chart-modal">
          <ChartBar onClose={handleCloseChart} selectedCard={selectedCard} />
        </div>
      )}
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
            <th>{t("role.title")}</th>
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
                {t(`${user.role}`)}
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
