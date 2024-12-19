import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditPost.css";
import AddressModal from "./AddressModal";

// Dữ liệu mẫu
const mockPosts = [
  {
    id: "1",
    title: "Xe Vario mới năm 2024",
    description: "Xe mới, giá 23.000.000 VND, hết bảo hành.",
    price: "23000000",
    condition: "Hết bảo hành",
    category: "xe-may",
    location: "TP.HCM",
    image: [
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/hinh-anh-xe-may.jpg",
      "https://i.pinimg.com/originals/29/85/ae/2985ae8ef7683f84498143b7079ba85e.jpg",
    ],
  },
  {
    id: "2",
    title: "Xe SH 2020",
    description: "Xe SH đời 2020, đã qua sử dụng.",
    price: "45000000",
    condition: "Đã qua sử dụng",
    category: "xe-may",
    location: "Hà Nội",
    image: [
      "https://i.pinimg.com/originals/29/85/ae/2985ae8ef7683f84498143b7079ba85e.jpg",
    ],
  },
];

const EditPost = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate(); // Điều hướng sau khi lưu
  const [formData, setFormData] = useState(null); // Lưu thông tin bài đăng
  const [previewImages, setPreviewImages] = useState([]); // Hiển thị ảnh xem trước
  const [isModalOpen, setModalOpen] = useState(false);
  const [address, setAddress] = useState("");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleSaveAddress = (data) => {
    const formattedAddress = `${data.specificAddress}, ${data.ward}, ${data.district}, ${data.city}`;
    setAddress(formattedAddress); // Lưu địa chỉ vào state chính
  };

  // Lấy dữ liệu bài đăng từ mockPosts
  useEffect(() => {
    const post = mockPosts.find((item) => item.id === id);
    if (post) {
      setFormData(post);
      setPreviewImages(post.image || []); // Gán danh sách ảnh hiện tại
    } else {
      console.error("Không tìm thấy bài đăng");
    }
  }, [id]);

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Xử lý thêm hình ảnh
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file)); // Hiển thị xem trước
    setPreviewImages([...previewImages, ...newImages]); // Cập nhật danh sách xem trước
    setFormData({
      ...formData,
      image: [...(formData.image || []), ...files], // Thêm file vào formData
    });
  };

  // Xóa một hình ảnh khỏi danh sách
  const handleRemoveImage = (index) => {
    const updatedPreviewImages = previewImages.filter((_, i) => i !== index);
    const updatedFormImages = formData.image.filter((_, i) => i !== index);

    setPreviewImages(updatedPreviewImages); // Cập nhật xem trước
    setFormData({ ...formData, image: updatedFormImages }); // Cập nhật dữ liệu
  };

  // Xử lý lưu thay đổi
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu đã chỉnh sửa:", formData);
    navigate(`/product/${id}`); // Điều hướng sau khi lưu
  };

  if (!formData) {
    return <p>Loading...</p>; // Hiển thị khi dữ liệu chưa sẵn sàng
  }

  return (
    <form onSubmit={handleSubmit} className="edit-post-form">
      <h1>Chỉnh sửa bài đăng</h1>

      {/* Tên bài đăng */}
      <label htmlFor="title">Tên sản phẩm</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />

      {/* Danh mục */}
      <label htmlFor="category">Danh mục</label>
      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
      >
        <option value="xe-may">Xe Máy</option>
        <option value="o-to">Ô Tô</option>
        <option value="phu-tung">Phụ Tùng</option>
      </select>

      {/* Giá */}
      <label htmlFor="price">Giá</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
        required
      />

      {/* Tình trạng */}
      <label htmlFor="condition">Tình trạng</label>
      <select
        name="condition"
        value={formData.condition}
        onChange={handleInputChange}
      >
        <option value="Mới">Mới</option>
        <option value="Đã qua sử dụng">Đã qua sử dụng</option>
        <option value="Hết bảo hành">Hết bảo hành</option>
      </select>

      {/* Mô tả */}
      <label htmlFor="description">Mô tả</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      ></textarea>

      {/* Địa điểm */}
      {/* Trường địa chỉ */}
      <label htmlFor="location">Địa điểm</label>
      <div>
        <input
          type="text"
          value={address}
          readOnly
          onClick={handleOpenModal}
          placeholder="Nhấn để chọn địa điểm"
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Hiển thị modal */}
      <AddressModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveAddress}
      />

      {/* Hình ảnh */}
      <label htmlFor="image">Hình ảnh</label>
      <div className="image-preview">
        {previewImages.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Preview ${index}`} />
            <button
              type="button"
              className="remove-btn"
              onClick={() => handleRemoveImage(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <input
        type="file"
        name="image"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />

      {/* Nút Lưu */}
      <button type="submit" className="save-button">
        Lưu thay đổi
      </button>
    </form>
  );
};

export default EditPost;
