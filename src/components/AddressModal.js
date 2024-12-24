import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AddressModal = ({ isOpen, onClose, onSave }) => {
  const { t } = useTranslation("addressModal"); // Namespace riêng cho AddressModal
  const [formData, setFormData] = useState({
    city: "",
    district: "",
    ward: "",
    specificAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-11/12 max-w-md rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
          {t("title")}
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("city")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("district")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("ward")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ward"
              value={formData.ward}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t("specificAddress")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="specificAddress"
              value={formData.specificAddress}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 px-3 py-2"
            />
          </div>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
          >
            {t("done")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
