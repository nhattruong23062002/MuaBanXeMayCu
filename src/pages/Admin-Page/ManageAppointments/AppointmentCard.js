import React from "react";
import { FaPhoneAlt, FaInfoCircle, FaClock } from "react-icons/fa"; // Import các icon từ react-icons

const AppointmentCard = ({
  id,
  name,
  phone,
  time,
  initials,
  color,
  status,
}) => {
  return (
    <div className="appointment-card">
      <p>
        <b>{id}</b> {name}
      </p>
      <p>
        <FaPhoneAlt style={{ color: "#007bff", marginRight: "5px" }} />{" "}
        {/* Icon điện thoại */}
        {phone}
      </p>
      <p>
        <FaInfoCircle style={{ color: "#28a745", marginRight: "5px" }} />{" "}
        {/* Icon trạng thái */}
        {status}
      </p>
      <p>
        <FaClock style={{ color: "#f39c12", marginRight: "5px" }} />{" "}
        {/* Icon thời gian */}
        {time}
      </p>
      <div className="initials" style={{ backgroundColor: color }}>
        {initials}
      </div>
    </div>
  );
};

export default AppointmentCard;
