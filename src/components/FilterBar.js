import React, { useState } from "react";

function FilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    type: "",
    price: 100, 
    year: "",
    location: "",
  });

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg w-11/12 max-w-[800px] p-4 z-10">
      <div className="flex justify-between mb-3">
        <div className="flex flex-col w-[40%] pr-2">
          <label className="text-gray-600 font-medium mb-1 text-sm">Loại xe:</label>
          <select
            value={filters.type}
            onChange={(e) => handleChange("type", e.target.value)}
            className="w-full px-2 py-1 border rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#d59648]"
          >
            <option value="">Chọn loại xe</option>
            <option value="Xe tay ga">Xe tay ga</option>
            <option value="Xe phân khối lớn">Xe phân khối lớn</option>
            <option value="Xe số">Xe số</option>
          </select>
        </div>

        <div className="flex flex-col w-[40%] pl-2">
          <label className="text-gray-600 font-medium mb-1 text-sm">
            Mức giá: {filters.price * 2} triệu VNĐ 
          </label>
          <input
            type="range"
            min="1" 
            max="100"
            step="1"
            value={filters.price}
            onChange={(e) => handleChange("price", e.target.value)}
            className="w-full appearance-none h-2 bg-gray-200 rounded-full outline-none focus:ring-2 focus:ring-[#d59648]"
          />
        </div>
        <div className="px-7 py-1.5 rounded-md mt-6 text-sm"></div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col w-[40%] pr-2">
          <label className="text-gray-600 font-medium mb-1 text-sm">Năm:</label>
          <select
            value={filters.year}
            onChange={(e) => handleChange("year", e.target.value)}
            className="w-full px-2 py-1 border rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#d59648]"
          >
            <option value="">Chọn năm</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        <div className="flex flex-col w-[40%] pl-2">
          <label className="text-gray-600 font-medium mb-1 text-sm">Khu vực:</label>
          <select
            value={filters.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className="w-full px-2 py-1 border rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#d59648]"
          >
            <option value="">Chọn khu vực</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="TP.HCM">TP.HCM</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select>
        </div>

        <button
          onClick={handleFilter}
          className="bg-[#d59648] text-white font-medium px-4 py-1.5 rounded-md hover:bg-[#151b33] mt-6 text-sm"
        >
          Lọc
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
