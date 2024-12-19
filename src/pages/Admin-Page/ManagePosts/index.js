import React, { useState, useEffect } from "react";
import "./ManagePosts.css";

const ManagePosts = () => {
  // Dữ liệu mẫu
  const posts = [
    {
      id: 328,
      title: "Bán xe máy cũ sirius",
      productCode: "HAD-909",
      type: "Xe máy",
      price: "10.000.000 VND",
      location: "Đà Nẵng",
      image:
        "https://bloganchoi.com/wp-content/uploads/2019/12/xe-moi-ra-1.jpg", // Ảnh mẫu
    },
    {
      id: 323,
      title: "Bán xe máy cũ SH",
      productCode: "SHD-919",
      type: "Xe máy",
      price: "60.000.000 VND",
      location: "Hà Nội",
      image: "https://tailocnguyen.vn/uploads/news/2022_08/xe-may.jpg",
    },
    {
      id: 983,
      title: "Bán xe máy cũ wave",
      productCode: "WAD-309",
      type: "Xe máy",
      price: "3.000.000 VND",
      location: "Hải Phòng",
      image:
        "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/15/963840/FRONT_2_3_2400X1500.jpg",
    },
    {
      id: 313,
      title: "Bán xe máy cũ Airblack",
      productCode: "AAD-134",
      type: "Xe máy",
      price: "25.000.000 VND",
      location: "Quảng Nam",
      image:
        "https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/qrndqxjwp/2022_05_28/SONR3980.jpg.webp",
    },
    {
      id: 428,
      title: "Bán xe máy cũ R15",
      productCode: "HAD-998",
      type: "Xe máy",
      price: "48.000.000 VND",
      location: "Hồ Chí Minh",
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
    { value: "", label: "Chọn danh mục" },
    { value: "xe-may", label: "Xe Máy số" },
    { value: "xe-tay-ga", label: "Xe tay ga" },
    { value: "xe-tay-con", label: "Xe tay côn" },
    { value: "xe-pkl", label: "Xe phân khối lớn" },
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
      <h2>Quản lý bài đăng</h2>

      {/* Thanh tìm kiếm và bộ lọc */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="nhập tiêu đề hoặc ID"
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
          <option value="">-- Chọn địa điểm thành phố --</option>
          {cities.map((city) => (
            <option key={city.code} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <button className="ok-btn">OK</button>
        <button className="delete-btn-post">xóa</button>
      </div>

      {/* Bảng danh sách bài đăng */}
      <table className="posts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Mã Sản phẩm</th>
            <th>Loại xe</th>
            <th>Giá bán</th>
            <th>Địa điểm</th>
            <th>Hình ảnh</th>
            <th>Chức Năng</th>
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
                <button className="approve-btn-post">Phê duyệt</button>
                <button className="delete-btn-post">xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePosts;
