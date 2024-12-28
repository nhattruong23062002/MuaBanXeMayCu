import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ManagePosts = () => {
  const { t } = useTranslation("managePosts");

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

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(posts);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch cities from API
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          "https://provinces.open-api.vn/api/?depth=1"
        );
        const data = await response.json();
        setCities(data); // Lưu danh sách tỉnh/thành phố
      } catch (error) {
        console.error("Lỗi khi lấy danh sách tỉnh/thành phố:", error);
      }
    };

    fetchCities();
  }, []);

  // Tìm kiếm
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = posts.filter(
      (item) =>
        String(item.id).toLowerCase().includes(value) ||
        item.title.toLowerCase().includes(value) ||
        item.location.toLowerCase().includes(value)
    );

    setFilteredData(filtered || []);
  };

  // Lọc theo thành phố
  const handleCityChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);

    const filtered = posts.filter((post) =>
      value === "" ? true : post.location === value
    );

    setFilteredData(filtered || []);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">{t("title")}</h2>

      {/* Thanh tìm kiếm và bộ lọc */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {/* Tìm kiếm */}
        <input
          type="text"
          placeholder={t("searchPlaceholder")}
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-md w-60 focus:ring focus:ring-blue-300"
        />

        {/* Ô chọn danh mục */}
        <select
          className="p-2 border border-gray-300 rounded-md bg-white w-40 sm:w-48 focus:ring focus:ring-blue-300"
        >
          <option value="">{t("categories.default")}</option>
          <option value="xe-may">{t("categories.bike")}</option>
          <option value="xe-tay-ga">{t("categories.scooter")}</option>
          <option value="xe-tay-con">{t("categories.manualBike")}</option>
          <option value="xe-pkl">{t("categories.largeBike")}</option>
        </select>

        {/* Ô chọn thành phố */}
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="p-2 border border-gray-300 rounded-md bg-white w-40 sm:w-48 focus:ring focus:ring-blue-300"
        >
          <option value="">{t("choosecity")}</option>
          {cities.map((city) => (
            <option key={city.code} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        {/* Nút OK */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          {t("buttons.ok")}
        </button>

        {/* Nút Xóa */}
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">
          {t("buttons.delete")}
        </button>
      </div>

      {/* Bảng danh sách bài đăng */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="table-auto w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">{t("tableHeaders.id")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.title")}</th>
              <th className="px-4 py-2 border-b">
                {t("tableHeaders.productCode")}
              </th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.type")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.price")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.location")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.image")}</th>
              <th className="px-4 py-2 border-b">{t("tableHeaders.actions")}</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" className="mr-2" />
                  {post.id}
                </td>
                <td className="px-4 py-2 border-b">{post.title}</td>
                <td className="px-4 py-2 border-b">{post.productCode}</td>
                <td className="px-4 py-2 border-b">{post.type}</td>
                <td className="px-4 py-2 border-b">{post.price}</td>
                <td className="px-4 py-2 border-b">{post.location}</td>
                <td className="px-4 py-2 border-b">
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700">
                    {t("buttons.approve")}
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 ml-2">
                    {t("buttons.delete")}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePosts;
