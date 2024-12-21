import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { PiRoadHorizonFill } from "react-icons/pi";
import { FaThList } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineDescription } from "react-icons/md";
import LayoutUser from "../../layout/layoutUser";
import BrandModal from "../../components/BrandModal";
import ModelModal from "../../components/ModelModal";
import YearSelectModal from "../../components/YearSelectModal";
import KilometerSelectModal from "../../components/KilometerSelectModal";
import { useNavigate } from 'react-router-dom';
import ColorSelectModal from "../../components/ColorSelectModal";
import CitySelectModal from "../../components/CityModal";

const Upload = () => {

    const { t } = useTranslation("upload");

    const [selectedImages, setSelectedImages] = useState([]);
    const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
    const [isModelModalOpen, setIsModelModalOpen] = useState(false);
    const [isSelectYearModalOpen, setIsSelectYearModalOpen] = useState(false);
    const [isKilometerModalOpen, setKilometerModalOpen] = useState(false);
    const [isColorModalOpen, setColorModalOpen] = useState(false);
    const [isCityModalOpen, setCityModalOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedKilometer, setSelectedKilometer] = useState(null);
    const [selectedColors, setSelectedColors] = useState(null);
    const [selectedCities, setSelectedCities] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [licensePlate, setLicensePlate] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const onBackToHome = (event) => {
        navigate("/");
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleChange = (e) => {
        setLicensePlate(e.target.value);
    };
    const brands = [
        { id: 1, name: "Honda", popular: true, logo: "https://th.bing.com/th?id=OIP.pYok5BYTwzbf0dL_68PtvAHaEY&w=324&h=192&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2s", models: ["CBR600RR", "CRF450R", "CB500X"] },
        { id: 2, name: "Yamaha", popular: true, logo: "https://th.bing.com/th?id=OIP.W6KEY-xzN8mEJvZ9CvIZhAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", models: ["CBR600RR", "CRF450R", "CB500X"] },
        { id: 3, name: "Piaggio", popular: true, logo: "https://th.bing.com/th?id=OIP.w6OrEvq-75Hv9cax1lO6KAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", models: ["CBR600RR", "CRF450R", "CB500X"] },
        { id: 4, name: "Suzuki", popular: true, logo: "https://th.bing.com/th?id=OIP.Ig_AaWRN--8S3F-v7QfExgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", models: ["CBR600RR", "CRF450R", "CB500X"] },
        { id: 5, name: "SYM", popular: true, logo: "https://th.bing.com/th/id/OIP.MiSRlZFWVEmZoEjTBQyujgAAAA?w=127&h=100&c=7&r=0&o=5&pid=1.7", models: ["CBR600RR", "CRF450R", "CB500X"] },
        { id: 6, name: "Aprilia", popular: false, logo: "https://th.bing.com/th?id=OIP.ldZyxsilOOFFa8hiigcUpQHaEK&w=250&h=130&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", models: ["CBR600RR", "CRF450R", "CB500X"] },
        { id: 7, name: "Bajaj", popular: false, logo: "https://th.bing.com/th?id=OIP.xvkJCFyDE--5MBwboUjyXgHaE0&w=309&h=201&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", models: ["CBR600RR", "CRF450R", "CB500X"] },
        { id: 8, name: "Benelli", popular: false, logo: "https://th.bing.com/th?id=OIP.T-5w2gy_xZUyKA0QTTJekgHaDg&w=350&h=165&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", models: ["CBR600RR", "CRF450R", "CB500X"] },
        { id: 9, name: "BMW", popular: true, logo: "https://th.bing.com/th?id=OIP.WcE6FD98vwiz8dGExsW8EAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", models: ["CBR600RR", "CRF450R", "CB500X"] },
        { id: 10, name: "Ducati", popular: true, logo: "https://th.bing.com/th?id=OIP.6NfF4G9W4GrQwDGUVw4O6wHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", models: ["CBR600RR", "CRF450R", "CB500X"] },
    ];

    const openKilometerModal = () => {
        setKilometerModalOpen(true);
    }

    const openColorModal = () => {
        setColorModalOpen(true);
    }

    const openCityModal = () => {
        setCityModalOpen(true);
    }
    const openYearModal = () => {
        setIsSelectYearModalOpen(true);
        console.log(isSelectYearModalOpen);
    }
    const closeYearModal = () => setIsSelectYearModalOpen(false);

    const openBrandModal = () => setIsBrandModalOpen(true);
    const closeBrandModal = () => setIsBrandModalOpen(false);

    const filteredBrands = brands.filter((brand) =>
        brand.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const closeModelModal = () => setIsModelModalOpen(false);

    const openModelModal = (brand) => {
        setSelectedBrand(brand.name);
        setIsModelModalOpen(true);
    };

    const handleBrandSelect = (brand) => {
        setSelectedBrand(brand.name);
        setSelectedModel("");
        closeBrandModal(); // Đóng modal thương hiệu
        openModelModal(brand); // Mở modal model cho thương hiệu đã chọn
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        const fileArray = Array.from(files);
        setSelectedImages((prevImages) => [
            ...prevImages,
            ...fileArray.map((file) => ({ file, isDeleted: false })),
        ]); // Lưu tất cả ảnh vào danh sách, đánh dấu là chưa xóa
    };

    const handleImageRemove = (index) => {
        // Đánh dấu ảnh là đã xóa thay vì loại bỏ khỏi mảng
        const updatedImages = [...selectedImages];
        updatedImages[index].isDeleted = true; // Đánh dấu ảnh là đã xóa
        setSelectedImages(updatedImages);
    };

    useEffect(() => {
        if (selectedBrand) {
            setIsModelModalOpen(true);
        }
    }, [selectedBrand]);

    return (
        <LayoutUser>
            <div className="flex justify-center items-start min-h-screen bg-gray-200 pt-10">
                <div className="w-[800px] p-4 bg-white rounded-xl shadow-lg">
                    <hr className="my-4 border-t border-gray-400 w-full" />

                    {/* Dòng chữ Upload Motobike và nút chuyển hướng */}
                    <div className="flex justify-start items-center space-x-4">

                        {/* Nút chuyển hướng */}
                        <button onClick={onBackToHome} className="bg-white text-blue-500 p-2 rounded-full shadow hover:bg-blue-200 transition duration-300">
                            <FaArrowLeft />
                        </button>

                        {/* Dòng chữ */}
                        <span className="text-base font-semibold text-gray-500">{t("uploadMotorbike")}</span>

                    </div>

                    <hr className="my-4 border-t border-gray-400 w-full" />

                    {/* Your Motobike's Image Section */}
                    <div className="my-6">
                        <div className="flex justify-start items-center space-x-4">
                            {/* Dòng chữ */}
                            <div>
                                <p className="text-lg font-semibold text-gray-700">{t("uploadImages")}</p>
                                <p className="text-sm text-gray-500">{t("uploadImagesHelp")}</p>
                            </div>

                            {/* Nút upload và input */}
                            <div className="flex items-center space-x-2 mt-3">
                                <label
                                    htmlFor="upload"
                                    className="bg-white text-blue-500 p-2 rounded-full shadow cursor-pointer hover:bg-gray-300 transition duration-300"
                                >
                                    <FaCloudUploadAlt />
                                </label>
                                <input
                                    type="file"
                                    id="upload"
                                    className="hidden"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>

                        {/* Hiển thị các ảnh đã chọn */}
                        <div className="flex space-x-4 mt-4">
                            {selectedImages.map((image, index) => (
                                <div key={index} className="relative">
                                    {/* Ảnh đã chọn, chỉ hiển thị nếu ảnh chưa bị xóa */}
                                    {!image.isDeleted && (
                                        <img
                                            src={URL.createObjectURL(image.file)}
                                            alt={`selected-img-${index}`}
                                            className="w-24 h-24 object-cover rounded-lg shadow-md"
                                        />
                                    )}

                                    {/* Nút xóa nếu ảnh chưa bị xóa */}
                                    {!image.isDeleted && (
                                        <button
                                            onClick={() => handleImageRemove(index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full shadow hover:bg-red-600 transition duration-300"
                                        >
                                            <MdOutlineDelete />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <hr className="my-4 border-t border-gray-200 w-full" />
                    </div>
                    {/* Select Vehicle Brand */}
                    <div className="my-6">
                        <p className="text-lg font-semibold text-gray-700 ">{t("chooseVehicleBrand")}</p>
                        <div className="relative">
                            <FaThList className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <button
                                onClick={openBrandModal}
                                className="bg-white text-black p-2 pl-10 rounded shadow hover:bg-gray-200 font-semibold text-gray-400 transition duration-300 w-full h-14 text-left flex items-center justify-between"
                            >
                                {selectedBrand ? selectedBrand : t("placeholderVehicleBrand")}
                                <span className="text-gray-400">▼</span>
                            </button>
                        </div>
                    </div>
                    {/* Brand Modal */}
                    <BrandModal
                        isOpen={isBrandModalOpen}
                        closeModal={closeBrandModal}
                        brands={brands}
                        filteredBrands={filteredBrands}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        setSelectedBrand={setSelectedBrand}
                        openModelModal={openModelModal}
                    />
                    <ModelModal
                        isOpen={isModelModalOpen}
                        closeModal={closeModelModal}
                        models={selectedBrand ? brands.find(brand => brand.name === selectedBrand).models : []}
                        setSelectedModel={setSelectedModel}
                    />
                    {/* Year Section */}
                    <div className="my-6">
                        <p className="text-lg font-semibold text-gray-700">{t("selectYear")}</p>
                        <div className="flex items-center bg-white text-black p-2 rounded shadow hover:bg-gray-200 font-semibold text-gray-400 transition duration-300 w-full h-14">
                            {/* Icon bên trái */}
                            <FaCalendarDays className="text-gray-400 mr-2 ml-1" />

                            {/* Nút chọn năm */}
                            <button
                                onClick={openYearModal}
                                className="flex-1 bg-transparent text-left flex items-center justify-between outline-none"
                            >
                                {selectedYear ? selectedYear : t("placeholderYear")}
                                <span className="text-gray-400">▼</span>
                            </button>
                        </div>
                    </div>

                    <YearSelectModal
                        isOpen={isSelectYearModalOpen}
                        closeModal={closeYearModal}
                        setSelectedYear={setSelectedYear}
                    />

                    {/* Kilometer Select */}
                    <div className="my-6">
                        <p className="text-lg font-semibold text-gray-700">{t("selectKilometer")}</p>
                        <div className="flex items-center bg-white text-black p-2 rounded shadow hover:bg-gray-200 font-semibold text-gray-400 transition duration-300 w-full h-14">
                            {/* Icon bên trái */}
                            <PiRoadHorizonFill className="text-gray-400 mr-2 ml-1" />

                            {/* Nút chọn số km */}
                            <button
                                onClick={openKilometerModal}
                                className="flex-1 bg-transparent text-left flex items-center justify-between outline-none"
                            >
                                {selectedKilometer ? selectedKilometer : t("placeholderKilometer")}
                                <span className="text-gray-400">▼</span>
                            </button>
                        </div>
                    </div>

                    <KilometerSelectModal
                        isOpen={isKilometerModalOpen}
                        closeModal={() => setKilometerModalOpen(false)}
                        setSelectedKilometer={setSelectedKilometer}
                    />
                    {/* Color Select */}
                    <div className="my-6">
                        <p className="text-lg font-semibold text-gray-700">{t("selectColor")}</p>
                        <div className="flex items-center bg-white text-black p-2 rounded shadow hover:bg-gray-200 font-semibold text-gray-400 transition duration-300 w-full h-14">
                            {/* Icon bên trái */}
                            <IoColorPaletteOutline className="text-gray-400 ml-1 mr-2" />

                            {/* Nút chọn màu */}
                            <button
                                onClick={openColorModal}
                                className="flex-1 bg-transparent text-left flex items-center justify-between outline-none"
                            >
                                {selectedColors ? selectedColors : t("placeholderColor")}
                                <span className="text-gray-400">▼</span>
                            </button>
                        </div>
                    </div>

                    {/* Modal Color */}
                    <ColorSelectModal
                        isOpen={isColorModalOpen}
                        closeModal={() => setColorModalOpen(false)}
                        setSelectedColor={setSelectedColors}
                    />
                    <div className="my-6">
                        <p className="text-lg font-semibold text-gray-700">{t("licensePlate")}</p>
                        <div className="flex items-center bg-white text-black p-2 rounded shadow hover:bg-gray-200 font-semibold text-gray-400 transition duration-300 w-full h-14">
                            {/* Icon bên trái */}
                            <FaMotorcycle className="text-gray-400 ml-1 mr-2" />

                            {/* Input */}
                            <input
                                type="text"
                                className="flex-1 outline-none bg-transparent"
                                value={licensePlate}
                                placeholder={t("placeholderLicensePlate")}
                                onChange={handleChange} // Cập nhật giá trị khi người dùng nhập
                            />
                        </div>
                    </div>
                    <hr className="my-4 border-t border-gray-200 w-full" />
                    {/* Color Select */}
                    <div className="my-6">
                        <p className="text-lg font-semibold text-gray-700">{t("selectCity")}</p>
                        <div className="flex items-center bg-white text-black p-2 rounded shadow hover:bg-gray-200 font-semibold text-gray-400 transition duration-300 w-full h-14">
                            {/* Icon bên trái */}
                            <FaCity className="text-gray-400 ml-1 mr-2" />

                            {/* Nút chọn thành phố */}
                            <button
                                onClick={openCityModal}
                                className="flex-1 bg-transparent text-left flex items-center justify-between outline-none"
                            >
                                {selectedCities ? selectedCities : t("placeholderCity")}
                                <span className="text-gray-400">▼</span>
                            </button>
                        </div>
                    </div>
                    {/* City Modal */}
                    <CitySelectModal
                        isOpen={isCityModalOpen}
                        closeModal={() => setCityModalOpen(false)}
                        setSelectedCity={setSelectedCities}
                    />
                    <div className="my-6">
                        <p className="text-lg font-semibold text-gray-700">{t("price")}</p>
                        <div className="flex items-center bg-white text-black p-2 rounded shadow hover:bg-gray-200 font-semibold text-gray-400 transition duration-300 w-full h-14">
                            {/* Icon bên trái */}
                            <LiaMoneyCheckAltSolid className="text-gray-400 ml-1 mr-2" />

                            {/* Input và VNĐ */}
                            <div className="flex w-full items-center justify-between">
                                <input
                                    type="text"
                                    className="flex-1 outline-none bg-transparent"
                                    value={price}
                                    placeholder={t("placeholderPrice")}
                                    onChange={handleChangePrice} // Cập nhật giá trị khi người dùng nhập
                                />
                                {/* VNĐ */}
                                <span className="pl-2 text-gray-500">VNĐ</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-6">
                        <p className="text-lg font-semibold text-gray-700">{t("description")}</p>
                        <div className="flex bg-white text-black p-2 rounded shadow hover:bg-gray-200 font-semibold text-gray-400 transition duration-300 w-full">
                            {/* Icon bên trái */}
                            <MdOutlineDescription className="text-gray-400 ml-1 mr-2 mt-1" />

                            {/* Textarea */}
                            <textarea
                                className="flex-1 outline-none bg-transparent resize-none h-[200px]"
                                value={description}
                                placeholder={t("placeholderDescription")}
                                onChange={handleDescription} // Cập nhật giá trị khi người dùng nhập
                            />
                        </div>
                    </div>
                    <hr className="my-4 border-t border-gray-200 w-full" />
                    <div className="my-6">
                        <div className="flex justify-center bg-blue-400 text-white p-2 rounded shadow hover:bg-blue-200 cursor-pointer font-semibold transition duration-300 w-full h-14">
                            {/* Nút chọn thành phố */}
                            <button>
                                {t("confirm")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
};

export default Upload;
