import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ManageCars from "./pages/Admin-Page/ManageCars";
import ManageAppointments from "./pages/Admin-Page/ManageAppointments";
import CreateAppointment from "./pages/Admin-Page/CreateAppointment";
import ManagePosts from "./pages/Admin-Page/ManagePosts";
import ManageUsers from "./pages/Admin-Page/ManageUsers";
import HandleComplaints from "./pages/Admin-Page/HandleComplaints";
import ManageExperts from "./pages/Admin-Page/ManageExperts";

import LoginForm from "./pages/User-Page/login";
import RegisterForm from "./pages/User-Page/register";
import HomePage from "./pages/User-Page/homePage";
import DetailMoto from "./pages/User-Page/detailMoto";
import AccountPage from "./pages/User-Page/accountPage";
import PurchasedPage from "./pages/User-Page/Purchased";
import AdminLayout from "./layout/layoutAdmin";

function App() {
  return (
    <Router>
      <Routes>
        {/* User Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/detailMoto" element={<DetailMoto />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/purchased" element={<PurchasedPage />} />

        {/* Admin Pages */}
        <Route
          path="/admin/manage-cars"
          element={
            <AdminLayout>
              <ManageCars />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/manage-appointments"
          element={
            <AdminLayout>
              <ManageAppointments />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/create-appointment"
          element={
            <AdminLayout>
              <CreateAppointment />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/manage-posts"
          element={
            <AdminLayout>
              <ManagePosts />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/manage-users"
          element={
            <AdminLayout>
              <ManageUsers />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/handle-complaints"
          element={
            <AdminLayout>
              <HandleComplaints />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/manage-experts"
          element={
            <AdminLayout>
              <ManageExperts />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
