import React from "react";
import "./ManageExperts.css";
import {
  FaPlus,
  FaTrashAlt,
  FaFilter,
  FaFileExport,
  FaEdit,
  FaChartLine,
} from "react-icons/fa";

const ManageExperts = () => {
  const experts = [
    {
      name: "Lê Văn A",
      email: "A@gmail.com",
      city: "Đà Nẵng",
      status: "Active",
      experience: "5 năm",
      reputation: "85%",
    },
    {
      name: "Tạ Văn B",
      email: "B@gmail.com",
      city: "Hà Nội",
      status: "Unactive",
      experience: "5 năm",
      reputation: "95%",
    },
    {
      name: "Lê Hùng",
      email: "Hung@gmail.com",
      city: "Huế",
      status: "Active",
      experience: "2 năm",
      reputation: "99%",
    },
    {
      name: "Trần Đô",
      email: "Do12@gmail.com",
      city: "Kontum",
      status: "Active",
      experience: "4 năm",
      reputation: "97%",
    },
  ];

  return (
    <div className="manage-experts-container">
      <h1>Quản lý chuyên gia </h1>
      {/* Header */}
      <div className="manage-experts-header">
        <h2>Users</h2>
        <button className="manage-experts-add-user-btn">
          <FaPlus /> Add user
        </button>
      </div>

      {/* Summary Cards */}
      <div className="manage-experts-summary-cards">
        <div className="manage-experts-card">
          <p>Tổng Users</p>
          <h3>
            45 <span>users</span>
          </h3>
          <small className="growth-indicator">
            <FaChartLine className="chart-icon" />
            5.0%
          </small>
        </div>
        <div className="manage-experts-card">
          <p>Active</p>
          <h3>
            15 <span>users</span>
          </h3>
          <small className="growth-indicator">
            <FaChartLine className="chart-icon" />
            5.0%
          </small>
        </div>
        <div className="manage-experts-card">
          <p>New User</p>
          <h3>
            20 <span>users</span>
          </h3>
          <small className="growth-indicator">
            <FaChartLine className="chart-icon" />
            15.0%
          </small>
        </div>
        <div className="manage-experts-card">
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

      {/* Actions */}
      <div className="manage-experts-actions">
        <input
          type="text"
          placeholder="Search Users"
          className="manage-experts-search-input"
        />
        <button className="manage-experts-delete-btn">
          <FaTrashAlt className="btn-experts-icon" /> Xóa
        </button>
        <button className="manage-experts-export-btn">
          <FaFileExport className="btn-experts-icon" /> Export
        </button>
        <button className="manage-experts-filter-btn">
          <FaFilter className="btn-experts-icon" /> filter
        </button>
      </div>

      {/* Experts Table */}
      <table className="manage-experts-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Status</th>
            <th>Kinh nghiệm</th>
            <th>Độ uy tín</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {experts.map((expert, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{expert.name}</td>
              <td>{expert.email}</td>
              <td>{expert.city}</td>
              <td>
                <span
                  className={
                    expert.status === "Active"
                      ? "manage-experts-status-active"
                      : "manage-experts-status-inactive"
                  }
                >
                  ●
                </span>
                {expert.status}
              </td>
              <td>{expert.experience}</td>
              <td>{expert.reputation}</td>
              <td>
                <button className="manage-experts-edit-btn">
                  <FaEdit /> Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageExperts;
