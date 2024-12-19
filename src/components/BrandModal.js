import React from 'react';

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
    if (!isOpen) return null;

    const handleBrandSelect = (brand) => {
        setSelectedBrand(brand.name); // Cập nhật thương hiệu đã chọn
        closeModal(); // Đóng modal thương hiệu
        openModelModal(brand); // Mở modal cho dòng xe của thương hiệu đã chọn
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 max-w-full">
            <div className="bg-gray-100 rounded-lg shadow-lg w-[800px] max-h-[90vh] relative z-60">
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
                    <h2 className="text-2xl font-semibold text-center">Lựa Chọn Thương Hiệu</h2>
                    <input
                        type="text"
                        placeholder="Tìm kiếm thương hiệu..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="mt-4 p-3 border rounded w-full text-xl"
                    />
                </div>

                {/* Popular Brands */}
                <div className="p-6 overflow-x-auto">
                    <h3 className="text-lg font-semibold mb-4">Thương hiệu phổ biến</h3>
                    <div className="flex gap-4 pb-4 whitespace-nowrap min-w-max">
                        {brands
                            .filter((brand) => brand.popular)
                            .map((brand, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleBrandSelect(brand)} // Gọi hàm handleBrandSelect
                                    className="flex flex-col items-center justify-center w-[145px] h-[145px] bg-white rounded-lg hover:bg-blue-100 transition"
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="w-24 h-24 object-contain mb-2"
                                    />
                                    <span className="text-base font-medium text-center">{brand.name}</span>
                                </button>
                            ))}
                    </div>
                </div>

                {/* All Brands */}
                <div className="p-6 border-t">
                    <h3 className="text-lg font-semibold mb-4">Tất cả thương hiệu</h3>
                    <div className="grid grid-cols-5 gap-4 justify-items-center">
                        {filteredBrands.map((brand, index) => (
                            <button
                                key={index}
                                onClick={() => handleBrandSelect(brand)} // Gọi hàm handleBrandSelect
                                className="flex flex-col items-center justify-center w-[145px] h-[145px] bg-white rounded-lg hover:bg-blue-100 transition"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-24 h-24 object-contain mb-2"
                                />
                                <span className="text-base font-medium text-center">{brand.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandModal;
