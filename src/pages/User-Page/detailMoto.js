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

function DetailMoto() {
  const { t } = useTranslation("detailMoto");
  const images = [
    "https://media.moitruongvadothi.vn/images/2023/10/25/9883-1698207232-9883-1695003555-gia-xe-honda-sh-2023-1.jpg",
    "https://xemayanhloc.com.vn/wp-content/uploads/2022/05/z3403832730322_3dc7bd30894c8821da2984ba662a860e.jpg",
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const [activeImage, setActiveImage] = useState(images[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const productLink = window.location.href;

  const onClickChat = () => {
    const productInfo = {
      name: "Honda SH 125i",
      price: "6x,000,000 VND",
      image:
        "https://media.moitruongvadothi.vn/images/2023/10/25/9883-1698207232-9883-1695003555-gia-xe-honda-sh-2023-1.jpg",
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

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto py-4 px-4 bg-white rounded-lg shadow-md">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={activeImage}
              alt="Honda SH 125i"
              className="w-full h-[350px] object-cover rounded-md"
            />
            <div className="flex mt-4 space-x-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setActiveImage(image)}
                  className={`w-32 h-24 object-cover rounded-md cursor-pointer hover:ring-2 ring-[#d59648] ${activeImage === image ? "ring-2 ring-[#d59648]" : ""
                    }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2 text-left">{t("title")}</h1>
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
              <h3 className="font-bold mb-1">{t("description_title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("description_content")}
              </p>
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
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mt-4">{t("details_title")}</h3>
          <div className="mt-8 text-gray-700 text-sm leading-relaxed text-left">
            <h3 className="text-lg font-bold mb-2">{t("title")}</h3>
            <hr className="mb-4" />
            <p>
              <strong>{t("color")}:</strong> {t("black")}
            </p>
            <p>
              <strong>{t("odo")}:</strong> 15,000 km
            </p>
            <p>
              <strong>{t("license_plate")}:</strong> 92FA 33523
            </p>
            <p>
              <strong>{t("manufacture_year")}:</strong> 2019
            </p>
            <p>
              <strong>{t("status")}:</strong> {t("like_new")}
            </p>
            <hr className="my-4" />

            <ul className="space-y-2">
              {t("warranty_items", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#d59648] mr-2" />
                    {item}
                  </li>
                )
              )}
            </ul>

            <p className="mt-6 font-bold text-center text-[#d59648]">
              {t("schedule_now")}
            </p>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
}

export default DetailMoto;
