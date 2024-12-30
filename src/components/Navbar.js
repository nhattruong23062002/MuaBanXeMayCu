import React, { useState } from "react";
import {
  FaCog,
  FaUser,
  FaSignOutAlt,
  FaBell,
  FaMotorcycle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeSelector from "./ThemeSelector";

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation("navbar");

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const [notifications, setNotifications] = useState(5); // Số lượng thông báo

  return (
    <div className="bg-[#0e0f2b] text-white py-3">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <div
            className="flex justify-center items-center ml-12 min-h-[50px] min-w-[50px] text-[#d59648] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            <FaMotorcycle />
          </div>
        </div>

        {/* Tiêu đề nằm giữa */}
        <div className="flex items-center justify-center">
          <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-center">
            {t("adminPageTitle")}
          </h1>
        </div>
        {/* Icons and Dropdown */}
        <div className="flex items-center space-x-4 mr-4 justify-end ">
          {/* Notification Icon with Badge */}
          <div className="relative">
            <FaBell className="text-gray-600 text-lg cursor-pointer hover:text-gray-300" />
            {notifications > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {notifications}
              </span>
            )}
          </div>
          <div className="flex justify-end items-center space-x-4">
            <ThemeSelector /> {/* Thêm ThemeSelector */}
          </div>

          {/* Avatar and Dropdown */}
          <div className="relative">
            <img
              src="https://kenh14cdn.com/203336854389633024/2024/12/10/img6508jpg-1591784578-15917845-6209-7466-15917848032-1733854484177-17338544927331380039156.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full cursor-pointer object-cover"
              onClick={toggleDropdown}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg z-50">
                {/* User Info */}
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-medium text-gray-800">Leeminhoo</p>
                  <p className="text-xs text-gray-500">minhoo@gmail.com</p>
                </div>
                {/* Menu Items */}
                <ul className="py-1">
                  <li>
                    <button
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => navigate("/admin/setting")}
                    >
                      <FaCog className="mr-2" /> {t("setting")}
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => navigate("/admin/profile")}
                    >
                      <FaUser className="mr-2" /> {t("profile")}
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt className="mr-2" /> {t("logout")}
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
