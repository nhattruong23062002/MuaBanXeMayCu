import React, { useState } from "react";
import "./CreateAppointment.css";
import { useTranslation } from "react-i18next"; // Import i18n hook

const CreateAppointment = () => {
  const { t } = useTranslation("createAppointment"); // Sử dụng namespace 'createAppointment'
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
      <h2>{t("title")}</h2> {/* Tiêu đề từ JSON */}
      <form className="appointment-form">
        <div className="form-group">
          <label>{t("form.name")}</label>
          <input type="text" placeholder={t("form.namePlaceholder")} />
        </div>

        <div className="form-group">
          <label>{t("form.phone")}</label>
          <input type="text" placeholder={t("form.phonePlaceholder")} />
        </div>

        <div className="form-group">
          <label>{t("form.address")}</label>
          <input type="text" placeholder={t("form.addressPlaceholder")} />
        </div>

        <div className="form-group">
          <label>{t("form.experience")}</label>
          <input type="text" placeholder={t("form.experiencePlaceholder")} />
        </div>

        {/* Upload nhiều ảnh */}
        <div className="form-group">
          <label>{t("form.certificate")}</label>
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
            <p>{t("preview.title")}</p>
            <div className="image-grid">
              {certificateImages.map((image, index) => (
                <div key={index} className="image-container">
                  <img
                    src={image}
                    alt={`${t("preview.certificate")} ${index + 1}`}
                  />
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => handleImageRemove(index)}
                  >
                    {t("preview.removeButton")}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="form-group">
          <label>{t("form.price")}</label>
          <input type="text" placeholder={t("form.pricePlaceholder")} />
        </div>

        <div className="time-slots">
          <label>{t("form.timeSlots")}</label>
          <div className="time-options">
            <span>{t("timeOptions.slot1")}</span>
            <span>{t("timeOptions.slot2")}</span>
            <span>{t("timeOptions.slot3")}</span>
            <span>{t("timeOptions.slot4")}</span>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          {t("submitButton")}
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;
