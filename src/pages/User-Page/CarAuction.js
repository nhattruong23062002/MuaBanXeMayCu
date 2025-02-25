import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // Import FaSearch
import LayoutUser from "../../layout/layoutUser";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Import useHistory
import { getAllCars } from "../../services/carService";
import MotoBrid from "../../components/MotoBrid";
import FilterBar from "../../components/FilterBar";

const CarAuction = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { t } = useTranslation("CarAuction");
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    //filter
    const [filters, setFilters] = useState({
        make: "",
        price: 100,
        year: "",
        address: "",
    });
    const handleFilter = (newFilters) => {
        setFilters(newFilters);
    };
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
            <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6 max-w-[1200px] mx-auto bg-white rounded-md mt-10">
                {/* Phần Tìm kiếm và Bộ lọc */}
                <div className="w-full md:w-1/4">
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
                        />
                    </div>
                    {/* Phần chuyển đổi trạng thái: Đang đấu giá, Chờ lựa chọn, Kết thúc */}
                    {/* Bộ lọc trạng thái */}
                    <div className="space-y-6 bg-white p-4 rounded-lg shadow-md mt-2">
                        <div className="space-y-3">
                            {/* Các checkbox */}
                            {[
                                {
                                    id: "auctioning",
                                    label: t("auctioning"),
                                    count: 3,
                                },
                                {
                                    id: "waiting",
                                    label: t("waiting"),
                                    count: 0,
                                },
                                { id: "ended", label: t("ended"), count: 90 },
                            ].map(({ id, label, count }) => (
                                <div className="flex items-center" key={id}>
                                    <input
                                        type="checkbox"
                                        id={id}
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor={id}
                                        className="text-blue-600"
                                    >
                                        {label}
                                    </label>
                                    <span className="text-gray-600">
                                        ({count})
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6 bg-white p-4 rounded-lg shadow-md mt-2">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-lg">
                                {t("producer_model")}
                            </p>
                            <button className="text-blue-600 text-sm">
                                {t("exclude_0")}
                            </button>
                        </div>

                        <div className="space-y-4 mt-4">
                            {/* Các radio buttons */}
                            {[
                                {
                                    id: "hyundai",
                                    label: "xe hyundai",
                                    count: 25,
                                },
                                { id: "kia", label: "Kia", count: 16 },
                                {
                                    id: "chevrolet",
                                    label: "Chevrolet (GM Daewoo)",
                                    count: 3,
                                },
                                {
                                    id: "kgmobility",
                                    label: "KG Mobility (Ssangyong)",
                                    count: 8,
                                },
                                { id: "bmw", label: "Xe BMW", count: 2 },
                                {
                                    id: "special",
                                    label: "Hàng hóa/Đặc biệt/Khác",
                                    count: 33,
                                },
                                { id: "benz", label: "Xe Benz", count: 1 },
                                {
                                    id: "volkswagen",
                                    label: "Volkswagen",
                                    count: 4,
                                },
                                { id: "ford", label: "Xe Ford", count: 1 },
                            ].map(({ id, label, count }) => (
                                <div className="flex items-center" key={id}>
                                    <input
                                        type="radio"
                                        id={id}
                                        name="manufacturer"
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor={id}
                                        className="text-gray-700"
                                    >
                                        {label}
                                    </label>
                                    <span className="text-gray-500">
                                        ({count})
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <FilterBar onFilter={handleFilter} />
                </div>

                <div className="w-full md:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">
                        {t("quality_bikes")}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        {cars.map((car) => (
                            <MotoBrid
                                key={car.id}
                                id={car.id}
                                image={car.additionalImages[0]}
                                name={car.model}
                                year={car.year}
                                mileage={car.mileage}
                                price={formatPrice(car.price)}
                                location={car.location}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
};

export default CarAuction;
