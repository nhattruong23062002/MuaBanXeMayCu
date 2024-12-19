import React, { useState } from "react";
import "./CreateAppointment.css";

const CreateAppointment = () => {
  const [certificateImages, setCertificateImages] = useState([]); // State lưu trữ danh sách ảnh

  // Xử lý khi chọn ảnh
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files); // Lấy danh sách file được chọn
    const newImages = files.map((file) => URL.createObjectURL(file)); // Tạo URL cho từng ảnh
    setCertificateImages([...certificateImages, ...newImages]); // Cập nhật danh sách ảnh
  };

  // Xử lý khi xóa ảnh
  const handleImageRemove = (indexToRemove) => {
    const updatedImages = certificateImages.filter(
      (_, index) => index !== indexToRemove
    );
    setCertificateImages(updatedImages); // Cập nhật danh sách ảnh sau khi xóa
  };

  return (
    <div className="create-appointment-container">
      <h2>Tạo Lịch trình chuyên gia kiểm tra xe </h2>

      <form className="appointment-form">
        <div className="form-group">
          <label>Họ và tên:</label>
          <input type="text" placeholder="Nhập họ và tên" />
        </div>

        <div className="form-group">
          <label>SDT:</label>
          <input type="text" placeholder="Nhập số điện thoại" />
        </div>

        <div className="form-group">
          <label>Địa chỉ:</label>
          <input type="text" placeholder="Nhập địa chỉ" />
        </div>

        <div className="form-group">
          <label>Kinh nghiệm:</label>
          <input type="text" placeholder="Nhập kinh nghiệm" />
        </div>

        {/* Upload nhiều ảnh */}
        <div className="form-group">
          <label>Giấy tờ chứng chỉ:</label>
          <input
            type="file"
            accept="image/*"
            multiple // Cho phép chọn nhiều file
            onChange={handleImageUpload}
          />
        </div>

        {/* Hiển thị ảnh xem trước */}
        {certificateImages.length > 0 && (
          <div className="image-preview">
            <p>Ảnh chứng chỉ:</p>
            <div className="image-grid">
              {certificateImages.map((image, index) => (
                <div key={index} className="image-container">
                  <img src={image} alt={`Chứng chỉ ${index + 1}`} />
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => handleImageRemove(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="form-group">
          <label>Mức giá:</label>
          <input type="text" placeholder="Nhập mức giá" />
        </div>

        <div className="time-slots">
          <label>Giờ trống lịch:</label>
          <div className="time-options">
            <span>7:00-8:00</span>
            <span>9:00-10:00</span>
            <span>13:00-14:00</span>
            <span>15:00-16:00</span>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Xác nhận tạo lịch
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;
