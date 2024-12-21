import React, { useState } from "react";
import {
  FaCarSide,
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { IoLanguageSharp } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import LayoutUser from "../../layout/layoutUser";
import { useNavigate } from "react-router-dom";

const auth = JSON.parse(localStorage.getItem("auth"));

function AccountPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("Tiếng Việt"); // Ngôn ngữ mặc định
  const [showLanguageOptions, setShowLanguageOptions] = useState(false); // Hiển thị danh sách ngôn ngữ

  const languages = [
    { name: "Tiếng Việt", flag: "https://flagcdn.com/w40/vn.png" },
    { name: "Tiếng Anh", flag: "https://flagcdn.com/w40/us.png" },
    { name: "Tiếng Hàn", flag: "https://flagcdn.com/w40/kr.png" },
  ];

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage.name);
    setShowLanguageOptions(false); // Ẩn danh sách sau khi chọn
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto bg-gray-50 min-h-screen shadow-md">
        <div className="bg-[#0e0f2b] p-6 flex items-center">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl text-gray-500">👤</span>
          </div>
          {!auth ? (
            <h2 className="text-white text-2xl font-bold ml-4">
              Đăng nhập
            </h2>
          ) : (
            <h2 className="text-white text-2xl font-bold ml-4">User 1</h2>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-gray-500 uppercase text-sm font-bold mb-4">
            Quản lý mua bán xe
          </h3>

          <ul className="space-y-8">
            <li
              className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]"
              onClick={() => navigate(`/selling`)}
            >
              <FaCarSide className="text-2xl text-[#00a0e9]" />
              <span className="text-lg font-medium">Xe đang bán</span>
            </li>

            <li
              className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]"
              onClick={() => navigate(`/purchased`)}
            >
              <FaShoppingCart className="text-2xl text-[#00a0e9]" />
              <span className="text-lg font-medium">Xe đã mua</span>
            </li>

            <li
              className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]"
              onClick={() => navigate(`/listSender`)}
            >
              <FaRegMessage className="text-2xl text-[#00a0e9]" />
              <span className="text-lg font-medium">Tin nhắn</span>
            </li>

            <li
              className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]"
              onClick={() => navigate(`/identification`)}
            >
              <BsCreditCard2FrontFill className="text-2xl text-[#00a0e9]" />
              <span className="text-lg font-medium">Định danh tài khoản</span>
            </li>

            <li className="flex items-center space-x-4 text-gray-700 relative">
              <IoLanguageSharp className="text-2xl text-[#00a0e9]" />
              <span
                className="text-lg font-medium cursor-pointer hover:text-[#00a0e9]"
                onClick={() => setShowLanguageOptions(!showLanguageOptions)}
              >
                Ngôn ngữ: {language}
              </span>

              {showLanguageOptions && (
                <ul className="absolute left-10 top-10 bg-white shadow-md rounded-md p-2 space-y-2 w-[200px] z-10">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      onClick={() => handleLanguageChange(lang)}
                      className={`flex items-center p-2 rounded-md hover:bg-[#00a0e9] hover:text-white cursor-pointer ${
                        language === lang.name ? "bg-[#00a0e9] text-white" : ""
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
              {/* 
            <li className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]">
              <FaHeart className="text-2xl text-[#00a0e9]" />
              <span className="text-lg font-medium">Cửa hàng yêu thích</span>
            </li>

            <li className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]">
              <FaRegHeart className="text-2xl text-[#00a0e9]" />
              <span className="text-lg font-medium">Sản phẩm yêu thích</span>
            </li> */}
            {auth && (
              <li
                className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]"
                onClick={handleLogout}
              >
                <CiLogout className="text-2xl text-[#00a0e9]" />
                <span className="text-lg font-medium">Đăng xuất</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </LayoutUser>
  );
}

export default AccountPage;
