import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CreateAppointment = () => {
  const { t } = useTranslation("createAppointment"); // Sử dụng namespace i18n
  const [certificateImages, setCertificateImages] = useState([]); // State lưu trữ danh sách ảnh

  // Xử lý khi chọn ảnh
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files); // Lấy danh sách file được chọn
    const newImages = files.map((file) => URL.createObjectURL(file)); // Tạo URL cho từng ảnh
    setCertificateImages([...certificateImages, ...newImages]); // Cập nhật danh sách ảnh
  };

  // Xử lý khi xóa ảnh
  const handleImageRemove = (indexToRemove) => {
    const updatedImages = certificateImages.filter(
      (_, index) => index !== indexToRemove
    );
    setCertificateImages(updatedImages); // Cập nhật danh sách ảnh sau khi xóa
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-[#f8f8ff] p-6 border border-gray-300 rounded-lg">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
        {t("title")}
      </h2>
      <form className="space-y-6">
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            {t("form.name")}
          </label>
          <input
            type="text"
            placeholder={t("form.namePlaceholder")}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            {t("form.phone")}
          </label>
          <input
            type="text"
            placeholder={t("form.phonePlaceholder")}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            {t("form.address")}
          </label>
          <input
            type="text"
            placeholder={t("form.addressPlaceholder")}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            {t("form.experience")}
          </label>
          <input
            type="text"
            placeholder={t("form.experiencePlaceholder")}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Upload nhiều ảnh */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            {t("form.certificate")}
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Hiển thị ảnh xem trước */}
        {certificateImages.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold text-gray-700 mb-2">
              {t("preview.title")}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {certificateImages.map((image, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 border rounded overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${t("preview.certificate")} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleImageRemove(index)}
                    className="absolute top-1 left-1 bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            {t("form.price")}
          </label>
          <input
            type="text"
            placeholder={t("form.pricePlaceholder")}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            {t("form.timeSlots")}
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            <span className="p-2 bg-gray-100 border rounded cursor-pointer hover:bg-gray-200">
              {t("timeOptions.slot1")}
            </span>
            <span className="p-2 bg-gray-100 border rounded cursor-pointer hover:bg-gray-200">
              {t("timeOptions.slot2")}
            </span>
            <span className="p-2 bg-gray-100 border rounded cursor-pointer hover:bg-gray-200">
              {t("timeOptions.slot3")}
            </span>
            <span className="p-2 bg-gray-100 border rounded cursor-pointer hover:bg-gray-200">
              {t("timeOptions.slot4")}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {t("submitButton")}
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;
