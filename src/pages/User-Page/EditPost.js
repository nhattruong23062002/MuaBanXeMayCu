import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddressModal from "../../components/AddressModal";
import LayoutUser from "../../layout/layoutUser";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useTranslation } from 'react-i18next';


const mockPosts = [
  {
    id: "1",
    title: "Xe Vario mới năm 2024",
    description: "Xe mới, giá 23.000.000 VND, hết bảo hành.",
    price: "23000000",
    condition: "Hết bảo hành",
    category: "xe-may",
    location: "TP.HCM",
    image: [
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/hinh-anh-xe-may.jpg",
      "https://i.pinimg.com/originals/29/85/ae/2985ae8ef7683f84498143b7079ba85e.jpg",
    ],
  },
  {
    id: "2",
    title: "Xe SH 2020",
    description: "Xe SH đời 2020, đã qua sử dụng.",
    price: "45000000",
    condition: "Đã qua sử dụng",
    category: "xe-may",
    location: "Hà Nội",
    image: [
      "https://i.pinimg.com/originals/29/85/ae/2985ae8ef7683f84498143b7079ba85e.jpg",
    ],
  },
];

const EditPost = () => {
  const { t } = useTranslation("editPost");
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [address, setAddress] = useState("");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleSaveAddress = (data) => {
    const formattedAddress = `${data.specificAddress}, ${data.ward}, ${data.district}, ${data.city}`;
    setAddress(formattedAddress);
  };

  useEffect(() => {
    const post = mockPosts.find((item) => item.id === id);
    if (post) {
      setFormData(post);
      setPreviewImages(post.image || []);
    } else {
      console.error("Không tìm thấy bài đăng");
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...newImages]);
    setFormData({
      ...formData,
      image: [...(formData.image || []), ...files],
    });
  };

  const handleRemoveImage = (index) => {
    const updatedPreviewImages = previewImages.filter((_, i) => i !== index);
    const updatedFormImages = formData.image.filter((_, i) => i !== index);

    setPreviewImages(updatedPreviewImages);
    setFormData({ ...formData, image: updatedFormImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu đã chỉnh sửa:", formData);
    navigate(`/product/${id}`);
  };

  if (!formData) {
    return <p>Loading...</p>;
  }

  return (
    <LayoutUser>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6"
      >
        <div className="flex">
          <button
            className="text-2xl mr-4 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">{t("title")}</h1>
        </div>

        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium">
            {t("nameProduct")}
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-[#d59648] focus:border-[#d59648]"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium">
            {t("menu")}
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-[#d59648] focus:border-[#d59648]"
          >
            <option value="xe-may">{t("option1")}</option>
            <option value="o-to">{t("option2")}</option>
            <option value="phu-tung">{t("option3")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-700 font-medium">
            {t("price")}
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-[#d59648] focus:border-[#d59648]"
          />
        </div>

        <div>
          <label
            htmlFor="condition"
            className="block text-gray-700 font-medium"
          >
            {t("status")}
          </label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-[#d59648] focus:border-[#d59648]"
          >
            <option value="Mới">{t("option4")}</option>
            <option value="Đã qua sử dụng">{t("option5")}</option>
            <option value="Hết bảo hành">{t("option6")}</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium"
          >
            {t("description")}
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-[#d59648] focus:border-[#d59648]"
          ></textarea>
        </div>

        <div>
          <label htmlFor="location" className="block text-gray-700 font-medium">
            {t("location")}
          </label>
          <input
            type="text"
            value={address}
            readOnly
            onClick={handleOpenModal}
            placeholder="Nhấn để chọn địa điểm"
            className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-[#d59648] focus:border-[#d59648] cursor-pointer"
          />
          <AddressModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSaveAddress}
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-gray-700 font-medium">
            {t("img")}
          </label>
          <div className="flex gap-4 flex-wrap">
            {previewImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Preview ${index}`}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mt-2"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-[#d59648] text-white font-medium px-6 py-2 rounded-md hover:bg-[#b27939]"
          >
            {t("save")}
          </button>
        </div>
      </form>
    </LayoutUser>
  );
};

export default EditPost;
