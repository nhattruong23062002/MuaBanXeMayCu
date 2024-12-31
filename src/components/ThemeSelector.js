import React, { useEffect, useRef, useState } from "react";
import { FaSun, FaMoon, FaAdjust } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

const ThemeSelector = () => {
  const { theme, toggleTheme } = useTheme(); // Lấy theme và hàm toggle từ context
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Để quản lý sự kiện click ra ngoài

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative theme-dropdown" ref={dropdownRef}>
      {/* Nút để mở dropdown */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {theme === "light" && (
          <FaSun className="text-gray-500 dark:text-gray-300" />
        )}
        {theme === "dark" && (
          <FaMoon className="text-gray-500 dark:text-gray-300" />
        )}
        {theme === "auto" && (
          <FaAdjust className="text-gray-500 dark:text-gray-300" />
        )}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded">
          <ul>
            <li
              className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 ${
                theme === "light" ? "bg-blue-500 text-black" : "text-black"
              }`}
              onClick={() => {
                toggleTheme("light");
                setIsOpen(false);
              }}
            >
              <FaSun className="mr-2" /> Light
            </li>
            <li
              className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 ${
                theme === "dark" ? "bg-blue-500 text-black" : "text-black"
              }`}
              onClick={() => {
                toggleTheme("dark");
                setIsOpen(false);
              }}
            >
              <FaMoon className="mr-2" /> Dark
            </li>
            <li
              className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 ${
                theme === "auto" ? "bg-blue-500 text-black" : "text-black"
              }`}
              onClick={() => {
                toggleTheme("auto");
                setIsOpen(false);
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
