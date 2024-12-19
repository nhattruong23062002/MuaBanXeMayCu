import React, { useState } from "react";
import "./CreateAppointment.css";
const CreateAppointment = () => {
  const [certificateImage, setCertificateImage] = useState(null); // State lưu trữ file ảnh

  // Xử lý sự kiện khi người dùng chọn file
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCertificateImage(URL.createObjectURL(file)); // Tạo URL để xem trước ảnh
    }
  };
  // Xử lý xóa ảnh
  const handleImageRemove = () => {
    setCertificateImage(null); // Reset state ảnh về null
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

        {/* Upload ảnh cho Giấy tờ chứng chỉ */}
        <div className="form-group">
          <label>Giấy tờ chứng chỉ:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        {/* Hiển thị ảnh xem trước */}
        {certificateImage && (
          <div className="image-preview">
            <p>Ảnh chứng chỉ:</p>
            <div className="image-container">
              <img src={certificateImage} alt="Chứng chỉ" />
              <button
                type="button"
                className="remove-btn"
                onClick={handleImageRemove}
              >
                X
              </button>
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
