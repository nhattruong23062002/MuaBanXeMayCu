import React from "react";
import {
  FaStore,
  FaCarSide,
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import LayoutUser from "../../layout/layoutUser";
import { useNavigate } from "react-router-dom";
const auth = JSON.parse(localStorage.getItem("auth"));

function AccountPage() {
  const navigate = useNavigate();

  const handleShowLogin = () => {
    navigate(`/login`); 
  }
  const handleShowPurchased = () => {
    navigate(`/purchased`); 
  }
  const handleShowSelling = () => {
    navigate(`/selling`); 
  }
  const handleShowListSender = () => {
    navigate(`/listSender`); 
  }
  const handleShowIdent = () => {
    navigate(`/identification`); 
  }

  const handleLogout = () => {
    localStorage.removeItem("auth"); 
    navigate("/login"); 
  };
  return (
    <LayoutUser>
    <div className="max-w-[800px] mx-auto bg-gray-50 min-h-screen shadow-md">
      <div className="bg-[#0e0f2b] p-6 flex items-center">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-4xl text-gray-500">👤</span>
        </div>
        {!auth ? (
          <h2 className="text-white text-2xl font-bold ml-4" onClick={handleShowLogin}>Đăng nhập</h2>
        ): (
          <h2 className="text-white text-2xl font-bold ml-4">User 1</h2>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-gray-500 uppercase text-sm font-bold mb-4">
          Quản lý mua bán xe
        </h3>

        <ul className="space-y-8">
          {/* 
          <li className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]">
            <FaStore className="text-2xl text-[#00a0e9]" />
            <span className="text-lg font-medium">Gian hàng của tôi</span>
          </li>
          */}
          <li className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]" onClick={handleShowSelling}>
            <FaCarSide className="text-2xl text-[#00a0e9]"/>
            <span className="text-lg font-medium">Xe đang bán</span>
          </li>

          <li className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]" onClick={handleShowPurchased}>
            <FaShoppingCart className="text-2xl text-[#00a0e9]" />
            <span className="text-lg font-medium">Xe đã mua</span>
          </li>

          <li className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]" onClick={handleShowListSender}>
            <FaRegMessage className="text-2xl text-[#00a0e9]" />
            <span className="text-lg font-medium">Tin nhắn</span>
          </li>

          <li className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]" onClick={handleShowIdent}>
            <BsCreditCard2FrontFill className="text-2xl text-[#00a0e9]" />
            <span className="text-lg font-medium">Định danh tài khoản</span>
          </li>

          <li className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]">
            <FaHeart className="text-2xl text-[#00a0e9]" />
            <span className="text-lg font-medium">Cửa hàng yêu thích</span>
          </li>

          <li className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]">
            <FaRegHeart className="text-2xl text-[#00a0e9]" />
            <span className="text-lg font-medium">Sản phẩm yêu thích</span>
          </li>
          {auth && 
            <li className="flex items-center space-x-4 text-gray-700 cursor-pointer hover:text-[#00a0e9]" onClick={handleLogout}>
            <CiLogout className="text-2xl text-[#00a0e9]" />
            <span className="text-lg font-medium">Đăng xuất</span>
          </li>
          }
        </ul>
      </div>
    </div>
    </LayoutUser>
  );
}

export default AccountPage;
