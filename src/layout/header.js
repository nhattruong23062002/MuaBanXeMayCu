import {
  FaMotorcycle,
  FaSearch,
  FaRegUserCircle,
  FaHome,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleShowHome = () => {
    navigate(`/`);
  }

  const onClickToExpert = () => {
    navigate(`/listexp`);
  }

  const onClickToUpload = () => {
    navigate(`/upload`);
  }

  const handleShowAccount = () => {
    navigate(`/account`);
  }

  const handleClickShowListStore = () => {
    navigate(`/listStore`);
  }
  return (
    <div className="bg-[#0e0f2b] text-white py-2">
      <div className="max-w-[800px] mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-2">
          <span className="text-[#d59648] text-4xl sm:text-4xl md:text-5xl">
            <FaMotorcycle />
          </span>
        </div>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-14 text-xs sm:text-sm md:text-base font-medium">
          <div className="flex flex-col items-center group cursor-pointer" onClick={handleShowHome}>
            <FaHome className="text-gray-100 group-hover:text-[#d59648] text-lg sm:text-xl" />
            <a
              href="#"
              className="text-gray-100 group-hover:text-[#d59648] mt-1 text-[10px] sm:text-xs"
            >
              Trang chủ
            </a>
          </div>

          <div className="flex flex-col items-center group cursor-pointer" onClick={onClickToExpert}>
            <FaUserDoctor className="text-gray-100 group-hover:text-[#d59648] text-lg sm:text-xl" />
            <a
              href="#"
              className="text-gray-100 group-hover:text-[#d59648] mt-1 text-[10px] sm:text-xs"
            >
              Chuyên gia
            </a>
          </div>

          <div className="flex flex-col items-center group cursor-pointer" onClick={onClickToUpload}>
            <MdAddBox className="text-gray-100 group-hover:text-[#d59648] text-lg sm:text-xl" />
            <a
              href="#"
              className="text-gray-100 group-hover:text-[#d59648] mt-1 text-[10px] sm:text-xs"
            >
              Đăng tin
            </a>
          </div>

          <div className="flex flex-col items-center group cursor-pointer" onClick={handleClickShowListStore}>
            <IoStorefrontSharp className="text-gray-100 group-hover:text-[#d59648] text-lg sm:text-xl" />
            <a
              href="#"
              className="text-gray-100 group-hover:text-[#d59648] mt-1 text-[10px] sm:text-xs"
            >
              Cửa hàng
            </a>
          </div>

          <div className="flex flex-col items-center group cursor-pointer" onClick={handleShowAccount}>
            <FaRegUserCircle className="text-gray-100 group-hover:text-[#d59648] text-lg sm:text-xl" />
            <a
              href="#"
              className="text-gray-100 group-hover:text-[#d59648] mt-1 text-[10px] sm:text-xs"
            >
              Tài khoản
            </a>
          </div>
        </nav>
        <div className="flex items-center space-x-8"></div>
      </div>
    </div>
  );
}

export default Header;
