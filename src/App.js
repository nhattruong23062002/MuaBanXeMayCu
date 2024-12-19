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
import EditPost from "./pages/Admin-Page/ManageCars/EditPost";

import LoginForm from "./pages/User-Page/login";
import RegisterForm from "./pages/User-Page/register";
import HomePage from "./pages/User-Page/homePage";
import DetailMoto from "./pages/User-Page/detailMoto";
import AccountPage from "./pages/User-Page/accountPage";
import PurchasedPage from "./pages/User-Page/Purchased";
import AdminLayout from "./layout/layoutAdmin";
import ListExpert from "./pages/User-Page/ListExpert";
import UserIdentificationForm from "./pages/User-Page/Identification";
import PaymentForm from "./pages/User-Page/Payment";
import Upload from "./pages/User-Page/Upload";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HomePage />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <LoginForm />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div>
              <RegisterForm />
            </div>
          }
        />
        <Route
          path="/detailMoto"
          element={
            <div>
              <DetailMoto />
            </div>
          }
        />
        <Route
          path="/account"
          element={
            <div>
              <AccountPage />
            </div>
          }
        />
        <Route
          path="/purchased"
          element={
            <div>
              <PurchasedPage />
            </div>
          }
        />
        <Route path="/listexp" element={<ListExpert />} />
        <Route path="/chat" element={<ChatMessage />} />
        <Route path="/identification" element={<UserIdentificationForm />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/upload" element={<Upload />} />

        <Route
          path="/admin/manage-cars"
          element={
            <AdminLayout>
              <ManageCars />
            </AdminLayout>
          }
        />
        <Route
          path="/edit-post/:id"
          element={
            <AdminLayout>
              <EditPost />
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
};

export default App;
