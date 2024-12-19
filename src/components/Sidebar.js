// src/pages/Admin-Page/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom"; // Để sử dụng Link cho điều hướng
import "./../styles/Sidebar.css"; // File CSS của Sidebar
import { FaAlignJustify } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">
        <FaAlignJustify size={20} />
        Quản lý của admin
      </h2>
      <ul className="sidebar-links">
        <li>
          <Link to="/admin/manage-cars">Quản lý xe</Link>
        </li>
        <li>
          <Link to="/admin/manage-appointments">Quản lý lịch hẹn</Link>
        </li>
        <li>
          <Link to="/admin/create-appointment">Tạo lịch hẹn</Link>
        </li>
        <li>
          <Link to="/admin/manage-posts">Quản lý bài đăng</Link>
        </li>
        <li>
          <Link to="/admin/manage-users">Quản lý người dùng</Link>
        </li>
        <li>
          <Link to="/admin/handle-complaints">Xử lý khiếu nại</Link>
        </li>
        <li>
          <Link to="/admin/manage-experts">Quản lý chuyên gia</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
