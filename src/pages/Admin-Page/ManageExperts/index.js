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
      </div>




      {/* Action Section */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder={t("actions.searchPlaceholder")}
          className="flex-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 flex items-center gap-2">
          <FaTrashAlt /> {t("actions.delete")}
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
          <FaFileExport /> {t("actions.export")}
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 flex items-center gap-2">
          <FaFilter /> {t("actions.filter")}
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
                {expert.experience} {t("yearexp.experience")}
              </td>
              <td>{expert.reputation}</td>
              <td className="flex space-x-4">
                <button className="flex items-center px-4 py-2 manage-experts-edit-btn">
                  <FaEdit /> {t("actions.examine")}
                </button>
                <button className="flex items-center px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
                  <FaTrashAlt className="mr-2" />
                  {t("actions.delete")}
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
