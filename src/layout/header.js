import React from "react";
import {
  FaMotorcycle,
  FaSearch,
  FaRegUserCircle,
  FaHome,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("header"); 

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#0e0f2b] text-white py-2">
      <div className="max-w-[800px] mx-auto flex justify-between items-center pl-5 pr-10">
        <div className="flex items-center space-x-2">
          <span
            className="text-[#d59648] text-4xl sm:text-4xl md:text-5xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            <FaMotorcycle />
          </span>
        </div>

        <nav className="flex justify-center space-x-2 sm:space-x-4 md:space-x-2 text-xs sm:text-sm md:text-base font-medium w-full">
          <div
            className={`flex flex-col items-center group cursor-pointer w-[80px] sm:w-[120px] md:w-[120px] ${
              isActive("/") ? "text-[#d59648]" : ""
            }`}
            onClick={() => navigate("/")}
          >
            <FaHome
              className={`text-lg sm:text-xl ${
                isActive("/")
                  ? "text-[#d59648]"
                  : "text-gray-100 group-hover:text-[#d59648]"
              }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">{t("home")}</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer w-[90px] sm:w-[120px] md:w-[120px] ${
              isActive("/listexp") ? "text-[#d59648]" : ""
            }`}
            onClick={() => navigate("/listexp")}
          >
            <FaUserDoctor
              className={`text-lg sm:text-xl ${
                isActive("/listexp")
                  ? "text-[#d59648]"
                  : "text-gray-100 group-hover:text-[#d59648]"
              }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">
              {t("experts")}
            </span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer w-[80px] sm:w-[120px] md:w-[120px] ${
              isActive("/upload") ? "text-[#d59648]" : ""
            }`}
            onClick={() => navigate("/upload")}
          >
            <MdAddBox
              className={`text-lg sm:text-xl ${
                isActive("/upload")
                  ? "text-[#d59648]"
                  : "text-gray-100 group-hover:text-[#d59648]"
              }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">{t("post_ad")}</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer w-[80px] sm:w-[120px] md:w-[120px] ${
              isActive("/listStore") ? "text-[#d59648]" : ""
            }`}
            onClick={() => navigate("/listStore")}
          >
            <IoStorefrontSharp
              className={`text-lg sm:text-xl ${
                isActive("/listStore")
                  ? "text-[#d59648]"
                  : "text-gray-100 group-hover:text-[#d59648]"
              }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">{t("stores")}</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer w-[80px] sm:w-[120px] md:w-[120px] ${
              isActive("/account") ? "text-[#d59648]" : ""
            }`}
            onClick={() => navigate("/account")}
          >
            <FaRegUserCircle
              className={`text-lg sm:text-xl ${
                isActive("/account")
                  ? "text-[#d59648]"
                  : "text-gray-100 group-hover:text-[#d59648]"
              }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">{t("account")}</span>
          </div>
        </nav>
        <div className="flex items-center space-x-8"></div>
      </div>
    </div>
  );
}

export default Header;
