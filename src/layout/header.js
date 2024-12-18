import {
  FaMotorcycle,
  FaSearch,
  FaRegUserCircle,
  FaHome,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="bg-[#0e0f2b] text-white py-2">
      <div className="max-w-[800px] mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-2">
          <span className="text-[#d59648] text-4xl sm:text-4xl md:text-5xl">
            <FaMotorcycle />
          </span>
        </div>

        <nav className="flex flex-wrap justify-center space-x-3 sm:space-x-6 md:space-x-14 text-xs sm:text-sm md:text-base font-medium">
          <div
            className={`flex flex-col items-center group cursor-pointer ${
              isActive("/") ? "text-[#d59648]" : ""
            }`}
            onClick={() => navigate("/")}
          >
            <FaHome
              className={`text-lg sm:text-xl ${
                isActive("/")
                  ? "text-[#d59648]"
                  : "text-gray-100 group-hover:text-[#d59648]"
              }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">Trang chủ</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer ${
              isActive("/listexp") ? "text-[#d59648]" : ""
            }`}
            onClick={() => navigate("/listexp")}
          >
            <FaUserDoctor
              className={`text-lg sm:text-xl ${
                isActive("/listexp")
                  ? "text-[#d59648]"
                  : "text-gray-100 group-hover:text-[#d59648]"
              }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">Chuyên gia</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer ${
              isActive("/upload") ? "text-[#d59648]" : ""
            }`}
            onClick={() => navigate("/upload")}
          >
            <MdAddBox
              className={`text-lg sm:text-xl ${
                isActive("/upload")
                  ? "text-[#d59648]"
                  : "text-gray-100 group-hover:text-[#d59648]"
              }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">Đăng tin</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer ${
              isActive("/listStore") ? "text-[#d59648]" : ""
            }`}
            onClick={() => navigate("/listStore")}
          >
            <IoStorefrontSharp
              className={`text-lg sm:text-xl ${
                isActive("/listStore")
                  ? "text-[#d59648]"
                  : "text-gray-100 group-hover:text-[#d59648]"
              }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">Cửa hàng</span>
          </div>

          <div
            className={`flex flex-col items-center group cursor-pointer ${
              isActive("/account") ? "text-[#d59648]" : ""
            }`}
            onClick={() => navigate("/account")}
          >
            <FaRegUserCircle
              className={`text-lg sm:text-xl ${
                isActive("/account")
                  ? "text-[#d59648]"
                  : "text-gray-100 group-hover:text-[#d59648]"
              }`}
            />
            <span className="mt-1 text-[10px] sm:text-xs">Tài khoản</span>
          </div>
        </nav>
        <div className="flex items-center space-x-8"></div>
      </div>
    </div>
  );
}

export default Header;
