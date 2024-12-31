import React, { useState } from "react";
import {
  FaTrashAlt,
  FaFilter,
  FaLink,
  FaCheck,
  FaTimes,
  FaFileAlt,
  FaFileExport,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HandleComplaints = () => {
  const { t } = useTranslation("handleComplaints");

  const complaints = [
    {
      name: "Lê Văn A",
      email: "A@gmail.com",
      time: "14/7/2024",
      reason: t("reasons.defer"),
      role: t("roles.user"),
      link: "https://user.com/",
    },
    {
      name: "Tạ Văn B",
      email: "B@gmail.com",
      time: "14/12/2024",
      reason: t("reasons.refund"),
      role: t("roles.user"),
      link: "https://user.com/",
    },
    {
      name: "Lê Hùng",
      email: "Hung@gmail.com",
      time: "14/9/2024",
      reason: t("reasons.refund"),
      role: t("roles.user"),
      link: "https://user.com/",
    },
    {
      name: "Trần Đô",
      email: "Do12@gmail.com",
      time: "14/1/2024",
      reason: t("reasons.defer"),
      role: t("roles.user"),
      link: "https://user.com/",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(complaints);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = complaints.filter(
      (item) =>
        item.time.toLowerCase().includes(value) ||
        item.name.toLowerCase().includes(value)
    );

    setFilteredData(filtered || []);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen mx-auto rounded-lg dark:bg-gray-900 text-gray-900 dark:text-gray-900">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{t("title")}</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <FaFileAlt className="text-blue-500 text-3xl mb-2" />
          <p className="text-blue-600 font-bold text-center">
            {t("status.processing")}
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold">45</h3>
        </div>
        <div className="p-4 bg-green-50 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <FaFileAlt className="text-green-500 text-3xl mb-2" />
          <p className="text-green-600 font-bold text-center">
            {t("status.success")}
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold">15</h3>
        </div>
        <div className="p-4 bg-red-50 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <FaFileAlt className="text-red-500 text-3xl mb-2" />
          <p className="text-red-600 font-bold text-center">
            {t("status.rejected")}
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold">15</h3>
        </div>
      </div>

      {/* Action Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder={t("searchPlaceholder")}
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

      {/* Complaints Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="table-auto w-full text-left">
          <thead className="bg-gray-100">
            <tr className="text-sm font-semibold text-gray-600">
              <th className="px-4 py-2 border-b">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.name")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.email")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.time")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.reason")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.role")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.link")}</th>
              <th className="px-4 py-2 border-b">
                {t("tableHeaders.actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((complaint, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 text-gray-700 text-sm even:bg-gray-50"
              >
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">{complaint.name}</td>
                <td className="px-4 py-2 border-b">{complaint.email}</td>
                <td className="px-4 py-2 border-b">{complaint.time}</td>
                <td className="px-4 py-2 border-b">{complaint.reason}</td>
                <td className="px-4 py-2 border-b">{complaint.role}</td>
                <td className="px-4 py-2 border-b">
                  <a
                    href={complaint.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline flex items-center gap-1"
                  >
                    <FaLink className="text-blue-500" /> {t("actions.view")}
                  </a>
                </td>
                <td className="px-4 py-2 border-b flex items-center gap-2">
                  <button className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-700 flex items-center gap-1">
                    <FaCheck className="text-white" /> {t("actions.approve")}
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-700 flex items-center gap-1">
                    <FaTimes className="text-white" /> {t("actions.reject")}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HandleComplaints;
