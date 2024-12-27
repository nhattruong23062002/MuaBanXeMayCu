import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LayoutUser from '../../layout/layoutUser';
import { FaArrowLeft } from 'react-icons/fa';
import Modal from '../../components/PaymentModal';

const PaymentForm = () => {
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation("payment");
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

    const handleConfirm = () => {
        alert('Thông tin xác nhận đã được gửi!');
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const navigate = useNavigate();

    const onClickIdentification = (event) => {
        navigate("/identification");
    }

    const onBackToHome = (event) => {
        navigate("/")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (paymentMethod === "bankTransfer") {
            setShowModal(true);
        } else {
            // Xử lý các phương thức khác
            alert("Vui lòng định danh tài khoản trước khi thanh toán bằng tiền mặt!");
        }
    };

    return (
        <LayoutUser>
            <div className="min-h-screen bg-gray-100">
                {/* Payment Form */}
                <div className="flex justify-center items-start">
                    <div className="w-[800px] p-8 bg-gray-100 rounded-xl shadow-lg space-y-4 relative">
                        <hr className="border-t border-gray-400 w-full" />
                        <div className="flex justify-start items-center space-x-4">
                            {/* Nút chuyển hướng */}
                            <button onClick={onBackToHome} className="bg-white text-blue-500 p-2 rounded-full shadow hover:bg-blue-200 transition duration-300">
                                <FaArrowLeft />
                            </button>
                            {/* Dòng chữ */}
                            <span className="text-base font-semibold text-gray-500">{t("title")}</span>
                        </div>
                        <hr className="my-4 border-t border-gray-400 w-full" />
                        {/* Order Information */}
                        <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">{t("orderInf")}</h2>
                            <p className="text-lg font-semibold text-gray-800 mb-4 text-right">ID: 1</p>
                            <div className="border-b pb-4">
                                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
                                    <img
                                        src="https://th.bing.com/th/id/OIP.C6tzwuwE3LVK_xHmDXS-SQHaFY?w=232&h=180&c=7&r=0&o=5&pid=1.7" // Thay bằng đường dẫn hình ảnh
                                        alt="Car"
                                        className="w-full sm:w-56 sm:h-32 rounded-xl object-cover border border-gray-300 mt-6 mb-4"
                                    />
                                    <div className="w-full">
                                        <p className="font-semibold text-left text-xl">
                                            SH 150i
                                        </p>
                                        <p className="flex justify-between text-lg">
                                            {t("type")}: <span className="text-right text-lg">{t("typeInput")}</span>
                                        </p>
                                        <p className="flex justify-between text-lg">
                                            {t("year")}: <span className="text-right text-lg">2023</span>
                                        </p>
                                        <p className="flex justify-between text-lg">
                                            {t("cc")}: <span className="text-right text-lg">150cc</span>
                                        </p>
                                        <p className="flex justify-between text-lg">
                                            {t("color")}: <span className="text-right text-lg">{t("colorInput")}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4 border-t border-gray-400" />

                            <div className="flex justify-between">
                                <p className="font-semibold text-gray-700 text-lg">{t("price")}:</p>
                                <p className="font-semibold text-gray-800 text-right text-lg">100.000.000 đ</p>
                            </div>
                        </div>


                        <div className="bg-white p-6 rounded-lg shadow-md mb-6 relative text-left">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 ">
                                {t("cusInf")}:
                            </h2>
                            <div className="space-y-2 text-lg">
                                <p>
                                    <span className="font-medium">{t("fullName")}:</span> {customerInfo.name}
                                </p>
                                <p>
                                    <span className="font-medium">{t("phoneNumber")}:</span> {customerInfo.phone}
                                </p>
                                <p>
                                    <span className="font-medium">{t("address")}:</span> {customerInfo.address}
                                </p>
                            </div>

                            <button
                                className="absolute top-4 right-4 bg-blue-300 text-white p-2 rounded-full shadow hover:bg-blue-500 transition duration-300"
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
                            <div className="bg-[#DAF4F6] p-4 rounded-md mt-4 shadow-md">
                                <p className="text-base font-bold pb-6 text-gray-700 mb-2">
                                    {t("notification")}
                                </p>
                                <button
                                    className="bg-[#00BCC3] text-white px-4 py-2 rounded shadow hover:bg-[#DAF4F6] transition duration-300 font-medium"
                                    onClick={onClickIdentification}
                                >
                                    {t("notiButton")}
                                </button>
                            </div>
                        </div>

                        <div className="mb-6 bg-white p-6 rounded-lg shadow-md text-lg text-left">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">{t("method")}</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cash"
                                            checked={paymentMethod === "cash"}
                                            onChange={() => setPaymentMethod("cash")}
                                            className="hidden"
                                        />
                                        <span className="w-5 h-5 inline-block border-2 border-gray-400 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                                            {paymentMethod === "cash" && (
                                                <span className="w-2.5 h-2.5 bg-green-300 rounded-full"></span>
                                            )}
                                        </span>
                                        <span>{t("cash")}</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="bankTransfer"
                                            checked={paymentMethod === "bankTransfer"}
                                            onChange={() => setPaymentMethod("bankTransfer")}
                                            className="hidden"
                                        />
                                        <span className="w-5 h-5 inline-block border-2 border-gray-400 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                                            {paymentMethod === "bankTransfer" && (
                                                <span className="w-2.5 h-2.5 bg-green-300 rounded-full"></span>
                                            )}
                                        </span>
                                        <span>{t("transfer")}</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="installment"
                                            checked={paymentMethod === "installment"}
                                            onChange={() => setPaymentMethod("installment")}
                                            className="hidden"
                                        />
                                        <span className="w-5 h-5 inline-block border-2 border-gray-400 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                                            {paymentMethod === "installment" && (
                                                <span className="w-2.5 h-2.5 bg-green-300 rounded-full"></span>
                                            )}
                                        </span>
                                        <span>{t("installment")}</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full py-3 bg-[#d59648] text-white rounded-md hover:bg-orange-800 transition duration-300"
                            >
                                {t("continue")}
                            </button>
                        </div>

                        {showModal && (
                            <Modal title={t("titleModal")} onClose={handleCloseModal}>
                                <div className="flex flex-col lg:flex-row lg:space-x-6">
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">{t("idInf")}</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">{t("nameId")}</label>
                                                <input
                                                    type="text"
                                                    value="Nguyễn Văn A"
                                                    readOnly
                                                    className="mt-2 block w-full h-14 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">{t("numberId")}</label>
                                                <input
                                                    type="text"
                                                    value="1234567890"
                                                    readOnly
                                                    className="mt-2 block w-full h-14 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">{t("bankName")}</label>
                                                <input
                                                    type="text"
                                                    value="Ngân hàng Sacombank"
                                                    readOnly
                                                    className="mt-2 block w-full h-14 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">{t("bankBranch")}</label>
                                                <input
                                                    type="text"
                                                    value="Chi nhánh Đà Nẵng"
                                                    readOnly
                                                    className="mt-2 block w-full h-14 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-4 w-full">
                                            <div className="w-1/4">
                                                <img
                                                    src="https://th.bing.com/th/id/OIP.wBKSzdf1HTUgx1Ax_EecKwHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7"
                                                    alt="PayPal"
                                                    className="w-16 h-16 object-contain"
                                                />
                                            </div>
                                            <div className="w-1/4">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                                                    alt="Visa"
                                                    className="w-16 h-16 object-contain"
                                                />
                                            </div>
                                            <div className="w-1/4">
                                                <img
                                                    src="https://th.bing.com/th/id/OIP.2GBsE98iH4hZsEB-8DZqNQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7"
                                                    alt="MasterCard"
                                                    className="w-16 h-16 object-contain"
                                                />
                                            </div>
                                            <div className="w-1/4">
                                                <img
                                                    src="https://th.bing.com/th/id/OIP.pn3RUm1xk1HiAxWIgC6CIwHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7"
                                                    alt="VNPay"
                                                    className="w-16 h-16 object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-center mt-6">
                                            <button
                                                type="button"
                                                onClick={handleConfirm}
                                                className="w-full py-3 bg-purple-600 text-white rounded-md shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                                            >
                                                {t("confirm")}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Phân chia dạng cột trên mobile và dạng hàng trên desktop */}
                                    <div className="border-t-2 lg:border-t-0 lg:border-l-2 border-gray-300 mt-6 lg:mt-0 lg:mx-6"></div>

                                    <div className="w-full lg:w-1/2 flex justify-center items-center mb-60 lg:mt-0">
                                        <img
                                            src="https://th.bing.com/th/id/OIP.9_HJ8MQaeWA2WJc_24unQgHaEs?w=280&h=180&c=7&r=0&o=5&pid=1.7"
                                            alt="Bank Card"
                                            className="rounded-lg shadow-xl h-52 object-contain border-4"
                                        />
                                    </div>
                                </div>

                            </Modal>
                        )}
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
};

export default PaymentForm;
