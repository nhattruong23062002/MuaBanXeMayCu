import React from 'react';
import { useTranslation } from 'react-i18next';

const BrandModal = ({
    isOpen,
    closeModal,
    brands,
    filteredBrands,
    searchText,
    setSearchText,
    setSelectedBrand,
    openModelModal, // Hàm này để mở modal chọn dòng xe sau khi chọn thương hiệu
}) => {
    const { t } = useTranslation("brandModal");
    if (!isOpen) return null;

    const handleBrandSelect = (brand) => {
        setSelectedBrand(brand.name); // Cập nhật thương hiệu đã chọn
        closeModal(); // Đóng modal thương hiệu
        openModelModal(brand); // Mở modal cho dòng xe của thương hiệu đã chọn
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-100 rounded-lg shadow-lg w-[90%] sm:w-[600px] md:w-[800px] max-h-[90vh] relative overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-200"
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
                    <h2 className="text-xl sm:text-2xl font-semibold text-center">{t("title")}</h2>
                    <input
                        type="text"
                        placeholder={t("searchPlaceholder")}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="mt-4 p-2 sm:p-3 border rounded w-full text-base sm:text-xl"
                    />
                </div>

                {/* Popular Brands */}
                <div className="p-4 sm:p-6 overflow-x-auto">
                    <h3 className="text-base sm:text-lg font-semibold mb-4">{t("popularBrands")}</h3>
                    <div className="flex gap-3 sm:gap-4 pb-4 whitespace-nowrap min-w-max">
                        {brands
                            .filter((brand) => brand.popular)
                            .map((brand, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleBrandSelect(brand)}
                                    className="flex flex-col items-center justify-center w-[100px] sm:w-[145px] h-[100px] sm:h-[145px] bg-white rounded-lg hover:bg-blue-100 transition"
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="w-16 sm:w-24 h-16 sm:h-24 object-contain mb-1 sm:mb-2"
                                    />
                                    <span className="text-xs sm:text-base font-medium text-center">{brand.name}</span>
                                </button>
                            ))}
                    </div>
                </div>

                {/* All Brands */}
                <div className="p-4 sm:p-6 border-t">
                    <h3 className="text-base sm:text-lg font-semibold mb-4">{t("allBrands")}</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 justify-items-center">
                        {filteredBrands.map((brand, index) => (
                            <button
                                key={index}
                                onClick={() => handleBrandSelect(brand)}
                                className="flex flex-col items-center justify-center w-[100px] sm:w-[145px] h-[100px] sm:h-[145px] bg-white rounded-lg hover:bg-blue-100 transition"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-16 sm:w-24 h-16 sm:h-24 object-contain mb-1 sm:mb-2"
                                />
                                <span className="text-xs sm:text-base font-medium text-center">{brand.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandModal;
