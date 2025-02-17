import React, { useState } from "react";
import {
  FaRegUserCircle,
  FaHome,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { PiCarFill } from "react-icons/pi";
import { MdAddBox } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation("header");
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const languages = [
    { code: "vi", name: "Tiếng Việt", flag: "https://flagcdn.com/w40/vn.png" },
    { code: "en", name: "English", flag: "https://flagcdn.com/w40/us.png" },
    { code: "kr", name: "한국어", flag: "https://flagcdn.com/w40/kr.png" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.code);
    setShowLanguageOptions(false);
    localStorage.setItem("i18nextLng", lang.code);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#0e0f2b] text-white py-2">
      <div className="max-w-[800px] mx-auto flex justify-between items-center pl-4 md:pl-6 pr-8">
        <div className="flex items-center space-x-2 md:block">
          <span
            className="text-[#d59648] text-2xl sm:text-3xl md:text-3xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            <PiCarFill />
          </span>
        </div>
        <nav className="flex justify-center space-x-2 sm:space-x-4 md:space-x-2 text-xs sm:text-sm md:text-base font-medium w-full">
          <div
            className={`flex flex-col items-center group cursor-pointer w-[80px] sm:w-[120px] md:w-[120px] ${isActive("/") ? "text-[#d59648]" : ""
              }`}
            onClick={() => navigate("/")}
          >
            <FaHome
              className={`text-lg sm:text-xl ${isActive("/")
                ? "text-[#d59648]"
                : "text-gray-100 group-hover:text-[#d59648]"
                }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">{t("home")}</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer w-[90px] sm:w-[120px] md:w-[120px] ${isActive("/listexp") ? "text-[#d59648]" : ""
              }`}
            onClick={() => navigate("/listexp")}
          >
            <FaUserDoctor
              className={`text-lg sm:text-xl ${isActive("/listexp")
                ? "text-[#d59648]"
                : "text-gray-100 group-hover:text-[#d59648]"
                }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">{t("experts")}</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer w-[80px] sm:w-[120px] md:w-[120px] ${isActive("/upload") ? "text-[#d59648]" : ""
              }`}
            onClick={() => navigate("/upload")}
          >
            <MdAddBox
              className={`text-lg sm:text-xl ${isActive("/upload")
                ? "text-[#d59648]"
                : "text-gray-100 group-hover:text-[#d59648]"
                }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">{t("post_ad")}</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer w-[80px] sm:w-[120px] md:w-[120px] ${isActive("/listStore") ? "text-[#d59648]" : ""
              }`}
            onClick={() => navigate("/listStore")}
          >
            <IoStorefrontSharp
              className={`text-lg sm:text-xl ${isActive("/listStore")
                ? "text-[#d59648]"
                : "text-gray-100 group-hover:text-[#d59648]"
                }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">{t("stores")}</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer w-[80px] sm:w-[120px] md:w-[120px] ${isActive("/account") ? "text-[#d59648]" : ""
              }`}
            onClick={() => navigate("/account")}
          >
            <FaRegUserCircle
              className={`text-lg sm:text-xl ${isActive("/account")
                ? "text-[#d59648]"
                : "text-gray-100 group-hover:text-[#d59648]"
                }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">{t("account")}</span>
          </div>
          {/* 
          <div className="relative flex items-center justify-center">
            <span
              className="flex items-center cursor-pointer hover:text-[#d59648]"
              onClick={() => setShowLanguageOptions(!showLanguageOptions)}
            >
              <img
                src={currentLanguage.flag}
                alt={currentLanguage.name}
                className="min-w-6 min-h-6 rounded-full object-cover"
              />
            </span>

            {showLanguageOptions && (
              <ul className="absolute right-0 top-10 bg-white text-black shadow-md rounded-md p-2 space-y-2 w-[150px] z-10">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className={`flex items-center p-2 rounded-md hover:bg-[#d59648] hover:text-white cursor-pointer ${i18n.language === lang.code
                      ? "bg-[#d59648] text-white"
                      : ""
                      }`}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    {lang.name}
                  </li>
                ))}
              </ul>
            )}
          </div> */}
        </nav>
      </div>
    </div>
  );
}

export default Header;
