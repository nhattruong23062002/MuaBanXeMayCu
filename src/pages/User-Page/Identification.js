import React, { useState } from 'react';
import LayoutUser from '../../layout/layoutUser';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const UserIdentificationForm = () => {
    const navigate = useNavigate();
    const { t } = useTranslation("identification");
    const [identityCard, setIdentityCard] = useState(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const [errors, setErrors] = useState({});

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setIdentityCard(file);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!identityCard) newErrors.identityCard = t("idRequired");
        if (!fullName) newErrors.fullName = t("fullNameRequired");
        if (!email) newErrors.email = t("emailRequired");
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = t("emailInvalid");
        if (!phoneNumber) newErrors.phoneNumber = t("phoneRequired");
        else if (!/^\d{10,15}$/.test(phoneNumber)) newErrors.phoneNumber = t("phoneInvalid");
        if (!address) newErrors.address = t("addressRequired");
        if (!dob) newErrors.dob = t("dobRequired");

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log({ identityCard, fullName, email, phoneNumber, address, dob });
            alert(t("formSubmitted"));
            navigate("/payment");
        }
    };

    const onBackToAccount = (event) => {
        navigate(-1)
    }

    return (
        <LayoutUser>
            <div className="flex justify-center items-start min-h-screen bg-gray-200 pt-10">
                <div className="w-[800px] p-8 bg-white rounded-xl shadow-lg space-y-8">
                    {/* Nút chuyển hướng */}
                    <button onClick={onBackToAccount} className="bg-white text-blue-500 p-2 rounded-full shadow hover:bg-blue-200 transition duration-300">
                        <FaArrowLeft />
                    </button>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">{t("title")}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Identity Card */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="identityCard">
                                {t("id")}
                            </label>
                            <input
                                type="file"
                                id="identityCard"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="bg-[#f7f7f7] block w-full p-3 border-none rounded-md shadow-sm"
                            />
                            {errors.identityCard && (
                                <p className="mt-2 text-sm text-red-500">{errors.identityCard}</p>
                            )}
                        </div>

                        {/* Full Name */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="fullName">
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
                            {errors.fullName && (
                                <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                                {t("email")}
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-[#f7f7f7] block w-full p-3 border-none rounded-md shadow-sm"
                                placeholder={t("emailPlaceholder")}
                            />
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phoneNumber">
                                {t("phoneNumber")}
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="bg-[#f7f7f7] block w-full p-3 border-none rounded-md shadow-sm"
                                placeholder={t("phonePlaceholder")}
                            />
                            {errors.phoneNumber && (
                                <p className="mt-2 text-sm text-red-500">{errors.phoneNumber}</p>
                            )}
                        </div>

                        {/* Address */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="address">
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
                            {errors.address && (
                                <p className="mt-2 text-sm text-red-500">{errors.address}</p>
                            )}
                        </div>

                        {/* Date of Birth */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="dob">
                                {t("dob")}
                            </label>
                            <input
                                type="date"
                                id="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="bg-[#f7f7f7] block w-full p-3 border-none rounded-md shadow-sm"
                            />
                            {errors.dob && (
                                <p className="mt-2 text-sm text-red-500">{errors.dob}</p>
                            )}
                        </div>

                        {/* Confirm Button */}
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

export default UserIdentificationForm;
