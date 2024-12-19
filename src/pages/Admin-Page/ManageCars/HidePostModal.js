import React, { useState } from "react";
import "./HidePostModal.css";

const carInfo = {
  name: "Xe Vario mới năm 2024",
};
const HidePostModal = ({ isOpen, onClose, onConfirm }) => {
  const [reason, setReason] = useState("");

  const handleConfirm = () => {
    if (!reason) {
      alert("Vui lòng chọn lý do ẩn tin!");
      return;
    }
    onConfirm(reason); // Gửi lý do về parent
    onClose(); // Đóng modal
  };

  if (!isOpen) return null; // Không render nếu modal đóng

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Ẩn tin {carInfo.name}</h2>
        <p>
          Khi bạn đã bán được hàng, hoặc không muốn tin xuất hiện trên Vipxe,
          hãy chọn "Ẩn tin".
          <br />
        </p>
        <p className="reason-instruction">Vui lòng chọn lý do ẩn tin:</p>

        {/* Lý do ẩn tin */}
        <form>
          <label>
            <input
              type="radio"
              name="reason"
              value="Không muốn bán nữa"
              onChange={(e) => setReason(e.target.value)}
            />
            Không muốn bán nữa
          </label>
          <label>
            <input
              type="radio"
              name="reason"
              value="Đã bán qua trang Chợ Tốt"
              onChange={(e) => setReason(e.target.value)}
            />
            Đã bán qua trang Vipxe
          </label>
          <label>
            <input
              type="radio"
              name="reason"
              value="Đã bán qua các kênh khác"
              onChange={(e) => setReason(e.target.value)}
            />
            Đã bán qua các kênh khác
          </label>
          <label>
            <input
              type="radio"
              name="reason"
              value="Tôi bị làm phiền vì môi giới/dịch vụ đăng tin"
              onChange={(e) => setReason(e.target.value)}
            />
            Tôi bị làm phiền vì môi giới/dịch vụ đăng tin
          </label>
          <label>
            <input
              type="radio"
              name="reason"
              value="Khác"
              onChange={(e) => setReason(e.target.value)}
            />
            Khác
          </label>
        </form>

        {/* Nút Hủy và Xác nhận */}
        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            Hủy
          </button>
          <button className="confirm-button" onClick={handleConfirm}>
            Ẩn tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default HidePostModal;
