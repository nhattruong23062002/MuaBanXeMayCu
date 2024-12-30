import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function BookingModal({ isOpen, onClose }) {
  const { t } = useTranslation("bookingModal");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    carType: "",
    purpose: "",
    date: "",
    timeSlot: "",
  });

  const [errors, setErrors] = useState({});

  const timeSlots = ["7:00-8:00", "9:00-10:00", "13:00-14:00", "15:00-16:00"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("errors.nameRequired");
    if (!formData.phone.trim()) {
      newErrors.phone = t("errors.phoneRequired");
    } else if (!/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = t("errors.phoneInvalid");
    }
    if (!formData.address.trim()) newErrors.address = t("errors.addressRequired");
    if (!formData.carType.trim()) newErrors.carType = t("errors.carTypeRequired");
    if (!formData.purpose.trim()) newErrors.purpose = t("errors.purposeRequired");
    if (!formData.date) newErrors.date = t("errors.dateRequired");
    if (!formData.timeSlot) newErrors.timeSlot = t("errors.timeSlotRequired");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(t("successMessage"), formData);
      alert(t("successMessage"));
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-4 text-center">{t("title")}</h2>
        <div className="space-y-3">
          {/* Name */}
          <div className="flex items-center">
            <label className="w-40 font-medium">{t("name")}:</label>
            <div className="w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-center">
            <label className="w-40 font-medium">{t("phone")}:</label>
            <div className="w-full">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          {/* Address */}
          <div className="flex items-center">
            <label className="w-40 font-medium">{t("address")}:</label>
            <div className="w-full">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
          </div>
          {/* Car Type */}
          <div className="flex items-center">
            <label className="w-40 font-medium">{t("carType")}:</label>
            <div className="w-full">
              <input
                type="text"
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
              />
              {errors.carType && (
                <p className="text-red-500 text-sm">{errors.carType}</p>
              )}
            </div>
          </div>
          {/* Purpose */}
          <div className="flex items-center">
            <label className="w-40 font-medium">{t("purpose")}:</label>
            <div className="w-full">
              <input
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
              />
              {errors.purpose && (
                <p className="text-red-500 text-sm">{errors.purpose}</p>
              )}
            </div>
          </div>
          {/* Date */}
          <div className="flex items-center">
            <label className="w-40 font-medium">{t("appointmentDate")}:</label>
            <div className="w-full">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date}</p>
              )}
            </div>
          </div>
          {/* Time Slot */}
          <div>
            <label className="font-medium mb-2 block">
              {t("appointmentTime")}:
            </label>
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
            {errors.timeSlot && (
              <p className="text-red-500 text-sm mt-1">{errors.timeSlot}</p>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="bg-gray-400 px-4 py-2 rounded-md mr-2 text-white"
            onClick={onClose}
          >
            {t("cancel")}
          </button>
          <button
            className="bg-[#f59e0b] px-4 py-2 rounded-md text-white hover:bg-[#d97706]"
            onClick={handleSubmit}
          >
            {t("confirm")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
