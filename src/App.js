// src/App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"; // Đảm bảo đúng đường dẫn tới Navbar.js
import Sidebar from "./components/Sidebar"; // Import Sidebar
import Routes from "./routes"; // Import Routes từ file routes.js

function App() {
  return (
    <Routes>
      <div className="App">
        <Navbar /> {/* Hiển thị Navbar */}
        <div className="main-container">
          <Sidebar /> {/* Hiển thị Sidebar */}
          <div className="content">
            <Routes /> {/* Hiển thị các trang nội dung */}
          </div>
        </div>
      </div>
    </Routes>
  );
}

export default App;
