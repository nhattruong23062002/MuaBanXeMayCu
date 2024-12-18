import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import LayoutUser from "../../layout/layoutUser";

const Upload = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (e) => {
        const files = e.target.files;
        const fileArray = Array.from(files);
        setSelectedImages((prevImages) => [
            ...prevImages,
            ...fileArray.map((file) => ({ file, isDeleted: false })),
        ]); // Lưu tất cả ảnh vào danh sách, đánh dấu là chưa xóa
    };

    const handleImageRemove = (index) => {
        // Đánh dấu ảnh là đã xóa thay vì loại bỏ khỏi mảng
        const updatedImages = [...selectedImages];
        updatedImages[index].isDeleted = true; // Đánh dấu ảnh là đã xóa
        setSelectedImages(updatedImages);
    };

    return (
        <LayoutUser>
            <div className="flex justify-center items-start min-h-screen bg-gray-200 pt-10">
                <div className="w-[800px] p-4 bg-white rounded-xl shadow-lg">
                    <hr className="my-4 border-t border-gray-400 w-full" />

                    {/* Dòng chữ Upload Motobike và nút chuyển hướng */}
                    <div className="flex justify-start items-center space-x-4">

                        {/* Nút chuyển hướng */}
                        <button className="bg-white text-blue-500 p-2 rounded-full shadow hover:bg-blue-200 transition duration-300">
                            <FaArrowLeft />
                        </button>

                        {/* Dòng chữ */}
                        <span className="text-base font-semibold text-gray-500">Đăng tải xe để bán</span>

                    </div>

                    <hr className="my-4 border-t border-gray-400 w-full" />

                    {/* Your Motobike's Image Section */}
                    <div className="my-6">
                        <div className="flex justify-start items-center space-x-4">
                            {/* Dòng chữ */}
                            <div>
                                <p className="text-lg font-semibold text-gray-700">Ảnh xe máy của bạn:</p>
                                <p className="text-sm text-gray-500">Bạn cần phải đăng tải từ 3-6 ảnh</p>
                            </div>

                            {/* Nút upload và input */}
                            <div className="flex items-center space-x-2 mt-3">
                                <label
                                    htmlFor="upload"
                                    className="bg-white text-blue-500 p-2 rounded-full shadow cursor-pointer hover:bg-gray-300 transition duration-300"
                                >
                                    <FaCloudUploadAlt />
                                </label>
                                <input
                                    type="file"
                                    id="upload"
                                    className="hidden"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>

                        {/* Hiển thị các ảnh đã chọn */}
                        <div className="flex space-x-4 mt-4">
                            {selectedImages.map((image, index) => (
                                <div key={index} className="relative">
                                    {/* Ảnh đã chọn, chỉ hiển thị nếu ảnh chưa bị xóa */}
                                    {!image.isDeleted && (
                                        <img
                                            src={URL.createObjectURL(image.file)}
                                            alt={`selected-img-${index}`}
                                            className="w-24 h-24 object-cover rounded-lg shadow-md"
                                        />
                                    )}

                                    {/* Nút xóa nếu ảnh chưa bị xóa */}
                                    {!image.isDeleted && (
                                        <button
                                            onClick={() => handleImageRemove(index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full shadow hover:bg-red-600 transition duration-300"
                                        >
                                            <MdOutlineDelete />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
};

export default Upload;
