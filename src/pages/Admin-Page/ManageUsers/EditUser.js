import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const EditUser = () => {
  const { t } = useTranslation("editUser");

  // Dữ liệu mẫu
  const initialData = {
    name: "Lê Văn A",
    email: "A@gmail.com",
    city: t("cities.daNang"),
    status: t("status.active"),
    posts: 15,
    transactions: 5,
    role: t("roles.user"),
  };

  // State lưu trữ thông tin người dùng
  const [userData, setUserData] = useState(initialData);

  // State cho danh sách tỉnh/thành phố
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(initialData.city);

  // Xử lý khi chỉnh sửa input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Xử lý khi chọn tỉnh/thành phố
  const handleCityChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
    setUserData({ ...userData, city: value });
  };

  // Lưu thay đổi
  const handleSave = () => {
    console.log("Saved Data:", userData);
    alert(t("messages.saved"));
  };

  // Hủy chỉnh sửa
  const handleCancel = () => {
    setUserData(initialData);
    setSelectedCity(initialData.city); // Reset lại tỉnh/thành phố
    alert(t("messages.cancelled"));
  };

  // Fetch danh sách tỉnh/thành phố từ API
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

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{t("title")}</h2>
      <form className="grid gap-4">
        {/* Tên */}
        <div>
          <label className="block mb-1 font-medium">{t("fields.name")}</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">{t("fields.email")}</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* Thành phố */}
        <div>
          <label className="block mb-1 font-medium">{t("fields.city")}</label>
          <select
            name="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">{t("choosecity")}</option>
            {cities.map((city) => (
              <option key={city.code} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        {/* Trạng thái */}
        <div>
          <label className="block mb-1 font-medium">{t("fields.status")}</label>
          <select
            name="status"
            value={userData.status}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value={t("status.active")}>{t("status.active")}</option>
            <option value={t("status.inactive")}>{t("status.inactive")}</option>
          </select>
        </div>
        {/* Số bài đăng */}
        <div>
          <label className="block mb-1 font-medium">{t("fields.posts")}</label>
          <input
            type="number"
            name="posts"
            value={userData.posts}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* Giao dịch */}
        <div>
          <label className="block mb-1 font-medium">
            {t("fields.transactions")}
          </label>
          <input
            type="number"
            name="transactions"
            value={userData.transactions}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* Vai trò */}
        <div>
          <label className="block mb-1 font-medium">{t("fields.role")}</label>
          <select
            name="role"
            value={userData.role}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value={t("roles.user")}>{t("roles.user")}</option>
            <option value={t("roles.admin")}>{t("roles.admin")}</option>
            <option value={t("roles.expert")}>{t("roles.expert")}</option>
          </select>
        </div>

        {/* Nút Lưu và Hủy */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
          >
            {t("buttons.save")}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
          >
            {t("buttons.cancel")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
