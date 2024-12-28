import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LayoutUser from "../../layout/layoutUser";
import { useTranslation } from "react-i18next";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation("login");

  const fakeUsers = [
    { email: "user@gmail.com", password: "user123", role: "user" },
    { email: "admin@gmail.com", password: "admin123", role: "admin" },
    { email: "expert@gmail.com", password: "expert123", role: "expert" },
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
        window.location.href = "/admin/dashboard";
      } else if (user.role === "expert") {
        window.location.href = "/admin/manage-appointments";
      }
    } else {
      setError(t("invalidCredentials"));
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
            {t("title")}
          </h2>

          {error && (
            <p className="text-red-500 text-center font-medium mb-4">{error}</p>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              {t("email")} *
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-1">
              {t("password")} *
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("passwordPlaceholder")}
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

          <div className="flex justify-end mb-6">
            <a href="#" className="text-[#d59648] hover:underline text-sm">
              {t("forgotPassword")}
            </a>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-[#d59648] hover:bg-[#b27939] text-white font-medium py-2 rounded-md"
          >
            {t("loginButton")}
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            {t("registerPrompt")}{" "}
            <a
              href="#"
              className="text-[#d59648] hover:underline font-medium"
              onClick={() => (window.location.href = "/register")}
            >
              {t("registerLink")}
            </a>
          </p>
        </div>
      </div>
    </LayoutUser>
  );
}

export default LoginForm;
