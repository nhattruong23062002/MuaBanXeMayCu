import React, { useState } from "react";
import "./AddressModal.css";

const AddressModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    city: "",
    district: "",
    ward: "",
    specificAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData); // Gửi dữ liệu về parent component
    onClose(); // Đóng modal
  };

  if (!isOpen) return null; // Không render nếu modal đóng

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Địa chỉ</h2>
        <label>
          Tỉnh, thành phố <span className="required">*</span>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quận, huyện <span className="required">*</span>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phường, xã, thị trấn <span className="required">*</span>
          <input
            type="text"
            name="ward"
            value={formData.ward}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Địa chỉ cụ thể <span className="required">*</span>
          <input
            type="text"
            name="specificAddress"
            value={formData.specificAddress}
            onChange={handleInputChange}
          />
        </label>
        <div className="modal-actions">
          <button className="save-button" onClick={handleSave}>
            XONG
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
