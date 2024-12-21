import React, { useState } from "react";
import { FaCarSide, FaShoppingCart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { IoLanguageSharp } from "react-icons/io5";
import LayoutUser from "../../layout/layoutUser";
import { useNavigate } from "react-router-dom";
import { FaRegMessage } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const auth = JSON.parse(localStorage.getItem("auth"));

function AccountPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("account");
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

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto bg-gray-50 min-h-screen shadow-md">
        <div className="bg-[#0e0f2b] p-6 flex items-center">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl text-gray-500">👤</span>
          </div>
          {!auth ? (
            <h2
              className="text-white text-2xl font-bold ml-4 cursor-pointer"
              onClick={() => navigate(`/login`)}
            >
              {t("login")}
            </h2>
          ) : (
            <h2 className="text-white text-2xl font-bold ml-4">
              {t("user_name", { name: "User 1" })}
            </h2>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-gray-500 uppercase text-sm font-bold mb-4">
            {t("manage_vehicles")}
          </h3>

          <ul className="space-y-8">
            <li
              className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]"
              onClick={() => navigate(`/selling`)}
            >
              <FaCarSide className="text-2xl text-[#00a0e9]" />
              <span className="text-lg font-medium">
                {t("vehicles_on_sale")}
              </span>
            </li>

            <li
              className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]"
              onClick={() => navigate(`/purchased`)}
            >
              <FaShoppingCart className="text-2xl text-[#00a0e9]" />
              <span className="text-lg font-medium">
                {t("vehicles_purchased")}
              </span>
            </li>

            <li
              className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]"
              onClick={() => navigate(`/listSender`)}
            >
              <FaRegMessage className="text-2xl text-[#00a0e9]" />
              <span className="text-lg font-medium">{t("messages")}</span>
            </li>

            <li
              className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]"
              onClick={() => navigate(`/identification`)}
            >
              <BsCreditCard2FrontFill className="text-2xl text-[#00a0e9]" />
              <span className="text-lg font-medium">
                {t("account_verification")}
              </span>
            </li>

            <li className="flex items-center space-x-4 text-gray-700 relative">
              <IoLanguageSharp className="text-2xl text-[#00a0e9]" />
              <span
                className="text-lg font-medium cursor-pointer hover:text-[#00a0e9]"
                onClick={() => setShowLanguageOptions(!showLanguageOptions)}
              >
                {t("language")}: {currentLanguage.name}
              </span>

              {showLanguageOptions && (
                <ul className="absolute left-10 top-10 bg-white shadow-md rounded-md p-2 space-y-2 w-[200px] z-10">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`flex items-center p-2 rounded-md hover:bg-[#00a0e9] hover:text-white cursor-pointer ${
                        i18n.language === lang.code
                          ? "bg-[#00a0e9] text-white"
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
            </li>

            {auth && (
              <li
                className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]"
                onClick={handleLogout}
              >
                <CiLogout className="text-2xl text-[#00a0e9]" />
                <span className="text-lg font-medium">{t("logout")}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </LayoutUser>
  );
}

export default AccountPage;
