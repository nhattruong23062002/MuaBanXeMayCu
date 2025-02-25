import React, { useState, useEffect } from "react";
import { FaCamera, FaSearch } from "react-icons/fa"; // Import FaSearch
import { useNavigate } from "react-router-dom"; // Import useHistory
import { useTranslation } from "react-i18next";
import LayoutUser from "../../layout/layoutUser";
import BannerSwiper from "../../components/BannerSwipper";
import MotoCard from "../../components/MotoCard";
import AdBanner from "../../components/AdBanner";
import { getAllCars } from "../../services/carService";
import { IoShieldCheckmark } from "react-icons/io5";

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
                const response = await getAllCars({ status: "available,auction" });
                setCars(response);
            } catch (error) {
                console.error("Error fetching property types:", error);
            }
        };
        getCars();
    }, []);

    const handleSearch = () => {
        const car = cars.find((car) => car.license_plate === searchTerm);
        if (car) {
            navigate(`/detailcar/${car.id}`);
        } else {
            alert("Xe không tìm thấy!");
        }
    };

    const handleFilter = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <LayoutUser>
            <AdBanner />
            <div className="max-w-[800px] mx-auto relative bg-white">
                <div className="mb-8 relative">
                    <BannerSwiper />
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-full z-10 px-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder={t("search_placeholder")}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full py-2 pl-4 pr-12 text-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e0f2b]"
                            />
                            <FaSearch
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 transition-colors cursor-pointer hover:text-blue-600"
                                onClick={handleSearch}
                            />{" "}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="max-w-[800px] mx-auto px-4 py-8 bg-white rounded-2xl relative z-20"
                style={{ marginTop: "-50px" }}
            >
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">
                        {t("quality_bikes")}
                    </h2>
                    <IoShieldCheckmark className="text-blue-600 text-xl mt-2" />
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                    {cars.map((car) => (
                        <MotoCard
                            key={car.id}
                            id={car.id}
                            image={car.additionalImages[0]}
                            name={car.model}
                            year={car.year}
                            mileage={car.mileage}
                            price={car.price}
                            status={car.status}
                        />
                    ))}
                </div>
            </div>
        </LayoutUser>
    );
}

export default HomePage;
