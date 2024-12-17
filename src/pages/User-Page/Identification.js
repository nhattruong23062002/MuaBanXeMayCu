import React, { useState } from 'react';
import LayoutUser from '../../layout/layoutUser';

const UserIdentificationForm = () => {
    const [identityCard, setIdentityCard] = useState(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setIdentityCard(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Thực hiện hành động gửi form hoặc xác thực tại đây
        console.log({ identityCard, fullName, email, phoneNumber, address, dob });
    };

    return (
        <LayoutUser>


            <div className="flex justify-center items-start min-h-screen bg-gray-200 pt-10">
                <div className="w-[800px] p-8 bg-white rounded-xl shadow-lg space-y-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">ĐỊNH DANH TÀI KHOẢN</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* IDENTITY CARD */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="identityCard">
                                Căn cước công dân/Chứng minh nhân dân (Tải ảnh lên)
                            </label>
                            <input
                                type="file"
                                id="identityCard"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="block w-full p-3 border-2 border-gray-300 rounded-md shadow-sm hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {identityCard && (
                                <p className="mt-2 text-sm text-gray-600">
                                    File: {identityCard.name}
                                </p>
                            )}
                        </div>

                        {/* Fullname */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="fullName">
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="block w-full p-3 border-2 border-gray-300 rounded-md shadow-sm hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Nhập họ và tên của bạn"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full p-3 border-2 border-gray-300 rounded-md shadow-sm hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Nhập email của bạn"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phoneNumber">
                                Số điện thoại
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="block w-full p-3 border-2 border-gray-300 rounded-md shadow-sm hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Nhập số điện thoại của bạn"
                            />
                        </div>

                        {/* Address */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="address">
                                Địa chỉ
                            </label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="block w-full p-3 border-2 border-gray-300 rounded-md shadow-sm hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Nhập địa chỉ của bạn"
                            />
                        </div>

                        {/* Date of Birth */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="dob">
                                Ngày sinh
                            </label>
                            <input
                                type="date"
                                id="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="block w-full p-3 border-2 border-gray-300 rounded-md shadow-sm hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Confirm Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Xác nhận
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </LayoutUser>
    );
};


export default UserIdentificationForm;
