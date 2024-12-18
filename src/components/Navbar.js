import React from "react";
import "./Navbar.css"; // File CSS để style cho navbar
import {
  FaMotorcycle,
  FaHome,
  FaAccessibleIcon,
  FaPen,
  FaShoppingCart,
} from "react-icons/fa"; // Import icon

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Sử dụng FaMotorcycle trực tiếp như một component */}
        <FaMotorcycle size={50} color="#FFA500" />{" "}
        {/* Tùy chỉnh kích thước và màu sắc */}
        <ul className="nav-links">
          <li>
            <a href="/">
              <FaHome size={20} />
              Trang chủ
            </a>
          </li>
          <li>
            <a href="/experts">
              <FaAccessibleIcon size={20} />
              Chuyên gia
            </a>
          </li>
          <li>
            <a href="/post">
              <FaPen size={20} />
              Đăng tin
            </a>
          </li>
          <li>
            <a href="/shop">
              <FaShoppingCart size={20} />
              Cửa hàng
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="text" className="search-bar" placeholder="Tìm kiếm..." />
        <div className="user-icon">
          <img src="/path-to-user-icon.png" alt="User" />
        </div>
        <button className="login-btn">Login/Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
