import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MotoBrid({ id, image, name, year, mileage, price, location }) {
    const navigate = useNavigate();
    const { t } = useTranslation("motoBrid");

    const handleClick = () => {
        navigate(`/detailcar/${id}`);
    };
    // Bắt đầu từ 2 giờ 30 phút 15 giây
    const initialTime = 2 * 60 * 60 + 30 * 60 + 15; // Chuyển thành giây
    const [timeLeft, setTimeLeft] = useState(initialTime);

    // useEffect để cập nhật đồng hồ mỗi giây
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Chuyển đổi giây thành định dạng HH:MM:SS
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
        )}:${String(secs).padStart(2, "0")}`;
    }

    return (
        <div className="border rounded-lg shadow-md hover:shadow-lg ">
            {/* Thanh trạng thái đấu giá */}
            <div className="flex justify-between items-center bg-white text-orange-500 px-2 py-1 text-sm font-semibold rounded-t-md">
                <span>{t("auction_ending_soon")}</span>
                <span className="text-gray-700">{formatTime(timeLeft)}</span>
            </div>
            <hr mt-2 mb-2 />
            {/* Hình ảnh xe */}
            <img
                src={image}
                alt={name}
                className="w-full h-40 object-cover mt-2 rounded-md transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300"
            />

            {/* Thông tin xe */}
            <div className="p-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-500 text-sm">
                    {t("car_year_mileage_location", {
                        year,
                        mileage,
                        location,
                    })}
                </p>

                {/* Bảng giá */}
                <div className="mt-2 bg-gray-100 p-2 rounded-md">
                    <p className="text-gray-600">
                        {t("desired_price")}{" "}
                        <span className="font-bold text-gray-800">{price}</span>
                    </p>
                    <p className="text-gray-600">
                        {t("offer_price")}{" "}
                        <span className="font-bold text-gray-800">
                            {price * 0.94}
                        </span>
                    </p>
                </div>

                {/* Nút xem xe tương tự */}
                <button
                    className="mt-3 w-full bg-blue-100 text-blue-600 py-2 rounded-md font-semibold hover:bg-blue-200"
                    onClick={handleClick}
                >
                    {t("view_similar_car")}
                </button>
            </div>
        </div>
    );
}

export default MotoBrid;
