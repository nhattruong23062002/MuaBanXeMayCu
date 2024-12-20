import React, { useState } from "react";

const carInfo = {
  name: "Xe Vario mới năm 2024",
};

const HidePostModal = ({ isOpen, onClose, onConfirm }) => {
  const [reason, setReason] = useState("");

  const handleConfirm = () => {
    if (!reason) {
      alert("Vui lòng chọn lý do ẩn tin!");
      return;
    }
    onConfirm(reason);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-11/12 max-w-lg rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
          Ẩn tin {carInfo.name}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Khi bạn đã bán được hàng, hoặc không muốn tin xuất hiện trên Vipxe, hãy
          chọn "Ẩn tin".
        </p>
        <p className="text-gray-700 font-medium mb-2">Vui lòng chọn lý do ẩn tin:</p>

        <form className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="reason"
              value="Không muốn bán nữa"
              onChange={(e) => setReason(e.target.value)}
              className="text-[#d59648] focus:ring-[#d59648]"
            />
            <label className="text-gray-700">Không muốn bán nữa</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="reason"
              value="Đã bán qua trang Vipxe"
              onChange={(e) => setReason(e.target.value)}
              className="text-[#d59648] focus:ring-[#d59648]"
            />
            <label className="text-gray-700">Đã bán qua trang Vipxe</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="reason"
              value="Đã bán qua các kênh khác"
              onChange={(e) => setReason(e.target.value)}
              className="text-[#d59648] focus:ring-[#d59648]"
            />
            <label className="text-gray-700">Đã bán qua các kênh khác</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="reason"
              value="Tôi bị làm phiền vì môi giới/dịch vụ đăng tin"
              onChange={(e) => setReason(e.target.value)}
              className="text-[#d59648] focus:ring-[#d59648]"
            />
            <label className="text-gray-700">
              Tôi bị làm phiền vì môi giới/dịch vụ đăng tin
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="reason"
              value="Khác"
              onChange={(e) => setReason(e.target.value)}
              className="text-[#d59648] focus:ring-[#d59648]"
            />
            <label className="text-gray-700">Khác</label>
          </div>
        </form>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
            onClick={onClose}
          >
            Hủy
          </button>
          <button
            className="px-4 py-2 bg-[#d59648] text-white rounded-md hover:bg-[#b27939] transition"
            onClick={handleConfirm}
          >
            Ẩn tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default HidePostModal;
