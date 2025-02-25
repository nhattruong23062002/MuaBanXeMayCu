import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function FilterBar({ onFilter }) {
    const { t } = useTranslation("filterBar");

    const [filters, setFilters] = useState({
        type: "",
        price: 200,
        year: "",
        location: "",
    });

    const [provinces, setProvinces] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await fetch(
                    "https://provinces.open-api.vn/api/"
                );
                const data = await response.json();

                setProvinces([
                    { name: t("select_location"), code: "default" },
                    ...data,
                ]);
            } catch (error) {
                console.error("Error fetching provinces:", error);
            }
        };
        fetchProvinces();
    }, [t]);

    const handleChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleFilter = () => {
        onFilter(filters);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md w-full p-4 mt-2">
            {/* Phần Loại xe */}
            <div className="flex flex-col space-y-4">
                {/* <div className="flex flex-col w-full">
                    <label className="text-gray-600 font-medium mb-1 text-sm">
                        {t("type")}:
                    </label>
                    <select
                        value={filters.type}
                        onChange={(e) => handleChange("type", e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#d59648]"
                    >
                        <option value="">{t("select_type")}</option>
                        <option value={t("scooter")}>{t("scooter")}</option>
                        <option value={t("big_bike")}>{t("big_bike")}</option>
                        <option value={t("manual")}>{t("manual")}</option>
                        <option value={"ô tô"}>Ô tô</option>
                    </select>
                </div> */}

                {/* Phần Giá */}
                <div className="flex flex-col w-full">
                    <label className="text-gray-600 font-medium mb-1 text-sm">
                        {t("price")}: {filters.price} {t("million")}
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="200"
                        step="1"
                        value={filters.price}
                        onChange={(e) => handleChange("price", e.target.value)}
                        className="w-full appearance-none h-2 bg-gray-200 rounded-full outline-none focus:ring-2 focus:ring-[#d59648]"
                    />
                </div>

                {/* Phần Năm sản xuất */}
                <div className="flex flex-col w-full">
                    <label className="text-gray-600 font-medium mb-1 text-sm">
                        {t("year")}:
                    </label>
                    <select
                        value={filters.year}
                        onChange={(e) => handleChange("year", e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#d59648]"
                    >
                        <option value="">{t("select_year")}</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                </div>

                {/* Phần Địa điểm */}
                <div
                    className="flex flex-col w-full relative"
                    ref={dropdownRef}
                >
                    <label className="text-gray-600 font-medium mb-1 text-sm">
                        {t("location")}:
                    </label>
                    <div
                        className="w-full px-2 py-1 border rounded-md text-gray-700 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d59648] select-dropdown"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {filters.location || t("select_location")}
                    </div>
                    {isDropdownOpen && (
                        <ul className="absolute z-50 bg-white border rounded-md shadow-lg w-full max-h-80 overflow-y-auto">
                            {provinces.map((province) => (
                                <li
                                    key={province.code}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        handleChange(
                                            "location",
                                            province.code === "default"
                                                ? ""
                                                : province.name
                                        );
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    {province.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Nút Lọc */}
                <button
                    onClick={handleFilter}
                    className="bg-[#d59648] text-white font-medium px-4 py-1.5 rounded-md hover:bg-[#151b33] mt-4 text-sm"
                >
                    {t("filter")}
                </button>
            </div>
        </div>
    );
}

export default FilterBar;
