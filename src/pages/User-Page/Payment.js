import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutUser from '../../layout/layoutUser';


const PaymentForm = () => {
    const customerInfo = {
        name: "Phạm Văn Nga",
        phone: "123-456-7890",
        address: "Sơn Trà, Đà Nẵng",
    };
    const [paymentMethod, setPaymentMethod] = useState({
        cash: false,
        bankTransfer: false,
        installment: false,
    });

    const navigate = useNavigate();

    const handlePaymentMethodChange = (e) => {
        const { name, checked } = e.target;
        setPaymentMethod({
            ...paymentMethod,
            [name]: checked,
        });
    };

    const onClickIdentification = (event) => {
        navigate(-1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Payment method selected:", paymentMethod);
    };

    return (
        <LayoutUser>
            <div className="min-h-screen bg-gray-100">
                {/* Payment Form */}
                <div className="flex justify-center items-start py-10">
                    <div className="w-[800px] p-8 bg-white rounded-xl shadow-lg space-y-8 relative">
                        {/* Button chuyển hướng */}
                        <button
                            className="absolute top-4 left-4 bg-white text-blue-500 p-2 rounded-full shadow hover:bg-blue-200 transition duration-300"
                            onClick={(onClickIdentification)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        {/* Order Information */}
                        <div className="mb-6 bg-gray-200 p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Thông tin đơn hàng</h2>
                            <p className="text-lg font-semibold text-gray-800 mb-4 text-right">ID: 1</p>
                            <div className="border-b pb-4">
                                <div className="flex items-center space-x-4">
                                    {/* Thay ảnh bằng thẻ img */}
                                    <img
                                        src="https://th.bing.com/th/id/OIP.C6tzwuwE3LVK_xHmDXS-SQHaFY?w=232&h=180&c=7&r=0&o=5&pid=1.7" // Thay bằng đường dẫn hình ảnh
                                        alt="Car"
                                        className="w-70 h-40 rounded-xl object-cover border border-gray-300 mt-6 mb-4"
                                    />
                                    <div className="w-full">
                                        <p className="font-semibold text-left text-xl">
                                            SH 150i
                                        </p>
                                        <p className="flex justify-between text-lg">
                                            Loại xe: <span className="text-right text-lg">Cũ</span>
                                        </p>
                                        <p className="flex justify-between text-lg">
                                            Năm sản xuất: <span className="text-right text-lg">2023</span>
                                        </p>
                                        <p className="flex justify-between text-lg">
                                            Động cơ (phân khối): <span className="text-right text-lg">150cc</span>
                                        </p>
                                        <p className="flex justify-between text-lg">
                                            Màu: <span className="text-right text-lg">Trắng</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Thanh gạch ngang */}
                            <hr className="my-4 border-t border-gray-400" />

                            {/* Phần Price */}
                            <div className="flex justify-between">
                                <p className="font-semibold text-gray-700 text-lg">Giá sản phẩm</p>
                                <p className="font-semibold text-gray-800 text-right text-lg">100.000.000 đ</p>
                            </div>
                        </div>

                        {/* Customer Information */}
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6 relative text-left">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 ">
                                Thông tin khách hàng
                            </h2>
                            <div className="space-y-2 text-lg">
                                <p>
                                    <span className="font-medium">Họ và tên:</span> {customerInfo.name}
                                </p>
                                <p>
                                    <span className="font-medium">SĐT:</span> {customerInfo.phone}
                                </p>
                                <p>
                                    <span className="font-medium">Địa chỉ:</span> {customerInfo.address}
                                </p>
                            </div>
                            {/* Button chuyển hướng */}
                            <button
                                className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600 transition duration-300"
                                onClick={(onClickIdentification)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Payment Method */}
                        <div className="mb-6 bg-green-100 p-6 rounded-lg shadow-md text-lg text-left">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Phương thức thanh toán</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="cash"
                                            checked={paymentMethod.cash}
                                            onChange={handlePaymentMethodChange}
                                            className="hidden"
                                        />
                                        <span className="w-5 h-5 inline-block border-2 border-gray-400 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out checked:bg-purple-600 checked:border-purple-600">
                                            {paymentMethod.cash && (
                                                <span className="w-2.5 h-2.5 bg-green-300 rounded-full"></span>
                                            )}
                                        </span>
                                        <span>Tiền mặt</span>
                                    </label>
                                </div>

                                <div>
                                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="bankTransfer"
                                            checked={paymentMethod.bankTransfer}
                                            onChange={handlePaymentMethodChange}
                                            className="hidden"
                                        />
                                        <span className="w-5 h-5 inline-block border-2 border-gray-400 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out checked:bg-purple-600 checked:border-purple-600">
                                            {paymentMethod.bankTransfer && (
                                                <span className="w-2.5 h-2.5 bg-green-300 rounded-full"></span>
                                            )}
                                        </span>
                                        <span>Chuyển khoản</span>
                                    </label>
                                </div>

                                <div>
                                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="installment"
                                            checked={paymentMethod.installment}
                                            onChange={handlePaymentMethodChange}
                                            className="hidden"
                                        />
                                        <span className="w-5 h-5 inline-block border-2 border-gray-400 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out checked:bg-purple-600 checked:border-purple-600">
                                            {paymentMethod.installment && (
                                                <span className="w-2.5 h-2.5 bg-green-300 rounded-full"></span>
                                            )}
                                        </span>
                                        <span>Trả góp</span>
                                    </label>
                                </div>
                            </div>
                        </div>


                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full py-3 bg-[#d59648] text-white rounded-md hover:bg-orange-800 transition duration-300"
                            >
                                Tiếp tục
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
};

export default PaymentForm;
