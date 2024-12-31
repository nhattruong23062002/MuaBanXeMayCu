import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../components/ThemeContext"; // Sử dụng hook để lấy thông tin theme

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useTheme(); // Truy cập trạng thái theme

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div
      className={`admin-layout min-h-screen flex flex-col ${
        theme === "dark" ? "bg-gray-900 text-black" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 lg:ml-64">{children}</div>
    </div>
  );
};

export default AdminLayout;
