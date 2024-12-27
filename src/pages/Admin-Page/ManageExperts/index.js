import React, { useState } from "react";
import "./ManageExperts.css";
import ChartBarExperts from "./RechartExperts";
import {
  FaPlus,
  FaTrashAlt,
  FaFilter,
  FaFileExport,
  FaEdit,
  FaChartLine,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ManageExperts = () => {
  const { t } = useTranslation("manageExperts");

  const experts = [
    {
      name: "Lê Văn A",
      email: "A@gmail.com",
      city: "Đà Nẵng",
      status: t("statuses.active"),
      experience: "5",
      reputation: "85%",
    },
    {
      name: "Tạ Văn B",
      email: "B@gmail.com",
      city: "Hà Nội",
      status: t("statuses.inactive"),
      experience: "5",
      reputation: "95%",
    },
    {
      name: "Lê Hùng",
      email: "Hung@gmail.com",
      city: "Huế",
      status: t("statuses.active"),
      experience: "2",
      reputation: "99%",
    },
    {
      name: "Trần Đô",
      email: "Do12@gmail.com",
      city: "Kontum",
      status: t("statuses.active"),
      experience: "4",
      reputation: "97%",
    },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // Lưu từ khóa tìm kiếm
  const [filteredData, setFilteredData] = useState(experts); // Lưu dữ liệu được lọc
  // State quản lý biểu đồ
  const [selectedCard, setSelectedCard] = useState(null); // Quản lý card được chọn
  const [isChartVisible, setChartVisible] = useState(false); // Trạng thái hiển thị biểu đồ

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Lọc dữ liệu dựa trên tên, thành phố hoặc kinh nghiệm
    const filtered = experts.filter(
      (item) =>
        item.city.toLowerCase().includes(value) ||
        item.name.toLowerCase().includes(value) ||
        item.experience.toLowerCase().includes(value)
    );

    setFilteredData(filtered || []); // Cập nhật dữ liệu đã lọc
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
    <div className="manage-experts-container">
      <h1>{t("title")}</h1>
      {/* Header */}
      <div className="manage-experts-header">
        <h2>{t("header")}</h2>
        <button className="manage-experts-add-user-btn">
          <FaPlus /> {t("actions.addUser")}
        </button>
      </div>

      {/* Summary Cards */}
      <div className="manage-experts-summary-cards">
        {[
          {
            id: "totalUsers",
            title: t("summary.totalUsers"),
            value: 45,
            percent: "5.0%",
            isDecrease: false, // Tăng
          },
          {
            id: "active",
            title: t("summary.active"),
            value: 15,
            percent: "5.0%",
            isDecrease: false, // Tăng
          },
          {
            id: "newUsers",
            title: t("summary.newUser"),
            value: 20,
            percent: "15.0%",
            isDecrease: false, // Tăng
          },
          {
            id: "inactive",
            title: t("summary.inactive"),
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
              {card.value} <span>{t("summary.users")}</span>
            </h3>
            <small
              className={`growth-indicator ${
                card.isDecrease ? "decrease-indicator" : ""
              }`}
            >
              <FaChartLine
                className={`chart-icon ${
                  card.isDecrease ? "chart-icon decrease" : ""
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
          <ChartBarExperts
            onClose={handleCloseChart}
            selectedCard={selectedCard}
          />
        </div>
      )}

      {/* Actions */}
      <div className="manage-experts-actions">
        <input
          type="text"
          placeholder={t("actions.searchPlaceholder")}
          className="manage-experts-search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="manage-experts-delete-btn">
          <FaTrashAlt className="btn-experts-icon" /> {t("actions.delete")}
        </button>
        <button className="manage-experts-export-btn">
          <FaFileExport className="btn-experts-icon" /> {t("actions.export")}
        </button>
        <button className="manage-experts-filter-btn">
          <FaFilter className="btn-experts-icon" /> {t("actions.filter")}
        </button>
      </div>

      {/* Experts Table */}
      <table className="manage-experts-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>{t("tableHeaders.name")}</th>
            <th>{t("tableHeaders.email")}</th>
            <th>{t("tableHeaders.city")}</th>
            <th>{t("tableHeaders.status")}</th>
            <th>{t("tableHeaders.experience")}</th>
            <th>{t("tableHeaders.reputation")}</th>
            <th>{t("tableHeaders.actions")}</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((expert, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{expert.name}</td>
              <td>{expert.email}</td>
              <td>{expert.city}</td>
              <td>
                <span
                  className={
                    expert.status === t("statuses.active")
                      ? "manage-experts-status-active"
                      : "manage-experts-status-inactive"
                  }
                >
                  ●
                </span>
                {expert.status}
              </td>
              <td>
                {expert.experience} {t("yearexp.experience")}
              </td>
              <td>{expert.reputation}</td>
              <td>
                <button className="manage-experts-edit-btn">
                  <FaEdit /> {t("actions.edit")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageExperts;
