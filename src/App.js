import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./../src/styles/App.css";

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
import PurchasedPage from "./pages/User-Page/ManagerPurchased";
import AdminLayout from "./layout/layoutAdmin";
import ListExpert from "./pages/User-Page/ListExpert";
import UserIdentificationForm from "./pages/User-Page/Identification";
import PaymentForm from "./pages/User-Page/Payment";
import Upload from "./pages/User-Page/Upload";
import ChatMessage from "./components/ChatMessage";
import ExpertDetailPage from "./pages/User-Page/expertDetail";
import ListStore from "./pages/User-Page/ListStore";
import StoreDetailPage from "./pages/User-Page/storeDetail";
import PurchaseDetailPage from "./pages/User-Page/PurchaseDetail";
import SellPage from "./pages/User-Page/ManagerSell";
import PostDetail from "./pages/User-Page/postDetail";
import MessageList from "./pages/User-Page/ListSender";
import EditPost from "./pages/User-Page/EditPost";
import Report from "./pages/User-Page/report";
import RainEffect from "./components/RainEffect";
import FavoriteStores from "./pages/User-Page/favoriteStore";
import FavoriteProducts from "./pages/User-Page/favoriteProduct";
import RegisterExpert from "./pages/User-Page/registerExpert";
import Dashboard from "./pages/Admin-Page/Dashboard";

const App = () => {
  return (
    <>
      <RainEffect />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/detailMoto" element={<DetailMoto />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/purchased" element={<PurchasedPage />} />
          <Route path="/selling" element={<SellPage />} />
          <Route path="/listexp" element={<ListExpert />} />
          <Route path="/listStore" element={<ListStore />} />
          <Route path="/chat" element={<ChatMessage />} />
          <Route path="/identification" element={<UserIdentificationForm />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/expertDetail" element={<ExpertDetailPage />} />
          <Route path="/storeDetail" element={<StoreDetailPage />} />
          <Route path="/purchaseDetail" element={<PurchaseDetailPage />} />
          <Route path="/postDetail" element={<PostDetail />} />
          <Route path="/editPost/:id" element={<EditPost />} />
          <Route path="/listSender" element={<MessageList />} />
          <Route path="report" element={<Report />} />
          <Route path="favorite-store" element={<FavoriteStores />} />
          <Route path="favorite-products" element={<FavoriteProducts />} />
          <Route path="register-expert" element={<RegisterExpert />} />

          <Route
            path="/admin/dashboard"
            element={
              <AdminLayout>
                <Dashboard />
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
    </>
  );
};

export default App;
