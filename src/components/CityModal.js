import React, { useState } from 'react';

const CitySelectModal = ({ isOpen, closeModal, setSelectedCity }) => {
    const cities = [
        "An Giang", "Bà Rịa - Vũng Tàu", "Bạc Liêu", "Bắc Giang", "Bắc Kạn", "Bắc Ninh",
        "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau",
        "Cần Thơ", "Cao Bằng", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên",
        "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh",
        "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa",
        "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai",
        "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ",
        "Phú Yên", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị",
        "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa",
        "Thừa Thiên Huế", "Tiền Giang", "TP Hồ Chí Minh", "Trà Vinh", "Tuyên Quang",
        "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
    ];

    const [selectedCity, setSelected] = useState(null); // Lưu tỉnh/thành phố được chọn

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000">
            <div className="relative bg-white rounded-lg shadow-lg w-[800px] max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-3 left-3 text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-200"
                    aria-label="Close Modal"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Modal Header */}
                <div className="p-6 border-b">
                    <h2 className="text-2xl font-semibold text-center">Chọn Tỉnh/Thành Phố</h2>
                </div>

                {/* Modal Body */}
                <div className="p-4 grid grid-cols-1 gap-4">
                    {cities.map((city, index) => (
                        <button
                            key={index}
                            onClick={() => setSelected(city)} // Chọn một tỉnh/thành phố
                            className={`w-full h-[50px] rounded flex items-center justify-start px-4 border-2 transition 
                            ${selectedCity === city
                                    ? `border-[#00bcc3] bg-[#f4ffff]`
                                    : 'border-gray-300 hover:bg-gray-100'
                                }`}
                        >
                            <span className="text-base">{city}</span>
                        </button>
                    ))}
                </div>
                <hr className="my-4 border-t border-gray-200 w-full" />

                {/* Modal Footer */}
                <div className="p-4 text-center">
                    <button
                        onClick={() => {
                            setSelectedCity(selectedCity); // Cập nhật tỉnh/thành phố ra ngoài
                            closeModal();
                        }}
                        disabled={!selectedCity} // Chỉ cho phép xác nhận nếu đã chọn tỉnh/thành phố
                        className={`px-3 py-3 rounded w-full ${selectedCity
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-300 text-gray-700 cursor-not-allowed'
                            }`}
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CitySelectModal;
