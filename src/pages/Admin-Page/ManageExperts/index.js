import React, { useState } from "react";
import { FaTrashAlt, FaFilter, FaFileExport, FaEdit } from "react-icons/fa";
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

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(experts);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = experts.filter(
      (item) =>
        item.city.toLowerCase().includes(value) ||
        item.name.toLowerCase().includes(value) ||
        item.experience.toLowerCase().includes(value)
    );

    setFilteredData(filtered || []);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-900">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">{t("title")}</h1>

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
              <th className="px-4 py-2 border-b">
                {t("tableHeaders.experience")}
              </th>
              <th className="px-4 py-2 border-b">
                {t("tableHeaders.reputation")}
              </th>
              <th className="px-4 py-2 border-b">
                {t("tableHeaders.actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((expert, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">{expert.name}</td>
                <td className="px-4 py-2 border-b">{expert.email}</td>
                <td className="px-4 py-2 border-b">{expert.city}</td>
                <td className="px-4 py-2 border-b">
                  {expert.experience} {t("yearexp.experience")}
                </td>
                <td className="px-4 py-2 border-b">{expert.reputation}</td>
                <td className="px-4 py-2 border-b flex gap-2">
                  <button className="flex items-center px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                    <FaEdit className="mr-2" />
                    {t("actions.examine")}
                  </button>
                  <button className="flex items-center px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                    <FaTrashAlt className="mr-2" />
                    {t("actions.delete")}
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

export default ManageExperts;
