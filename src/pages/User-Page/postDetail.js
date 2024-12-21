import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaArrowLeft,
  FaEdit,
} from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import LayoutUser from "../../layout/layoutUser";
import HidePostModal from "../../components/HidePostModal";

const carInfo = {
  name: "Xe Vario mới năm 2024",
  price: "23.000.000 VND",
  condition: "Hết bảo hành",
  location: "170 Phạm Văn Đồng",
  images: [
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/hinh-anh-xe-may.jpg",
    "https://i.pinimg.com/originals/29/85/ae/2985ae8ef7683f84498143b7079ba85e.jpg",
  ],
  updatedAt: "Cập nhật 5 giờ trước",
  sellerName: "Name User",
  sellerStatus: "1 đã bán",
};

const PostDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpenModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  const handleConfirmHide = (reason) => {
    alert(`Ẩn tin "${selectedPost.title}" với lý do: ${reason}`);
    setModalOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carInfo.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carInfo.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleShowEditPost = () => {
    navigate(`/editPost/1`);
  };

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto py-6">
        <div className="flex items-center mb-4">
          <button
            className="text-xl sm:text-2xl mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="text-lg sm:text-2xl font-bold">Chỉnh sửa thông tin bài đăng</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
          <div>
            <div className="relative">
              <img
                src={carInfo.images[currentIndex]}
                alt={carInfo.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={handlePrevImage}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-md hover:bg-opacity-70"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={handleNextImage}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-md hover:bg-opacity-70"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="flex mt-4 space-x-4">
              {carInfo.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={`w-20 h-16 object-cover rounded-md cursor-pointer hover:ring-2 ${
                    currentIndex === index ? "ring-[#d59648]" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{carInfo.name}</h2>
            <p className="mt-2 text-gray-600">
              Tình trạng xe: {carInfo.condition}
            </p>
            <p className="mt-2 text-red-500 text-xl font-bold">
              {carInfo.price}
            </p>
            <p className="mt-2 flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2" /> {carInfo.location}
            </p>
            <p className="mt-2 flex items-center text-gray-600">
              <FaClock className="mr-2" /> {carInfo.updatedAt}
            </p>

            <div className="flex mt-4 space-x-4">
              <button
                className="flex items-center px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={handleShowEditPost}
              >
                <FaEdit />
                Sửa tin
              </button>
              <button
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                onClick={() => handleOpenModal(carInfo)}
              >
                Ẩn tin
              </button>
              <HidePostModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmHide}
                postTitle={selectedPost?.title || ""}
              />
            </div>

            <div className="mt-6 flex items-center">
              <img
                src="https://kenh14cdn.com/203336854389633024/2024/12/10/img6508jpg-1591784578-15917845-6209-7466-15917848032-1733854484177-17338544927331380039156.jpg"
                alt="User Avatar"
                className="w-12 h-12 object-cover rounded-full border"
              />
              <div className="ml-4">
                <h4 className="text-lg font-bold">{carInfo.sellerName}</h4>
                <p className="text-sm text-gray-600">
                  Phản hồi: {carInfo.sellerStatus}
                </p>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <span className="mr-1">●</span>
                  <span>Đang hoạt động</span>
                </div>
              </div>
              <div className="ml-auto flex items-center space-x-1 text-yellow-500">
                <span className="text-lg">&#9733;</span>
                <span>5,360</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default PostDetail;
