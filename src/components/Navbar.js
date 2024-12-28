import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("navbar");

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  return (
    <div className="bg-[#0e0f2b] text-white py-3">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <div
            className="text-[#d59648] text-xl sm:text-2xl md:text-3xl lg:text-4xl cursor-pointer p-2 sm:p-3 md:p-4"
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

        {/* Avatar và Nút Logout */}
        <div className="flex items-center justify-end space-x-2 sm:space-x-4">
          <img
            src="https://kenh14cdn.com/203336854389633024/2024/12/10/img6508jpg-1591784578-15917845-6209-7466-15917848032-1733854484177-17338544927331380039156.jpg"
            alt="User"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full"
          />
          <button
            onClick={handleLogout}
            className="bg-[#ff7f00] hover:bg-[#e67e00] text-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded text-xs sm:text-sm md:text-base"
          >
            {t("logout")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
