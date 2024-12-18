import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import LayoutUser from "../../layout/layoutUser";
import { GoDot } from "react-icons/go";
import BookingModal from "../../components/BookingExpertModal";

function ExpertDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const expert = {
    name: "Nguyễn Văn A",
    dob: "23/03/1994",
    address: "Sơn Trà, Đà Nẵng",
    phone: "0942348382",
    workingHours: [
      { day: "Thứ 2", time: "8:00-14:00" },
      { day: "Thứ 3", time: "8:00-14:00" },
      { day: "Thứ 4", time: "8:00-14:00" },
      { day: "Thứ 5", time: "8:00-14:00" },
    ],
  };

  return (
    <LayoutUser>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-[800px] mx-auto py-4 flex items-center">
          <button
            onClick={() => window.history.back()}
            className="text-2xl text-gray-600 hover:text-gray-800 mr-2"
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="text-letf text-xl font-bold flex-grow">
            Thông tin chuyên gia
          </h1>
        </div>

        <div className="max-w-[800px] mx-auto bg-white rounded-lg shadow-md">
          <img
            src="https://kiemtraxecu.com/wp-content/uploads/2022/05/IMG_8158-scaled.jpg"
            alt="Chuyên gia"
            className="w-full h-96 object-cover rounded-t-lg"
          />

          <div className="p-6 -mt-8 relative z-10 bg-white mx-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">
              Chuyên gia: <span className="text-[#f59e0b]">{expert.name}</span>
            </h2>
            <p className="text-gray-700">
              <strong>Ngày sinh: {expert.dob}</strong>
            </p>
            <p className="text-gray-700">
              <strong>Địa chỉ: {expert.address}</strong>
            </p>
            <p className="text-gray-700">
              <strong>SĐT: {expert.phone}</strong>
            </p>
          </div>

          <div className="p-8">
            <h3 className="text-xl font-bold mb-2">Giờ làm việc:</h3>
            <div className="grid grid-cols-2 gap-y-2 text-blue-600">
              {expert.workingHours.map((item, index) => (
                <strong key={index} className="text-lg">
                  {item.day}: {item.time}
                </strong>
              ))}
            </div>
          </div>

          <div className="px-8 pb-6">
            <h3 className="text-xl font-bold mb-2">Dịch vụ cung cấp</h3>
            <p className="text-gray-500">
              <GoDot />
              Kiểm tra dấu hiệu xe tai nạn, xe lên đời & xe trộm cắp{" "}
            </p>
            <p className="text-gray-500">
              <GoDot />
              Ước tính số km thực tế của xe{" "}
            </p>
            <p className="text-gray-500">
              <GoDot />
              Phát hiện lỗi phun xăng, cảm biến bằng thiết bị chính xác
            </p>
            <p className="text-gray-500">
              <GoDot />
              Đánh giá tổng quát và định giá xe kiểm tra
            </p>
          </div>

          <div className="text-center pb-6">
            <button
              className="bg-[#f59e0b] text-white px-6 py-3 rounded-full hover:bg-[#d97706]"
              onClick={() => setIsModalOpen(true)}
            >
              Đặt lịch ngay
            </button>
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </LayoutUser>
  );
}

export default ExpertDetailPage;
