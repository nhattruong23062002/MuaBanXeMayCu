import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageCars.css"; // Đảm bảo có một file CSS để style các thành phần
import {
  FaMapMarkerAlt,
  FaClock,
  FaPen,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import HidePostModal from "./HidePostModal";
// Giả sử bạn có thông tin xe, ví dụ như sau:
const carInfo = {
  id: 1,
  name: "Xe Vario mới năm 2024",
  price: "23.000.000 VND",
  condition: "Hết bảo hành",
  location: "TP.HCM",
  image1:
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/hinh-anh-xe-may.jpg",
  image2:
    "https://i.pinimg.com/originals/29/85/ae/2985ae8ef7683f84498143b7079ba85e.jpg",
  updatedAt: "Cập nhật 5 giờ trước",
  sellerName: "Lee Min Hoo",
  sellerStatus: "1 Đã bán",
};

const ManageCars = () => {
  // Tạo một state để điều khiển hình ảnh hiển thị
  const [currentImage, setCurrentImage] = useState(carInfo.image1);

  // Hàm để chuyển đổi hình ảnh
  const toggleImage = () => {
    setCurrentImage(
      currentImage === carInfo.image1 ? carInfo.image2 : carInfo.image1
    );
  };
  // Hàm để chuyển ảnh tiếp theo
  const nextImage = () => {
    setCurrentImage(carInfo.image2);
  };

  // Hàm để chuyển ảnh trước
  const prevImage = () => {
    setCurrentImage(carInfo.image1);
  };
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-post/${carInfo.id}`); // Chuyển đến trang chỉnh sửa
  };
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
    console.log(`Ẩn tin "${selectedPost.title}" với lý do: ${reason}`);
    setModalOpen(false);
  };

  return (
    <div className="manage-cars-container">
      <h1>Quản lý thông tin xe đã đăng</h1>

      <div className="car-info">
        <div className="car-image">
          <button
            onClick={prevImage}
            className="image-nav-button image-nav-button-left"
          >
            <FaArrowLeft />
          </button>
          <img
            src={currentImage} // Dùng state để hiển thị hình ảnh
            alt={carInfo.name}
            className="car-main-image"
            onClick={toggleImage} // Click vào ảnh để chuyển đổi
          />
          <div className="thumbnail-images">
            <img
              src={carInfo.image1}
              alt="thumbnail"
              className="thumbnail"
              onClick={() => setCurrentImage(carInfo.image1)} // Chuyển sang ảnh 1 khi click
            />
            <img
              src={carInfo.image2}
              alt="thumbnail"
              className="thumbnail"
              onClick={() => setCurrentImage(carInfo.image2)} // Chuyển sang ảnh 2 khi click
            />
            <button
              onClick={nextImage}
              className="image-nav-button image-nav-button-right"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="car-details">
          <h2>{carInfo.name}</h2>
          <p>Tình trạng xe: {carInfo.condition}</p>
          <p>
            Giá: <span className="price">{carInfo.price}</span>
          </p>
          <p>
            <FaMapMarkerAlt style={{ marginRight: "5px" }} /> Địa chỉ:{" "}
            {carInfo.location}
          </p>
          <p>
            <FaClock style={{ marginRight: "5px" }} /> {carInfo.updatedAt}
          </p>

          <div className="button-container">
            <button onClick={handleEdit} className="btn-update">
              <FaPen style={{ marginRight: "5px" }} />
              Sửa tin
            </button>
            <button
              onClick={() => handleOpenModal(carInfo)}
              className="btn-sell"
            >
              Đã bán/Ẩn tin
            </button>
            {/* Modal Ẩn Tin */}
            <HidePostModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onConfirm={handleConfirmHide}
              postTitle={selectedPost?.title || ""}
            />
          </div>

          <div className="user-info">
            <div className="user-avatar">
              <img
                src="https://kenh14cdn.com/203336854389633024/2024/12/10/img6508jpg-1591784578-15917845-6209-7466-15917848032-1733854484177-17338544927331380039156.jpg"
                alt="User Avatar"
              />
            </div>
            <div className="user-details">
              <h4>{carInfo.sellerName}</h4>
              <p>Phản hồi: {carInfo.sellerStatus}</p>
              <div className="status">
                <span className="active-status"></span>
                <span>Đang hoạt động</span>
              </div>
            </div>
            <div className="user-rating">
              <span className="star">&#9733;</span>
              <span>5,360</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCars;
