import React, { useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import {
    FaCalendarAlt,
    FaTachometerAlt,
    FaCogs,
    FaCheckCircle,
    FaHeart,
    FaRegHeart,
} from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import LayoutUser from "../../layout/layoutUser";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ShareModal from "../../components/ShareModal";
import { MdReport } from "react-icons/md";
import AuctionComponent from "../../components/Auction";

function DetailMoto() {
    const { t } = useTranslation("detailMoto");
    const images = [
        "https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/7/12/kia-seltos-2022-16891538917941492958969.jpg",
        "https://image.heydealer.com/unsafe/900x0/https://heydealer-api.s3.amazonaws.com/media/cars/image/2025/02/18/75322232_5da7bb20-1182-49ff-a89e-e87471a6612a.JPEG",
        "https://otochinhhangvn.com/wp-content/uploads/2023/10/000-798x466.jpg",
        "https://xeluotsaigon.com/wp-content/uploads/2023/04/338584350_926102455240247_1616775095147676392_n.jpg",
        "https://xemayanhloc.com.vn/wp-content/uploads/2022/05/z3403832730322_3dc7bd30894c8821da2984ba662a860e.jpg",
        "https://axega.vn/wp-content/uploads/2021/07/z2578428120268_6588f5a9d96950324e23de1aab2f10c4.jpg",
    ];
    const navigate = useNavigate();
    const location = useLocation();

    const [activeImage, setActiveImage] = useState(images[0]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isModalOpenImages, setIsModalOpen] = useState(false);
    const productLink = window.location.href;

    const onClickChat = () => {
        const productInfo = {
            name: "Honda SH 125i",
            price: "6x,000,000 VND",
            image: "https://xeluotsaigon.com/wp-content/uploads/2023/04/338584350_926102455240247_1616775095147676392_n.jpg",
        };
        navigate("/chat", { state: { product: productInfo } });
    };

    const onClickPayment = () => {
        navigate("/payment");
    };

    const onClickReport = () => {
        navigate("/report");
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const openModal = (image) => {
        setActiveImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    // Thay đổi ảnh lớn khi click vào thumbnail (sự kiện onClick)
    const changeImage = (image) => {
        setActiveImage(image); // Thay đổi ảnh lớn
    };

    return (
        <LayoutUser>
            <div className="max-w-[1200px] mx-auto py-4 px-4 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center pb-2">
                    <button
                        className="text-2xl mr-4 cursor-pointer"
                        onClick={() => window.history.back()}
                    >
                        <IoMdArrowRoundBack />
                    </button>
                    <div className="text-xl cursor-pointer flex items-center">
                        <button
                            className="text-xl hover:text-red-500 mr-3"
                            onClick={toggleFavorite}
                        >
                            {isFavorite ? (
                                <FaHeart className="text-red-500" />
                            ) : (
                                <FaRegHeart />
                            )}
                        </button>
                        <MdReport
                            className="text-2xl hover:text-red-500 mr-3"
                            onClick={onClickReport}
                        />
                        <FaShareFromSquare
                            className="text-xl hover:text-blue-500"
                            onClick={() => setModalOpen(true)}
                        />
                    </div>
                </div>

                <ShareModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    productLink={productLink}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Phần Chi Tiết Xe */}
                    <div className="col-span-2">
                        <div className="max-w-[1200px] mx-auto py-4 px-4">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Hình ảnh lớn */}
                                <div className="flex-1">
                                    <img
                                        src={activeImage}
                                        alt="Car Detail"
                                        className="bg-black w-full h-[600px] object-contain rounded-md object-center transition-transform duration-300"
                                    />
                                </div>

                                {/* Thumbnails theo chiều dọc */}
                                <div className="flex flex-col gap-3 overflow-y-auto max-h-[600px]">
                                    {images.slice().map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            onClick={() => changeImage(image)} // Thay đổi ảnh lớn khi click vào thumbnail
                                            onDoubleClick={() =>
                                                openModal(image)
                                            } // Mở modal khi click vào thumbnail
                                            className={`w-32 h-32 object-cover rounded-md cursor-pointer ${
                                                activeImage === image
                                                    ? "border-2 border-[#d59648]"
                                                    : ""
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* Modal để hiển thị ảnh đầy đủ */}
                            {isModalOpenImages && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                                    onClick={closeModal}
                                >
                                    <div
                                        className="bg-white p-4 rounded-lg"
                                        onClick={(e) => e.stopPropagation()} // Ngừng sự kiện click khi bấm vào modal
                                    >
                                        <img
                                            src={activeImage}
                                            alt="Full Image"
                                            className="w-full h-[800px] object-cover"
                                        />
                                        <button
                                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md"
                                            onClick={closeModal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <h1 className="text-3xl font-bold mb-2 text-left">
                            {t("title")}
                        </h1>
                        <p className="text-2xl text-[#d59648] font-bold mb-4 text-left">
                            {t("price")}
                        </p>

                        <div className="space-y-2 text-gray-700">
                            <p className="flex items-center">
                                <FaCalendarAlt className="mr-2 text-[#d59648]" />{" "}
                                <strong>{t("year")}:</strong> 2019
                            </p>
                            <p className="flex items-center">
                                <FaTachometerAlt className="mr-2 text-[#d59648]" />{" "}
                                <strong>{t("mileage")}:</strong> 15,000 km
                            </p>
                            <p className="flex items-center">
                                <FaCogs className="mr-2 text-[#d59648]" />{" "}
                                <strong>{t("engine")}:</strong> 749cc
                            </p>
                            <p className="flex items-center">
                                <FaCheckCircle className="mr-2 text-[#d59648]" />{" "}
                                <strong>{t("condition")}:</strong> {t("used")}
                            </p>
                        </div>

                        <div className="mt-4 text-left">
                            <h3 className="font-bold mb-1">
                                {t("description_title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("description_content")}
                            </p>
                        </div>
                        <hr className="my-4" />
                        {/* Mô tả chi tiết */}
                        <div className="mt-6 text-left">
                            <h3 className="text-xl font-bold mt-4">
                                {t("details_title")}
                            </h3>
                            <hr className="my-4" />
                            <div className="mt-8 text-gray-700 text-sm leading-relaxed text-left">
                                <h3 className="text-lg font-bold mb-2">
                                    {t("title")}
                                </h3>
                                <hr className="mb-4" />
                                <p>
                                    <strong>{t("color")}:</strong> {t("black")}
                                </p>
                                <p>
                                    <strong>{t("odo")}:</strong> 15,000 km
                                </p>
                                <p>
                                    <strong>{t("license_plate")}:</strong> 92FA
                                    33523
                                </p>
                                <p>
                                    <strong>{t("manufacture_year")}:</strong>{" "}
                                    2019
                                </p>
                                <p>
                                    <strong>{t("status")}:</strong>{" "}
                                    {t("like_new")}
                                </p>
                                <hr className="my-4" />

                                <ul className="space-y-2">
                                    {t("warranty_items", {
                                        returnObjects: true,
                                    }).map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <FaCheckCircle className="text-[#d59648] mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 flex space-x-4">
                            <button
                                onClick={onClickPayment}
                                className="bg-[#d59648] text-white px-6 py-2 rounded-md font-medium hover:bg-[#b27939]"
                            >
                                {t("buy_now")}
                            </button>
                            <button
                                onClick={onClickChat}
                                className="border border-gray-400 px-6 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100"
                            >
                                {t("contact")}
                            </button>
                        </div>
                        <p className="mt-6 font-bold text-center text-[#d59648]">
                            {t("schedule_now")}
                        </p>
                    </div>

                    {/* Phần Đấu Giá (AuctionComponent) */}
                    <div className="col-span-1 bg-[#f9f9f9] p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4 text-left">
                            Đấu giá trực tiếp
                        </h2>
                        <AuctionComponent />
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
}

export default DetailMoto;
