import React, { useState, useEffect } from "react";
import { FaCamera, FaSearch } from "react-icons/fa"; // Import FaSearch
import { useNavigate } from "react-router-dom"; // Import useHistory
import { useTranslation } from "react-i18next";
import LayoutUser from "../../layout/layoutUser";
import BannerSwiper from "../../components/BannerSwipper";
import FilterBar from "../../components/FilterBar";
import MotoCard from "../../components/MotoCard";
import AdBanner from "../../components/AdBanner";
import { getAllCars } from "../../services/carService";

function HomePage() {
    const { t } = useTranslation("homepage");
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        make: "",
        price: 100,
        year: "",
        address: "",
    });
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getCars = async () => {
            try {
                const response = await getAllCars({ status: "" });
                setCars(response);
            } catch (error) {
                console.error("Error fetching property types:", error);
            }
        };
        getCars();
    }, []);
    // Hàm tìm kiếm xe theo biển số
    const handleSearch = () => {
        const car = cars.find((car) => car.license_plate === searchTerm);
        if (car) {
            // Nếu tìm thấy xe, chuyển hướng đến trang chi tiết xe
            navigate(`/detailcar/${car.id}`);
        } else {
            alert("Xe không tìm thấy!");
        }
    };
    const handleFilter = (newFilters) => {
        setFilters(newFilters);
    };

    const formatPrice = (price) => {
        const priceStr = price.toString();
        const firstDigit = priceStr.charAt(0); // Lấy chữ số đầu tiên
        const remainingDigits = "x".repeat(priceStr.length - 1); // Thay thế các chữ số còn lại bằng 'x'

        // Kết hợp giá với chữ số đầu và 'x'
        const formattedPrice = firstDigit + remainingDigits;

        return formattedPrice + "đ"; // Thêm "đ" vào cuối giá
    };

    return (
        <LayoutUser>
            <AdBanner />
            <div className="max-w-[800px] mx-auto relative bg-white">
                <div className="mb-8 relative">
                    <BannerSwiper />
                    <FilterBar onFilter={handleFilter} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-1/2 z-10">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder={t("search_placeholder")}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full py-3 pl-4 pr-12 text-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#0e0f2b]"
                            />
                            <FaSearch
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 transition-colors cursor-pointer hover:text-blue-600"
                                onClick={handleSearch}
                            />{" "}
                            {/* Add FaSearch icon */}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="max-w-[800px] mx-auto px-4 py-14 bg-white rounded-md"
                style={{ marginTop: "4rem" }}
            >
                <h2 className="text-2xl font-bold mb-4">
                    {t("quality_bikes")}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {cars.map((car) => (
                        <MotoCard
                            key={car.id}
                            id={car.id}
                            image={car.additionalImages[0]}
                            name={car.model}
                            year={car.year}
                            mileage={car.mileage}
                            price={formatPrice(car.price)}
                        />
                    ))}
                </div>
            </div>
        </LayoutUser>
    );
}

export default HomePage;
