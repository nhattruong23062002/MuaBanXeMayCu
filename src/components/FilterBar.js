import React from "react";

function FilterBar() {
  return (
    <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg w-11/12 max-w-[800px] p-4 z-10">
      <div className="flex justify-between mb-3">
      <div className="flex flex-col w-[40%] pr-2">
          <label className="text-gray-600 font-medium mb-1 text-sm">Loại xe:</label>
          <select className="w-full px-2 py-1 border rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#d59648]">
            <option value="">Chọn loại xe</option>
            <option value="2024">Xe tay ga</option>
            <option value="2023">Xe cup</option>
            <option value="2022">Xe số</option>
          </select>
        </div>

        <div className="flex flex-col w-[40%] pl-2 mr-20px">
          <label className="text-gray-600 font-medium mb-1 text-sm">
            Mức giá (20.000.000VNĐ)
          </label>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full appearance-none h-2 bg-gray-200 rounded-full outline-none"
          />
        </div><div className="text-white font-medium px-6 py-1.5 rounded-md mt-6 text-sm">
         
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col w-[40%] pr-2">
          <label className="text-gray-600 font-medium mb-1 text-sm">Năm:</label>
          <select className="w-full px-2 py-1 border rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#d59648]">
            <option value="">Chọn năm</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className="flex flex-col w-[40%] pl-2">
          <label className="text-gray-600 font-medium mb-1 text-sm">Khu vực:</label>
          <select className="w-full px-2 py-1 border rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#d59648]">
            <option value="">Chọn khu vực</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="TP.HCM">TP.HCM</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select>
        </div>

        <button className="bg-[#d59648] text-white font-medium px-4 py-1.5 rounded-md hover:bg-[#151b33] mt-6 text-sm">
          Lọc
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
