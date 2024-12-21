import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
const KilometerSelectModal = ({ isOpen, closeModal, setSelectedKilometer }) => {
    const { t } = useTranslation("kilometerSelectModal");
    const kilometerOptions = [
        t('under5000km'),
        t('under10000km'),
        t('under20000km'),
        t('under30000km'),
        t('under40000km'),
        t('under50000km'),
        t('under60000km'),
        t('under70000km'),
        t('under80000km'),
        t('under90000km'),
        t('under100000km'),
        t('under110000km'),
        t('under120000km'),
        t('under130000km'),
        t('under140000km'),
        t('under150000km'),
        t('under160000km'),
        t('under170000km')
    ];

    const [selectedKilometer, setSelected] = useState(null); // State để lưu tùy chọn đã chọn

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
                <div className="p-2 border-b">
                    <h2 className="text-2xl font-semibold text-center">{t("title")}</h2>
                </div>

                {/* Modal Body */}
                <div className="p-2 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-2 px-1.5">
                        {kilometerOptions.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelectedKilometer(option);
                                    setSelected(option);
                                    closeModal();
                                }}
                                className={`w-full flex items-center justify-start h-[50px] transition px-4 rounded
                                    ${selectedKilometer === option
                                        ? 'bg-[#f4ffff] border border-solid border-[#00bcc3]'
                                        : 'bg-gray-100 hover:bg-blue-100'
                                    }`}
                            >
                                <span className="text-base font-normal">{option}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KilometerSelectModal;
