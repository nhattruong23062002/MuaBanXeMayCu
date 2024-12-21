import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const ColorSelectModal = ({ isOpen, closeModal, setSelectedColor }) => {
    const { t } = useTranslation("colorModal");
    const colors = [
        { name: t('white'), code: '#FFFFFF' },
        { name: t('beige'), code: '#FFFFF0' },
        { name: t('black'), code: '#000000' },
        { name: t('silver'), code: '#C0C0C0' },
        { name: t('gray'), code: '#808080' },
        { name: t('yellow'), code: '#FFFF00' },
        { name: t('brown'), code: '#A52A2A' },
        { name: t('orange'), code: '#FFA500' },
        { name: t('red'), code: '#FF0000' },
        { name: t('pink'), code: '#FFC0CB' },
        { name: t('purple'), code: '#800080' },
        { name: t('green'), code: '#008000' },
        { name: t('blue'), code: '#0000FF' },
        { name: t('skyBlue'), code: '#87CEEB' },
    ];

    const [selectedColor, setSelected] = useState(null); // Lưu màu duy nhất được chọn

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000">
            <div className="relative bg-white rounded-lg shadow-lg w-[800px] max-h-[90vh] overflow-y-auto ">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-3 left-3 text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-200"
                    aria-label={t('closeModal')}
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
                    <h2 className="text-2xl font-semibold text-center">{t('selectColor')}</h2>
                </div>

                {/* Modal Body */}
                <div className="p-4 grid grid-cols-1 gap-4">
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            onClick={() => setSelected(color.name)} // Chỉ chọn một màu
                            className={`w-full h-[50px] rounded flex items-center justify-start px-4 border-2 transition bg-[#F3F4F6] 
                            ${selectedColor === color.name
                                    ? `border-[#00bcc3] bg-[#f4ffff]`
                                    : 'border-gray-300 hover:bg-gray-100'
                                }`}
                        >
                            {/* Hình tròn chứa màu */}
                            <div
                                className="w-6 h-6 rounded-full"
                                style={{ backgroundColor: color.code }}
                            ></div>

                            <span
                                className={"text-base p-2"}
                            >
                                {color.name}
                            </span>
                        </button>
                    ))}
                </div>
                <hr className="my-4 border-t border-gray-200 w-full" />

                {/* Modal Footer */}
                <div className="p-4 text-center">
                    <button
                        onClick={() => {
                            setSelectedColor(selectedColor); // Cập nhật màu ra ngoài
                            closeModal();
                        }}
                        disabled={!selectedColor} // Chỉ cho phép xác nhận nếu đã chọn màu
                        className={`px-3 py-3 rounded w-full ${selectedColor
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-300 text-gray-700 cursor-not-allowed'
                            }`}
                    >
                        {t('confirm')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ColorSelectModal;
