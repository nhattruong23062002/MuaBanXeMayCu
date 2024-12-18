import React, { useState } from "react";

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    carType: "",
    purpose: "",
    date: "",
    timeSlot: "",
  });

  const timeSlots = ["7:00-8:00", "9:00-10:00", "13:00-14:00", "15:00-16:00"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Thông tin đặt lịch:", formData);
    alert("Đặt lịch thành công!");
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Đặt lịch kiểm tra xe
        </h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <label className="w-40 font-medium">Họ và tên:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <label className="w-40 font-medium">SĐT:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <label className="w-40 font-medium">Địa chỉ kiểm tra:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <label className="w-40 font-medium">Loại xe:</label>
            <input
              type="text"
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <label className="w-40 font-medium">Mục đích kiểm tra:</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <label className="w-40 font-medium">Ngày hẹn:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="font-medium mb-2 block">Giờ hẹn:</label>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  className={`border px-4 py-2 rounded-md text-sm ${
                    formData.timeSlot === slot
                      ? "bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, timeSlot: slot })
                  }
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="bg-gray-400 px-4 py-2 rounded-md mr-2 text-white"
            onClick={onClose}
          >
            Hủy
          </button>
          <button
            className="bg-[#f59e0b] px-4 py-2 rounded-md text-white hover:bg-[#d97706]"
            onClick={handleSubmit}
          >
            Xác nhận đặt lịch
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
