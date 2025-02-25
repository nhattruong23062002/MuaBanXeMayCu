import React, { useState, useEffect } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import {
    FaCalendarAlt,
    FaTachometerAlt,
    FaCogs,
    FaCheckCircle,
    FaHeart,
    FaRegHeart,
} from "react-icons/fa";
import { IoMdArrowRoundBack, IoIosColorPalette } from "react-icons/io";
import { HiStatusOnline } from "react-icons/hi";
import { GrTemplate } from "react-icons/gr";
import LayoutUser from "../../layout/layoutUser";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ShareModal from "../../components/ShareModal";
import { MdReport } from "react-icons/md";
import AuctionComponent from "../../components/Auction";
import { getDetailCar } from "../../services/carService";
import { useParams } from "react-router-dom/dist";

function DetailCar() {
    const { t } = useTranslation("detailMoto");
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams();

    const [activeImage, setActiveImage] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isModalOpenImages, setIsModalOpen] = useState(false);
    const productLink = window.location.href;

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await getDetailCar(id);
                setCar(response);
                setActiveImage(response.additionalImages[0]); // Set the first image from additionalImages
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [id]);

    if (loading) return <div className="flex justify-center items-center">Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const onClickChat = () => {
        const productInfo = {
            name: car.name,
            price: car.price,
            image: car.image,
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

    const changeImage = (image) => {
        setActiveImage(image);
    };
    const formatPrice = (price) => {
        const priceString = price.toString();
        const formattedPrice =
            priceString[0] + "xx" + "." + "xxx" + "." + "xxx";
        return formattedPrice;
    };
    const price = car.price; // Giá của xe
    const formattedPrice = formatPrice(price); // Định dạng lại giá

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

                <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                    {/* Phần Chi Tiết Xe */}
                    <div className="col-span-5">
                        <div className="max-w-[1200px]  mx-auto py-4 px-4">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Hình ảnh lớn */}
                                <div className="flex-1">
                                    <img
                                        src={activeImage}
                                        alt="Car Detail"
                                        className="bg-black w-full h-[550px] object-cover rounded-md object-center transition-transform duration-300"
                                    />
                                </div>

                                {/* Thumbnails theo chiều dọc */}
                                <div className="flex flex-col gap-3 overflow-y-auto max-h-[550px]">
                                    {car.additionalImages?.map(
                                        (image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Thumbnail ${index + 1}`}
                                                onClick={() =>
                                                    changeImage(image)
                                                }
                                                onDoubleClick={() =>
                                                    openModal(image)
                                                }
                                                className={`w-32 h-32 object-cover rounded-md cursor-pointer ${activeImage === image
                                                    ? "border-2 border-[#d59648]"
                                                    : ""
                                                    }`}
                                            />
                                        )
                                    )}
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
                                        onClick={(e) => e.stopPropagation()}
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
                            {car.make}
                        </h1>
                        <p className="text-2xl text-[#d59648] font-bold mb-4 text-left">
                            {formattedPrice} đ
                        </p>

                        <div className="space-y-2 text-gray-700">
                            <p className="flex items-center">
                                <FaCalendarAlt className="mr-2 text-[#d59648]" />{" "}
                                <strong>{t("year")}:</strong> {car.year}
                            </p>
                            <p className="flex items-center">
                                <FaTachometerAlt className="mr-2 text-[#d59648]" />{" "}
                                <strong>{t("mileage")}:</strong> {car.mileage}{" "}
                                km
                            </p>
                            <p className="flex items-center">
                                <FaCogs className="mr-2 text-[#d59648]" />{" "}
                                <strong>{t("engine")}:</strong> {car.model}
                            </p>
                            <p className="flex items-center">
                                <IoIosColorPalette className="mr-2 text-[#d59648]" />{" "}
                                <strong>{t("color")}:</strong> {car.color}
                            </p>

                            <p className="flex items-center">
                                <GrTemplate className="mr-2 text-[#d59648]" />{" "}
                                <strong>{t("license_plate")}:</strong>{" "}
                                {car.license_plate}
                            </p>

                            <p className="flex items-center">
                                <HiStatusOnline className="mr-2 text-[#d59648]" />{" "}
                                <strong>{t("status")}:</strong> {car.status}
                            </p>
                        </div>

                        <div className="mt-4 text-left">
                            <h3 className="text-xl font-bold mt-4">
                                {t("details_title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{car.description}</p>

                        </div>
                        <hr className="my-4" />

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
                    </div>

                    {/* Phần Đấu Giá (AuctionComponent) */}
                    <div className="col-span-2 bg-[#f9f9f9] p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4 text-left">
                            {t("bid_live")}
                        </h2>
                        <AuctionComponent />
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
}

export default DetailCar;
