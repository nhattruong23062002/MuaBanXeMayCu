import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import hook

const Sidebar = () => {
  const { t } = useTranslation("sidebar"); // Sử dụng namespace "sidebar"
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State quản lý sidebar

  return (
    <>
      {/* Nút mở Sidebar */}
      <button
        className="fixed top-4 left-4 text-white bg-gray-800 p-2 rounded-md z-50 lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FaAlignJustify size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 w-64 z-40`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-700">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <FaAlignJustify size={20} />
            {t("title")}
          </h2>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Links */}
        <ul className="space-y-2 mt-4">
          <li>
            <Link
              to="/admin/manage-appointments"
              className="block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {t("manageAppointments")}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/create-appointment"
              className="block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {t("createAppointment")}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/manage-posts"
              className="block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {t("managePosts")}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/manage-users"
              className="block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {t("manageUsers")}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/handle-complaints"
              className="block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {t("handleComplaints")}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/manage-experts"
              className="block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {t("manageExperts")}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
