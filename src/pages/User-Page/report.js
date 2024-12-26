import React, { useState } from "react";
import LayoutUser from "../../layout/layoutUser";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Report() {
  const { t } = useTranslation("reportPage"); 
  const [formData, setFormData] = useState({
    username: "Nguyen Van A",
    phoneNumber: "0353949592",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto py-6 px-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center pb-2">
          <button
            className="text-2xl mr-4 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
        <h5 className="text-lg font-bold mb-4">
          {t("title")}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">{t("username")}</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-2 py-2 border border-gray-300 rounded-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">{t("phoneNumber")}</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-2 py-2 border border-gray-300 rounded-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">{t("email")}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-2 border border-gray-300 rounded-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">{t("description")}</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-2 py-2 border border-gray-300 rounded-s"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d59648] text-white py-2 rounded-md hover:bg-[#b27939]"
            >
              {t("submit")}
            </button>
          </div>
        </form>
      </div>
    </LayoutUser>
  );
}

export default Report;
