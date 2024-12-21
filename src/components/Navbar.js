import React from "react";
import "./../styles/Navbar.css";
import {
  FaMotorcycle,
  FaHome,
  FaAccessibleIcon,
  FaPen,
  FaShoppingCart,
} from "react-icons/fa"; // Import icon
import { useTranslation } from "react-i18next"; // Import hook useTranslation

const Navbar = () => {
  const { t } = useTranslation("navbar"); // Sử dụng hook để lấy văn bản dịch

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaMotorcycle size={50} color="#FFA500" /> {/* Icon logo */}
        <ul className="nav-links">
          <li>
            <a href="/">
              <FaHome size={20} />
              {t("home")} {/* Dùng key "navbar.home" từ tệp JSON */}
            </a>
          </li>
          <li>
            <a href="/listexp">
              <FaAccessibleIcon size={20} />
              {t("expert")} {/* Key "expert" */}
            </a>
          </li>
          <li>
            <a href="/upload">
              <FaPen size={20} />
              {t("post")} {/* Key "post" */}
            </a>
          </li>
          <li>
            <a href="/shop">
              <FaShoppingCart size={20} />
              {t("store")} {/* Key "store" */}
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="text" className="search-bar" placeholder={t("search")} />{" "}
        {/* Placeholder tìm kiếm */}
        <div className="user-icon">
          <img
            src="https://kenh14cdn.com/203336854389633024/2024/12/10/img6508jpg-1591784578-15917845-6209-7466-15917848032-1733854484177-17338544927331380039156.jpg"
            alt="User"
          />
        </div>
        <a href="/login">
          <button className="login-btn">{t("logout")}</button>{" "}
          {/* Key "navbar.logout" */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
