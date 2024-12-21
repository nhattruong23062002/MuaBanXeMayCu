import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LayoutUser from "../../layout/layoutUser";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fakeUsers = [
    { email: "user@gmail.com", password: "user123", role: "user" },
    { email: "admin@gmail.com", password: "admin123", role: "admin" },
  ];

  const handleLogin = () => {
    const user = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ email: user.email, role: user.role })
      );
      
    if (user.role === "user") {
      window.location.href = "/";
    } else if (user.role === "admin") {
      window.location.href = "/admin/manage-appointments"; 
    }

    } else {
      setError("Email hoặc mật khẩu không đúng!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LayoutUser>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-[-150px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Đăng nhập
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email *
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-1">
              Mật khẩu *
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button
            onClick={handleLogin}
            className="w-full bg-[#d59648] hover:bg-[#b27939] text-white font-medium py-2 rounded-md"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </LayoutUser>
  );
}

export default LoginForm;
