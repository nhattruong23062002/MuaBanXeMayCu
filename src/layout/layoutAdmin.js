import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="admin-layout min-h-screen flex flex-col bg-gray-100 relative ">
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar />
      <div className="flex-1 lg:ml-64">{children}</div>
    </div>
  );
};

export default AdminLayout;
