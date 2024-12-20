import React, { useState } from "react";
import {
  FaTrashAlt,
  FaFilter,
  FaLink,
  FaCheck,
  FaTimes,
  FaFileAlt,
} from "react-icons/fa";

const HandleComplaints = () => {
  const complaints = [
    {
      name: "Lê Văn A",
      email: "A@gmail.com",
      time: "14/7/2024",
      reason: "Đề nghị bảo lưu",
      role: "User",
      link: "https://user.com/",
    },
    {
      name: "Tạ Văn B",
      email: "B@gmail.com",
      time: "14/12/2024",
      reason: "Đề nghị hoàn tiền",
      role: "User",
      link: "https://user.com/",
    },
    {
      name: "Lê Hùng",
      email: "Hung@gmail.com",
      time: "14/9/2024",
      reason: "Đề nghị hoàn tiền",
      role: "User",
      link: "https://user.com/",
    },
    {
      name: "Trần Đô",
      email: "Do12@gmail.com",
      time: "14/1/2024",
      reason: "Đề nghị bảo lưu",
      role: "User",
      link: "https://user.com/",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(complaints);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = complaints.filter(
      (item) =>
        item.time.toLowerCase().includes(value) ||
        item.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered || []);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Danh sách khiếu nại</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center">
          <FaFileAlt className="text-blue-500 text-4xl mb-2" />
          <p className="text-blue-500 font-medium">Đang xử lý</p>
          <h3 className="text-2xl font-bold">45</h3>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex flex-col items-center">
          <FaFileAlt className="text-green-500 text-4xl mb-2" />
          <p className="text-green-500 font-medium">Thành công</p>
          <h3 className="text-2xl font-bold">15</h3>
        </div>
        <div className="bg-red-100 p-4 rounded-lg flex flex-col items-center">
          <FaFileAlt className="text-red-500 text-4xl mb-2" />
          <p className="text-red-500 font-medium">Từ chối</p>
          <h3 className="text-2xl font-bold">15</h3>
        </div>
      </div>

      {/* Action Section */}
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search Users"
          className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          <FaTrashAlt className="mr-2" /> Xóa
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
          Export
        </button>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <FaFilter className="mr-2" /> Filter
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2 text-left">
              <input type="checkbox" />
            </th>
            <th className="border border-gray-200 p-2 text-left">Name</th>
            <th className="border border-gray-200 p-2 text-left">Email</th>
            <th className="border border-gray-200 p-2 text-left">Time</th>
            <th className="border border-gray-200 p-2 text-left">Reason</th>
            <th className="border border-gray-200 p-2 text-left">Role</th>
            <th className="border border-gray-200 p-2 text-left">Link người bị khiếu nại</th>
            <th className="border border-gray-200 p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((complaint, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-200 p-2">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-200 p-2">{complaint.name}</td>
              <td className="border border-gray-200 p-2">{complaint.email}</td>
              <td className="border border-gray-200 p-2">{complaint.time}</td>
              <td className="border border-gray-200 p-2">{complaint.reason}</td>
              <td className="border border-gray-200 p-2">{complaint.role}</td>
              <td className="border border-gray-200 p-2">
                <a
                  href={complaint.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <FaLink className="inline mr-1" /> {complaint.link}
                </a>
              </td>
              <td className="border border-gray-200 p-2 space-x-2">
                <button className="flex items-center px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  <FaCheck className="mr-1" /> Phê duyệt
                </button>
                <button className="flex items-center px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  <FaTimes className="mr-1" /> Từ chối
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HandleComplaints;