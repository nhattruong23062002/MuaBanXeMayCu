import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Sidebar.css";
import { FaAlignJustify } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import hook

const Sidebar = () => {
  const { t } = useTranslation("sidebar"); // Sử dụng namespace "sidebar"

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">
        <FaAlignJustify size={20} />
        {t("title")} {/* Chỉ cần gọi "title", không cần "sidebar.title" */}
      </h2>
      <ul className="sidebar-links">
        <li>
          <Link to="/admin/manage-appointments">{t("manageAppointments")}</Link>
        </li>
        <li>
          <Link to="/admin/create-appointment">{t("createAppointment")}</Link>
        </li>
        <li>
          <Link to="/admin/manage-posts">{t("managePosts")}</Link>
        </li>
        <li>
          <Link to="/admin/manage-users">{t("manageUsers")}</Link>
        </li>
        <li>
          <Link to="/admin/handle-complaints">{t("handleComplaints")}</Link>
        </li>
        <li>
          <Link to="/admin/manage-experts">{t("manageExperts")}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
