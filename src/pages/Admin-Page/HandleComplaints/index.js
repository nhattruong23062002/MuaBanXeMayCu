import React, { useState } from "react";
import "./HandleComplaints.css";
import {
  FaTrashAlt,
  FaFilter,
  FaLink,
  FaCheck,
  FaTimes,
  FaFileAlt,
} from "react-icons/fa";

const HandleComplaints = () => {
  // Dữ liệu mẫu
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
  const [searchTerm, setSearchTerm] = useState(""); // Lưu từ khóa tìm kiếm
  const [filteredData, setFilteredData] = useState(complaints); // Lưu dữ liệu được lọc

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Lọc dữ liệu dựa trên ID và tiêu đề
    const filtered = complaints.filter(
      (item) =>
        item.time.toLowerCase().includes(value) || // Lọc theo ID
        item.name.toLowerCase().includes(value) // Lọc theo tiêu đề
    );

    setFilteredData(filtered || []); // Cập nhật dữ liệu đã lọc
  };

  return (
    <div className="handle-complaints-container">
      <h2>Danh sách khiếu nại</h2>
      {/* Summary Cards */}
      <div className="summary-cards-handle">
        <div className="cards processing">
          <FaFileAlt className="File-icon" />
          <p className="text-process">Đang xử lý</p>
          <h3>45</h3>
        </div>
        <div className="cards success">
          <FaFileAlt className="File-icon-success" />
          <p className="text-process">Thành công</p>
          <h3>15</h3>
        </div>
        <div className="cards rejected">
          <FaFileAlt className="File-icon-reject" />
          <p className="text-process">Từ chối</p>
          <h3>15</h3>
        </div>
      </div>

      {/* Action Section */}
      <div className="actions-handle">
        <input
          type="text"
          placeholder="Search Users"
          className="search-input-handle"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="delete-btn-handle">
          <FaTrashAlt /> Xóa
        </button>
        <button className="export-btn-handle">Export</button>
        <button className="filter-btn-handle">
          <FaFilter /> filter
        </button>
      </div>

      {/* Table */}
      <table className="complaints-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Time</th>
            <th>Reason</th>
            <th>Role</th>
            <th>Link người bị khiếu nại</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((complaint, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{complaint.name}</td>
              <td>{complaint.email}</td>
              <td>{complaint.time}</td>
              <td>{complaint.reason}</td>
              <td>{complaint.role}</td>
              <td>
                <a href={complaint.link} target="_blank" rel="noreferrer">
                  <FaLink /> {complaint.link}
                </a>
              </td>
              <td className="action-buttons-handle">
                <button className="approve-btn-handle">
                  <FaCheck className="approve-icon" /> Phê duyệt
                </button>
                <button className="reject-btn-handle">
                  <FaTimes className="reject-icon" /> Từ chối
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
