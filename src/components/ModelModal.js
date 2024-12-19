import React, { useState } from 'react';

const ModelModal = ({ isOpen, closeModal, brands, setSelectedModel }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Kiểm tra nếu brands tồn tại và là mảng, sau đó lấy tất cả các dòng xe
    const allModels = Array.isArray(brands)
        ? [...new Set(brands.flatMap(brand => brand.models || []))]  // Sử dụng || [] nếu models không tồn tại
        : [];

    // Lọc các dòng xe theo từ khóa tìm kiếm
    const filteredModels = allModels.filter((model) =>
        model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 max-w-full">
            <div className="bg-white rounded-lg shadow-lg w-[900px] max-h-[90vh] overflow-hidden">
                {/* Modal Header */}
                <div className="p-6 border-b">
                    <h2 className="text-2xl font-semibold text-center">Lựa Chọn Dòng Xe</h2>
                    <input
                        type="text"
                        placeholder="Tìm kiếm dòng xe"
                        className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Car Models */}
                <div className="p-6 overflow-y-auto" style={{ maxHeight: '60vh' }}>
                    <div className="grid grid-cols-3 gap-6 justify-items-center">
                        {filteredModels.length > 0 ? (
                            filteredModels.map((model, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedModel(model);
                                        closeModal();
                                    }}
                                    className="flex items-center justify-center w-[200px] h-[50px] bg-white rounded-lg hover:bg-blue-100 transition"
                                >
                                    <span className="text-base font-medium text-center">{model}</span>
                                </button>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">Không tìm thấy dòng xe nào</p>
                        )}
                    </div>
                </div>

                {/* Close Button */}
                <div className="p-6 text-right">
                    <button
                        onClick={closeModal}
                        className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg hover:bg-red-600"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModelModal;
