import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LayoutUser from "../../layout/layoutUser";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowLogin = () => {
    navigate(`/login`); 
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LayoutUser>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-[-150px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Đăng ký
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Họ và tên *
            </label>
            <input
              type="text"
              placeholder="Nhập họ và tên"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email *
            </label>
            <input
              type="text"
              placeholder="Nhập Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Số điện thoại *
            </label>
            <input
              type="text"
              placeholder="Nhập SĐT"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-1">
              Mật khẩu *
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="button"
              className="absolute top-9 right-3 text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-1">
              Xác nhận mật khẩu *
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Xấc nhận mật khẩu"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="button"
              className="absolute top-9 right-3 text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="w-full bg-[#d59648] hover:bg-[#b27939] text-white font-medium py-2 rounded-md">
            Đăng Ký
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            Bạn đã có tài khoản?{" "}
            <a href="#" className="text-[#d59648] hover:underline font-medium" onClick={handleShowLogin}>
              Đăng nhập ngay
            </a>
          </p>
        </div>
      </div>
    </LayoutUser>
  );
}

export default RegisterForm;