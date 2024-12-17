
import "./App.css";
import LoginForm from "./pages/User-Page/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from "./pages/User-Page/register";
import HomePage from "./pages/User-Page/homePage";
import DetailMoto from "./pages/User-Page/detailMoto";
import AccountPage from "./pages/User-Page/accountPage";
import PurchasedPage from "./pages/User-Page/Purchased";
import React from 'react';
import ChatMessage from './components/ChatMessage'; // Component chat message
import ListExpert from './pages/User-Page/ListExpert';
import UserIdentificationForm from './pages/User-Page/Identification';
import PaymentForm from './pages/User-Page/Payment';
import Upload from './pages/User-Page/Upload';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div><HomePage /></div>} />
          <Route path="/login" element={<div><LoginForm /></div>} />
          <Route path="/register" element={<div><RegisterForm /></div>} />
          <Route path="/detailMoto" element={<div><DetailMoto /></div>} />
          <Route path="/account" element={<div><AccountPage /></div>} />
          <Route path="/purchased" element={<div><PurchasedPage /></div>} />
          <Route path="/listexp" element={<ListExpert />} />
          <Route path="/chat" element={<ChatMessage />} />
          <Route path="/identification" element={<UserIdentificationForm />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
