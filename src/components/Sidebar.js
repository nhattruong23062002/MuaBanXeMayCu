import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import hook
import { MdOutlineDashboard } from "react-icons/md";
import { BsFilePost } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { FaUserSecret } from "react-icons/fa6";
import { FaRegUserCircle, FaFile } from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdCreateNewFolder } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { decodeToken } from "../utils/authUtils";


const Sidebar = () => {
  const { t } = useTranslation("sidebar"); // Sử dụng namespace "sidebar"
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State quản lý sidebar
  const user = decodeToken();

  return (
    <>
      <button
        className="fixed top-4 left-4 text-white bg-gray-800 p-2 rounded-md z-50 lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FaAlignJustify size={20} />
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 w-64 z-40`}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-gray-700">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <FaAlignJustify size={20} />
            {t("title")}
          </h2>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={20} />
          </button>
        </div>

        <ul className="space-y-2 mt-4">
          {user.role === "expert" && (
            <>
              <li>
                <Link
                  to="/admin/manage-appointments"
                  className="flex items-center gap-1 block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <RiCalendarScheduleFill />
                  {t("manageAppointments")}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/create-appointment"
                  className="flex items-center gap-1 block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <MdCreateNewFolder />
                  {t("createAppointment")}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/profile-expert"
                  className="flex items-center gap-1 block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FaRegUserCircle />
                  {t("profileExpert")}
                </Link>
              </li>
            </>
          )}
          {user.role === "admin" && (
            <>
              <li>
                <Link
                  to="/admin/dashboard"
                  className="flex items-center gap-1 block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <MdOutlineDashboard />
                  {t("Dashboard")}
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/manage-posts"
                  className="flex items-center gap-1 block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <BsFilePost />
                  {t("managePosts")}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/manage-users"
                  className="flex items-center gap-1 block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FaUserGroup />
                  {t("manageUsers")}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/handle-complaints"
                  className="flex items-center gap-1 block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <HiDocumentReport />
                  {t("handleComplaints")}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/manage-experts"
                  className="flex items-center gap-1 block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FaUserSecret />
                  {t("manageExperts")}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/profile"
                  className="flex items-center gap-1 block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FaFile />
                  {t("profile")}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/setting"
                  className="flex items-center gap-1 block px-6 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <IoSettingsSharp />
                  {t("setting")}
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
