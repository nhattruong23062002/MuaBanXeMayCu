import React from "react";
import LayoutUser from "../../layout/layoutUser";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const messages = [
  {
    id: 1,
    name: "Xe máy Nhật Trương",
    avatar:
      "https://img.freepik.com/free-vector/vintage-flat-motorcycle-logo_23-2149450072.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720051200&semt=ais_user",
    message: "Bạn gửi sđt hoặc sđt zalo giúp mình nhé",
    date: "11/12/2024",
    time: "13:52",
  },
  {
    id: 2,
    name: "Chuyên gia kiểm định xe Nguyễn Thắng",
    avatar:
      "https://cl-wpml.careerlink.vn/cam-nang-viec-lam/wp-content/uploads/2023/04/03112520/building-sector-industrial-workers-concept-confident-young-asian-engineer-construction-manager-reflective-clothes-helmet-cross-arms-smiling-sassy-ensuring-quality-white-wall.jpg",
    message: "Anh đang dùng sđt này đúng kh ạ",
    date: "10/12/2024",
    time: "14:32",
  },
  {
    id: 3,
    name: "Xe máy Thanh Tùng",
    avatar:
      "https://png.pngtree.com/png-clipart/20200720/original/pngtree-wing-and-motorbike-logo-png-image_4358051.jpg",
    message:
      "Dạ cho em hỏi em muốn mua xe bên mình thì cần những thủ tục giấy tờ gì ạ, biển ...",
    date: "10/12/2024",
    time: "13:54",
  },
];

const MessageList = () => {
  const navigate = useNavigate();

  const handleShowChat = () => {
    navigate(`/chat`); 
  }

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-4">
          <button
            className="text-xl sm:text-2xl mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-bold text-gray-800">
            Bạn đã đọc hết tin nhắn
          </h2>
          <button className="text-blue-600 text-sm hover:underline">
            Tất cả
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center border-b pb-4 last:border-b-0"
              onClick={handleShowChat}
            >
              <img
                src={message.avatar}
                alt={message.name}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  {message.name}
                </h3>
                <p className="text-sm text-gray-600 truncate">
                  {message.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {message.date} - {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutUser>
  );
};

export default MessageList;
