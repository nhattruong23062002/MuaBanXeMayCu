import React from "react";
import { FaMotorcycle, FaHome } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("navbar");

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#0e0f2b] text-white py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div
          className="text-[#d59648] text-4xl sm:text-4xl md:text-5xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FaMotorcycle />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8">
          {[
            { icon: <FaHome />, label: t("home"), path: "/" },
            { icon: <FaUserDoctor />, label: t("expert"), path: "/listexp" },
            { icon: <MdAddBox />, label: t("post"), path: "/upload" },
            {
              icon: <IoStorefrontSharp />,
              label: t("store"),
              path: "/listStore",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-20 h-16 cursor-pointer ${
                isActive(item.path) ? "text-[#d59648]" : "text-gray-100"
              }`}
              onClick={() => navigate(item.path)}
            >
              <span
                className={`text-xl group-hover:text-[#d59648] ${
                  isActive(item.path) && "text-[#d59648]"
                }`}
              >
                {item.icon}
              </span>
              <span className="mt-1 text-xs">{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Search and Logout */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder={t("search")}
            className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
          />
          <img
            src="https://kenh14cdn.com/203336854389633024/2024/12/10/img6508jpg-1591784578-15917845-6209-7466-15917848032-1733854484177-17338544927331380039156.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <button
            onClick={() => navigate("/login")}
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
