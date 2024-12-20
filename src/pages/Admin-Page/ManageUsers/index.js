import React, { useState } from "react";
import "./ManageUsers.css";
import {
  FaTrashAlt,
  FaFilter,
  FaFileExport,
  FaChartLine,
} from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";

const ManageUsers = () => {
  // Dữ liệu mẫu
  const users = [
    {
      name: "Lê Văn A",
      email: "A@gmail.com",
      city: "Đà Nẵng",
      status: "Active",
      posts: 15,
      transactions: 5,
    },
    {
      name: "Tạ Văn B",
      email: "B@gmail.com",
      city: "Hà Nội",
      status: "Unactive",
      posts: 5,
      transactions: 2,
    },
    {
      name: "Lê Hùng",
      email: "Hung@gmail.com",
      city: "Huế",
      status: "Active",
      posts: 0,
      transactions: 0,
    },
    {
      name: "Trần Đô",
      email: "Do12@gmail.com",
      city: "Kontum",
      status: "Active",
      posts: 4,
      transactions: 2,
    },
  ];
  const [searchTerm, setSearchTerm] = useState(""); // Lưu từ khóa tìm kiếm
  const [filteredData, setFilteredData] = useState(users); // Lưu dữ liệu được lọc

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Lọc dữ liệu dựa trên ID và tiêu đề
    const filtered = users.filter(
      (item) =>
        item.city.toLowerCase().includes(value) || // Lọc theo ID
        item.name.toLowerCase().includes(value) // Lọc theo tiêu đề
    );

    setFilteredData(filtered || []); // Cập nhật dữ liệu đã lọc
  };

  return (
    <div className="manage-users-container">
      <h1>Quản lý người dùng</h1>
      {/* Header */}
      <div className="header">
        <h2>Quản lý người dùng</h2>
        <button className="add-user-btn">
          <IoPersonAddOutline /> Add user
        </button>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <p>Tổng Users</p>
          <h3>
            45 <span>users</span>
          </h3>
          <small className="growth-indicator">
            <FaChartLine className="chart-icon" />
            5.0%
          </small>
        </div>
        <div className="card">
          <p>Active</p>
          <h3>
            15 <span>users</span>
          </h3>
          <small className="growth-indicator">
            <FaChartLine className="chart-icon" />
            5.0%
          </small>
        </div>
        <div className="card">
          <p>New User</p>
          <h3>
            20 <span>users</span>
          </h3>
          <small className="growth-indicator">
            <FaChartLine className="chart-icon" />
            15.0%
          </small>
        </div>
        <div className="card">
          <p>InActive</p>
          <h3>
            5 <span>users</span>
          </h3>
          <small className="decrease-indicator">
            <FaChartLine className="chart-icon decrease" />
            15%
          </small>
        </div>
      </div>

      {/* Filter and Actions */}
      <div className="actions-users">
        <input
          type="text"
          placeholder="Search Users"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="delete-btn-users">
          <FaTrashAlt /> Xóa
        </button>
        <button className="export-btn-users">
          <FaFileExport /> Export
        </button>
        <button className="filter-btn-users">
          <FaFilter /> filter
        </button>
      </div>

      {/* Users Table */}
      <table className="users-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Status</th>
            <th>Số lượng tin</th>
            <th>Số giao dịch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>
                {user.status === "Active" ? (
                  <span className="status-active">●</span>
                ) : (
                  <span className="status-inactive">●</span>
                )}
                {user.status}
              </td>
              <td>{user.posts} Post</td>
              <td>{user.transactions} giao dịch</td>
              <td>
                <button className="edit-btn-users">
                  <FaPenToSquare className="edit-icon-users" /> Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
