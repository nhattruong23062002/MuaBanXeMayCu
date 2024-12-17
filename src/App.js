import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./pages/User-Page/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from "./pages/User-Page/register";
import HomePage from "./pages/User-Page/homePage";
import DetailMoto from "./pages/User-Page/detailMoto";
import AccountPage from "./pages/User-Page/accountPage";
import PurchasedPage from "./pages/User-Page/Purchased";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div><HomePage /></div> }/>
          <Route path="/login" element={<div><LoginForm /></div> }/>
          <Route path="/register" element={<div><RegisterForm /></div> }/>
          <Route path="/detailMoto" element={<div><DetailMoto /></div> }/>
          <Route path="/account" element={<div><AccountPage /></div> }/>
          <Route path="/purchased" element={<div><PurchasedPage /></div> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
