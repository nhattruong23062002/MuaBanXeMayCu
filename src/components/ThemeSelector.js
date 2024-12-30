import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaAdjust } from "react-icons/fa";

const ThemeSelector = () => {
  const [theme, setTheme] = useState("auto"); // State cho theme
  const [isOpen, setIsOpen] = useState(false); // State để quản lý hiển thị dropdown

  // Thay đổi theme khi state theme thay đổi
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Đổi trạng thái mở/đóng
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".theme-dropdown")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative theme-dropdown">
      {/* Nút để bật/tắt menu */}
      <button
        onClick={toggleDropdown}
        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <FaSun className="text-gray-500 dark:text-gray-300" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded">
          <ul>
            <li
              className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 ${
                theme === "light"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => {
                setTheme("light");
                setIsOpen(false); // Đóng dropdown sau khi chọn
              }}
            >
              <FaSun className="mr-2" /> Light
            </li>
            <li
              className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 ${
                theme === "dark"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => {
                setTheme("dark");
                setIsOpen(false); // Đóng dropdown sau khi chọn
              }}
            >
              <FaMoon className="mr-2" /> Dark
            </li>
            <li
              className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 ${
                theme === "auto"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => {
                setTheme("auto");
                setIsOpen(false); // Đóng dropdown sau khi chọn
              }}
            >
              <FaAdjust className="mr-2" /> Auto
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
