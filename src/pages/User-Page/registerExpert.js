import React, { useState } from "react";
import LayoutUser from "../../layout/layoutUser";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const RegisterExpert = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("registerExpert");
  const [identityCard, setIdentityCard] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIdentityCard(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ identityCard, fullName, email, phoneNumber, address, dob });
    alert(t("formSubmitted"));
  };

  const onBackToAccount = (event) => {
    navigate(-1);
  };

  return (
    <LayoutUser>
      <div className="flex justify-center items-start min-h-screen bg-gray-200 pt-10">
        <div className="w-[800px] p-8 bg-white rounded-xl shadow-lg space-y-8">
          <button
            onClick={onBackToAccount}
            className="bg-white text-blue-500 p-2 rounded-full shadow hover:bg-blue-200 transition duration-300"
          >
            <FaArrowLeft />
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-800">
            {t("title")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="fullName"
              >
                {t("fullName")}
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-[#f7f7f7] block w-full p-3 border-none rounded-md shadow-sm"
                placeholder={t("fullNamePlaceholder")}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="address"
              >
                {t("address")}
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-[#f7f7f7] block w-full p-3 border-none rounded-md shadow-sm"
                placeholder={t("addressPlaceholder")}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="dob"
              >
                {t("dob")}
              </label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="bg-[#f7f7f7] block w-full p-3 border-none rounded-md shadow-sm"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="experience"
              >
                {t("experience")}
              </label>
              <input
                type="experience"
                id="experience"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#f7f7f7] block w-full p-3 border-none rounded-md shadow-sm"
                placeholder={t("experiencePlaceholder")}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="workUnit"
              >
                {t("workUnit")}
              </label>
              <input
                type="text"
                id="workUnit"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-[#f7f7f7] block w-full p-3 border-none rounded-md shadow-sm"
                placeholder={t("workUnitPlaceholder")}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="identityCard"
              >
                {t("id")}
              </label>
              <input
                type="file"
                id="identityCard"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-[#f7f7f7] block w-full p-3 border-none rounded-md shadow-sm"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {t("confirm")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutUser>
  );
};

export default RegisterExpert;
