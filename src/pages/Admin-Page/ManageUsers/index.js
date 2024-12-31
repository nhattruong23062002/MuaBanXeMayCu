import React, { useState } from "react";
import ChartBar from "./Recharts"; // Import component biểu đồ
import {
  FaTrashAlt,
  FaFilter,
  FaFileExport,
  FaChartLine,
} from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import EditUser from "./EditUser";

const ManageUsers = () => {
  const { t } = useTranslation("manageUsers");

  const users = [
    {
      name: "Lê Văn A",
      email: "A@gmail.com",
      city: t("cities.daNang"),
      status: t("status.active"),
      posts: 15,
      transactions: 5,
      role: t("roles.user"),
    },
    {
      name: "Tạ Văn B",
      email: "B@gmail.com",
      city: t("cities.haNoi"),
      status: t("status.inactive"),
      posts: 5,
      transactions: 2,
      role: t("roles.user"),
    },
    {
      name: "Lê Hùng",
      email: "Hung@gmail.com",
      city: t("cities.hue"),
      status: t("status.active"),
      posts: 0,
      transactions: 0,
      role: t("roles.expert"),
    },
    {
      name: "Trần Đô",
      email: "Do12@gmail.com",
      city: t("cities.kontum"),
      status: t("status.active"),
      posts: 4,
      transactions: 2,
      role: t("roles.user"),
    },
    {
      name: "Văn Nga",
      email: "Nga12@gmail.com",
      city: t("cities.daNang"),
      status: t("status.active"),
      posts: 0,
      transactions: 0,
      role: t("roles.expert"),
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(users);
  const [selectedCard, setSelectedCard] = useState(null); // Quản lý card được chọn
  const [isChartVisible, setChartVisible] = useState(false); // Quản lý trạng thái hiển thị biểu đồ

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

  // Khi click vào thẻ tổng quan
  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    setChartVisible(true); // Hiển thị biểu đồ
  };

  // Khi đóng biểu đồ
  const handleCloseChart = () => {
    setChartVisible(false);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-900">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">{t("title")}</h1>

      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          <IoPersonAddOutline className="mr-2" /> {t("actions.addUser")}
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          {
            id: "totalUsers",
            title: t("summaryCards.totalUsers"),
            value: 45,
            percent: "5.0%",
            isDecrease: false,
          },
          {
            id: "active",
            title: t("summaryCards.active"),
            value: 15,
            percent: "5.0%",
            isDecrease: false,
          },
          {
            id: "newUsers",
            title: t("summaryCards.newUsers"),
            value: 20,
            percent: "15.0%",
            isDecrease: false,
          },
          {
            id: "inactive",
            title: t("summaryCards.inactive"),
            value: 5,
            percent: "-15.0%",
            isDecrease: true,
          },
        ].map((card) => (
          <div
            key={card.id}
            className="p-4 bg-white shadow rounded-lg cursor-pointer hover:shadow-lg"
            onClick={() => handleCardClick(card.id)} // Đảm bảo ID được truyền đúng
          >
            <p className="text-gray-600">{card.title}</p>
            <h3 className="text-xl font-bold text-gray-800">
              {card.value} <span>{t("units.users")}</span>
            </h3>
            <small
              className={`block mt-1 ${
                card.isDecrease ? "text-red-500" : "text-green-500"
              }`}
            >
              <FaChartLine className="inline mr-1" />
              {card.percent}
            </small>
          </div>
        ))}
      </div>

      {/* Biểu đồ */}
      {isChartVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseChart}
            >
              ✕
            </button>
            <ChartBar selectedCard={selectedCard} onClose={handleCloseChart} />
          </div>
        </div>
      )}

      {/* Filter and Actions */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder={t("actions.searchPlaceholder")}
          className="flex-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">
          <FaTrashAlt className="mr-2" /> {t("actions.delete")}
        </button>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          <FaFileExport className="mr-2" /> {t("actions.export")}
        </button>
        <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700">
          <FaFilter className="mr-2" /> {t("actions.filter")}
        </button>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2 border-b">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.name")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.email")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.city")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.status")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.role")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.posts")}</th>
              <th className="px-4 py-2 border-b">
                {t("tableHeaders.transactions")}
              </th>
              <th className="px-4 py-2 border-b">
                {t("tableHeaders.actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">{user.name}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">{user.city}</td>
                <td className="px-4 py-2 border-b">
                  {user.status === t("status.active") ? (
                    <span className="text-green-500 font-semibold">●</span>
                  ) : (
                    <span className="text-red-500 font-semibold">●</span>
                  )}
                  {user.status}
                </td>
                <td className="px-4 py-2 border-b">{t(`${user.role}`)}</td>
                <td className="px-4 py-2 border-b">
                  {user.posts} {t("units.posts")}
                </td>
                <td className="px-4 py-2 border-b">
                  {user.transactions} {t("units.transactions")}
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={openPopup}
                    className="flex items-center px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    <FaPenToSquare className="mr-2" /> {t("actions.edit")}
                  </button>

                  {/* Popup */}
                  {isPopupOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-4 sm:mx-6 lg:mx-8 overflow-y-auto max-h-screen">
                        <button
                          onClick={closePopup}
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                          ✖
                        </button>
                        <EditUser />
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
