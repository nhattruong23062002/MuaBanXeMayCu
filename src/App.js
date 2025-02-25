import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./../src/styles/App.css";

import ManageAppointments from "./pages/Admin-Page/ManageAppointments";
import ManagePosts from "./pages/Admin-Page/ManagePosts";
import ManageUsers from "./pages/Admin-Page/ManageUsers";
import HandleComplaints from "./pages/Admin-Page/HandleComplaints";
import ManageExperts from "./pages/Admin-Page/ManageExperts";

import LoginForm from "./pages/User-Page/login";
import RegisterForm from "./pages/User-Page/register";
import HomePage from "./pages/User-Page/homePage";
import AccountPage from "./pages/User-Page/accountPage";
import PurchasedPage from "./pages/User-Page/ManagerPurchased";
import AdminLayout from "./layout/layoutAdmin";
import ListExpert from "./pages/User-Page/ListExpert";
import UserIdentificationForm from "./pages/User-Page/Identification";
import PaymentForm from "./pages/User-Page/Payment";
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
import FavoriteStores from "./pages/User-Page/favoriteStore";
import FavoriteProducts from "./pages/User-Page/favoriteProduct";
import RegisterExpert from "./pages/User-Page/registerExpert";
import Dashboard from "./pages/Admin-Page/Dashboard";
import ProfileExpert from "./pages/Admin-Page/ProfileExpert";
import CreateAppointment from "./pages/Admin-Page/CreateAppointments";
import { ThemeProvider } from "./components/ThemeContext";
import Profile from "./pages/Admin-Page/Profile/Profile";
import Settings from "./pages/Admin-Page/Setting/Settings";
import AddCar from "./pages/User-Page/addCar";
import ManageCars from "./pages/Admin-Page/ManageCars";
import EditCar from "./pages/Admin-Page/ManageCars/editCar";
import MyStore from "./pages/User-Page/myStore";
import DetailCar from "./pages/User-Page/detailCar";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/detailCar/:id" element={<DetailCar />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/purchased" element={<PurchasedPage />} />
                    <Route path="/selling" element={<SellPage />} />
                    <Route path="/listexp" element={<ListExpert />} />
                    <Route path="/listStore" element={<ListStore />} />
                    <Route path="/chat" element={<ChatMessage />} />
                    <Route path="/identification" element={<UserIdentificationForm />} />
                    <Route path="/payment" element={<PaymentForm />} />
                    <Route path="/upload" element={<AddCar />} />
                    <Route path="/expertDetail" element={<ExpertDetailPage />} />
                    <Route path="/storeDetail/:id" element={<StoreDetailPage />} />
                    <Route path="/my-store" element={<MyStore />} />
                    <Route path="/purchaseDetail" element={<PurchaseDetailPage />} />
                    <Route path="/postDetail" element={<PostDetail />} />
                    <Route path="/editPost/:id" element={<EditPost />} />
                    <Route path="/listSender" element={<MessageList />} />
                    <Route path="report" element={<Report />} />
                    <Route path="favorite-store" element={<FavoriteStores />} />
                    <Route path="favorite-products" element={<FavoriteProducts />} />
                    <Route path="register-expert" element={<RegisterExpert />} />
                    <Route
                        path="/admin/*"
                        element={
                            <ThemeProvider>
                                <AdminLayout>
                                    <Routes>
                                        <Route path="dashboard" element={<Dashboard />} />
                                        <Route
                                            path="manage-appointments"
                                            element={<ManageAppointments />}
                                        />
                                        <Route
                                            path="create-appointment"
                                            element={<CreateAppointment />}
                                        />
                                        <Route path="profile-expert" element={<ProfileExpert />} />
                                        <Route path="manage-posts" element={<ManagePosts />} />
                                        <Route path="edit-car/:id" element={<EditCar />} />
                                        <Route path="manage-users" element={<ManageUsers />} />
                                        <Route path="manage-cars" element={<ManageCars />} />
                                        <Route
                                            path="handle-complaints"
                                            element={<HandleComplaints />}
                                        />
                                        <Route path="manage-experts" element={<ManageExperts />} />
                                        <Route path="profile" element={<Profile />} />
                                        <Route path="setting" element={<Settings />} />
                                    </Routes>
                                </AdminLayout>
                            </ThemeProvider>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
};

export default App;