import React, { useState, useEffect } from "react";
import "./ManagePosts.css";
import { useTranslation } from "react-i18next"; // Import i18n hook

const ManagePosts = () => {
  const { t } = useTranslation("managePosts"); // Sử dụng namespace `managePosts`

  // Dữ liệu mẫu
  const posts = [
    {
      id: 328,
      title: t("posts.0.title"),
      productCode: "HAD-909",
      type: t("posts.0.type"),
      price: "10.000.000 VND",
      location: t("posts.0.location"),
      image:
        "https://bloganchoi.com/wp-content/uploads/2019/12/xe-moi-ra-1.jpg",
    },
    {
      id: 323,
      title: t("posts.1.title"),
      productCode: "SHD-919",
      type: t("posts.1.type"),
      price: "60.000.000 VND",
      location: t("posts.1.location"),
      image: "https://tailocnguyen.vn/uploads/news/2022_08/xe-may.jpg",
    },
    {
      id: 983,
      title: t("posts.2.title"),
      productCode: "WAD-309",
      type: t("posts.2.type"),
      price: "3.000.000 VND",
      location: t("posts.2.location"),
      image:
        "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/15/963840/FRONT_2_3_2400X1500.jpg",
    },
    {
      id: 313,
      title: t("posts.3.title"),
      productCode: "AAD-134",
      type: t("posts.3.type"),
      price: "25.000.000 VND",
      location: t("posts.3.location"),
      image:
        "https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/qrndqxjwp/2022_05_28/SONR3980.jpg.webp",
    },
    {
      id: 428,
      title: t("posts.4.title"),
      productCode: "HAD-998",
      type: t("posts.4.type"),
      price: "48.000.000 VND",
      location: t("posts.4.location"),
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGKhothietke.net-03202.png",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(""); // Lưu lựa chọn người dùng
  const [searchTerm, setSearchTerm] = useState(""); // Lưu từ khóa tìm kiếm
  const [filteredData, setFilteredData] = useState(posts); // Lưu dữ liệu được lọc

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Lọc dữ liệu dựa trên ID và tiêu đề
    const filtered = posts.filter(
      (item) =>
        String(item.id).toLowerCase().includes(value) || // Lọc theo ID
        item.title.toLowerCase().includes(value) || // Lọc theo tiêu đề
        item.location.toLowerCase().includes(value)
    );

    setFilteredData(filtered || []); // Cập nhật dữ liệu đã lọc
  };

  // Dữ liệu danh mục
  const categories = [
    { value: "", label: t("categories.default") },
    { value: "xe-may", label: t("categories.bike") },
    { value: "xe-tay-ga", label: t("categories.scooter") },
    { value: "xe-tay-con", label: t("categories.manualBike") },
    { value: "xe-pkl", label: t("categories.largeBike") },
  ];
  // Xử lý sự kiện thay đổi lựa chọn
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    console.log("Lựa chọn: ", e.target.value);
  };
  const [cities, setCities] = useState([]); // State lưu danh sách tỉnh/thành phố
  const [selectedCity, setSelectedCity] = useState(""); // State lưu tỉnh/thành phố được chọn

  // Gọi API khi component được render
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          "https://provinces.open-api.vn/api/?depth=1"
        );
        const data = await response.json();
        setCities(data); // Lưu dữ liệu tỉnh/thành phố vào state
      } catch (error) {
        console.error("Lỗi khi lấy danh sách tỉnh/thành phố:", error);
      }
    };

    fetchCities();
  }, []);
  // Xử lý sự kiện khi thay đổi lựa chọn trong dropdown
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    console.log("Thành phố được chọn:", e.target.value);
  };

  return (
    <div className="manage-posts-container">
      <h2>{t("title")}</h2>

      {/* Thanh tìm kiếm và bộ lọc */}
      <div className="filter-section">
        <input
          type="text"
          placeholder={t("searchPlaceholder")}
          value={searchTerm}
          onChange={handleSearch}
        />

        <select
          value={selectedOption}
          onChange={handleChange}
          className="filter-category-select"
        >
          {categories.map((category, index) => (
            <option key={index} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <select
          id="city-select"
          value={selectedCity}
          onChange={handleCityChange}
          className="city-dropdown"
        >
          <option value="">-- {t("choosecity")} --</option>
          {cities.map((city) => (
            <option key={city.code} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <button className="ok-btn">{t("buttons.ok")}</button>
        <button className="delete-btn-post">{t("buttons.delete")}</button>
      </div>

      {/* Bảng danh sách bài đăng */}
      <table className="posts-table">
        <thead>
          <tr>
            <th>{t("tableHeaders.id")}</th>
            <th>{t("tableHeaders.title")}</th>
            <th>{t("tableHeaders.productCode")}</th>
            <th>{t("tableHeaders.type")}</th>
            <th>{t("tableHeaders.price")}</th>
            <th>{t("tableHeaders.location")}</th>
            <th>{t("tableHeaders.image")}</th>
            <th>{t("tableHeaders.actions")}</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((post) => (
            <tr key={post.id}>
              <td>
                <input className="id-icon" type="checkbox" />
                {post.id}
              </td>
              <td className="post-title">{post.title}</td>
              <td>{post.productCode}</td>
              <td>{post.type}</td>
              <td>{post.price}</td>
              <td>{post.location}</td>
              <td>
                <img src={post.image} alt="Hình ảnh xe" />
              </td>
              <td>
                <button className="approve-btn-post">
                  {t("buttons.approve")}
                </button>
                <button className="delete-btn-post">
                  {t("buttons.delete")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePosts;
