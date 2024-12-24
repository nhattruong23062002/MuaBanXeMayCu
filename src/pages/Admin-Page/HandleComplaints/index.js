import React, { useState } from "react";
import {
  FaTrashAlt,
  FaFilter,
  FaLink,
  FaCheck,
  FaTimes,
  FaFileAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HandleComplaints = () => {
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
    <div className="handle-complaints-container">
      <h2>{t("title")}</h2>
      {/* Summary Cards */}
      <div className="summary-cards-handle">
        <div className="cards processing">
          <FaFileAlt className="File-icon" />
          <p className="text-process">{t("status.processing")}</p>
          <h3>45</h3>
        </div>
        <div className="cards success">
          <FaFileAlt className="File-icon-success" />
          <p className="text-process">{t("status.success")}</p>
          <h3>15</h3>
        </div>
        <div className="cards rejected">
          <FaFileAlt className="File-icon-reject" />
          <p className="text-process">{t("status.rejected")}</p>
          <h3>15</h3>
        </div>
      </div>

      {/* Action Section */}
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder={t("searchPlaceholder")}
          className="search-input-handle"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="delete-btn-handle">
          <FaTrashAlt /> {t("actions.delete")}
        </button>
        <button className="export-btn-handle">{t("actions.export")}</button>
        <button className="filter-btn-handle">
          <FaFilter /> {t("actions.filter")}
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2 text-left">
              <input type="checkbox" />
            </th>
            <th>{t("tableHeaders.name")}</th>
            <th>{t("tableHeaders.email")}</th>
            <th>{t("tableHeaders.time")}</th>
            <th>{t("tableHeaders.reason")}</th>
            <th>{t("tableHeaders.role")}</th>
            <th>{t("tableHeaders.link")}</th>
            <th>{t("tableHeaders.actions")}</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((complaint, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-200 p-2">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-200 p-2">{complaint.name}</td>
              <td className="border border-gray-200 p-2">{complaint.email}</td>
              <td className="border border-gray-200 p-2">{complaint.time}</td>
              <td className="border border-gray-200 p-2">{complaint.reason}</td>
              <td className="border border-gray-200 p-2">{complaint.role}</td>
              <td className="border border-gray-200 p-2">
                <a
                  href={complaint.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <FaLink className="inline mr-1" /> {complaint.link}
                </a>
              </td>
              <td className="action-buttons-handle">
                <button className="approve-btn-handle">
                  <FaCheck className="approve-icon" /> {t("actions.approve")}
                </button>
                <button className="reject-btn-handle">
                  <FaTimes className="reject-icon" /> {t("actions.reject")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HandleComplaints;