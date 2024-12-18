import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; // Import Sidebar
import ManageCars from "./pages/Admin-Page/ManageCars";
import ManageAppointments from "./pages/Admin-Page/ManageAppointments";
import CreateAppointment from "./pages/Admin-Page/CreateAppointment";
import ManagePosts from "./pages/Admin-Page/ManagePosts";
import ManageUsers from "./pages/Admin-Page/ManageUsers";
import HandleComplaints from "./pages/Admin-Page/HandleComplaints";
import ManageExperts from "./pages/Admin-Page/ManageExperts";

const AppRoutes = () => (
  <Router>
    <Navbar /> {/* Hiển thị Navbar */}
    <div className="main-container" style={{ display: "flex" }}>
      <Sidebar /> {/* Hiển thị Sidebar bên trái */}
      <div
        className="content"
        style={{ marginLeft: "250px", padding: "20px", width: "100%" }}
      >
        {/* Các route */}
        <Routes>
          <Route path="/admin/manage-cars" element={<ManageCars />} />
          <Route
            path="/admin/manage-appointments"
            element={<ManageAppointments />}
          />
          <Route
            path="/admin/create-appointment"
            element={<CreateAppointment />}
          />
          <Route path="/admin/manage-posts" element={<ManagePosts />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route
            path="/admin/handle-complaints"
            element={<HandleComplaints />}
          />
          <Route path="/admin/manage-experts" element={<ManageExperts />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default AppRoutes;
