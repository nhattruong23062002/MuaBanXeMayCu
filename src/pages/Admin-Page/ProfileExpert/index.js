import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ProfileExpert = () => {
  const { t } = useTranslation("profileExpert");
  const [certificateImages, setCertificateImages] = useState([]);
  const [formData, setFormData] = useState({
    name: "Nguyễn Văn A",
    phone: "0942348382",
    address: "Sơn Trà, Đà Nẵng",
    date: "23/03/1994",
    experience: "4",
    services: "Kiểm tra dấu hiệu xe tai nạn, xe lên đời & xe trộm cắp, Ước tính số km thực tế của xe, Phát hiện lỗi phun xăng, cảm biến bằng thiết bị chính xác, Đánh giá tổng quát và định giá xe kiểm tra",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setCertificateImages([...certificateImages, ...newImages]);
  };

  const handleImageRemove = (indexToRemove) => {
    const updatedImages = certificateImages.filter(
      (_, index) => index !== indexToRemove
    );
    setCertificateImages(updatedImages);
  };

  return (
    <div className="max-w-[800px] mx-auto mt-10 bg-[#f8f8ff] p-8 border border-gray-300 rounded-lg">
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
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("form.phonePlaceholder")}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            {t("form.date")}
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">
            {t("form.address")}
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
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
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder={t("form.experiencePlaceholder")}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

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
            {t("form.services")}
          </label>
          <textarea
            type="text"
            name="services"
            value={formData.services}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
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

export default ProfileExpert;
