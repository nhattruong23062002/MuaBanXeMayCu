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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo và Tiêu đề */}
        <div className="flex items-center space-x-4">
          <div
            className="text-[#d59648] text-4xl sm:text-4xl md:text-5xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            <FaMotorcycle />
          </div>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {t("adminPageTitle")}
          </h1>
        </div>

        {/* Avatar và Nút Logout */}
        <div className="flex items-center space-x-4">
          <img
            src="https://kenh14cdn.com/203336854389633024/2024/12/10/img6508jpg-1591784578-15917845-6209-7466-15917848032-1733854484177-17338544927331380039156.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <button
            onClick={handleLogout}
            className="bg-[#ff7f00] hover:bg-[#e67e00] text-white px-4 py-2 rounded"
          >
            {t("logout")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
