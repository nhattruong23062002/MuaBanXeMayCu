import React from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import hook

const Sidebar = () => {
  const { t } = useTranslation("sidebar"); // Sử dụng namespace "sidebar"

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen shadow-lg">
      <h2 className="flex items-center gap-2 px-6 py-4 text-lg font-bold bg-gray-700">
        <FaAlignJustify size={20} />
        {t("title")}
      </h2>
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
  );
};

export default Sidebar;
