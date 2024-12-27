import React from "react";
import "./Recharts.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTranslation } from "react-i18next";

const ChartBar = ({ onClose, selectedCard }) => {
  // Dữ liệu mẫu dựa trên card được chọn
  const { t } = useTranslation("manageUsers");
  const data = {
    totalUsers: [
      { time: "00:00", value: 10 },
      { time: "01:00", value: 20 },
      { time: "02:00", value: 30 },
      { time: "03:00", value: 25 },
      { time: "04:00", value: 35 },
    ],
    active: [
      { time: "00:00", value: 5 },
      { time: "01:00", value: 15 },
      { time: "02:00", value: 20 },
      { time: "03:00", value: 30 },
    ],
    newUsers: [
      { time: "00:00", value: 8 },
      { time: "01:00", value: 16 },
      { time: "02:00", value: 22 },
      { time: "03:00", value: 29 },
    ],
    inactive: [
      { time: "00:00", value: 3 },
      { time: "01:00", value: 5 },
      { time: "02:00", value: 7 },
      { time: "03:00", value: 6 },
    ],
  };

  const chartData = data[selectedCard] || []; // Lấy dữ liệu tương ứng với card

  return (
    <div className="chart-container">
      {/* Nút đóng */}
      <div className="chart-close-btn" onClick={onClose}>
        ✖
      </div>

      {/* Tiêu đề biểu đồ */}
      <h2 className="chart-title">{t(`map.${selectedCard}`)}</h2>

      {/* Biểu đồ */}
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={chartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255, 255, 255, 0.2)"
          />
          <XAxis
            dataKey="time"
            stroke="white"
            tick={{ fill: "white", fontSize: 12 }}
          />
          <YAxis
            stroke="white"
            tick={{ fill: "white", fontSize: 12 }}
            domain={[0, "auto"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "5px",
              fontSize: "12px",
              color: "#333",
            }}
            labelStyle={{ color: "#333", fontWeight: "bold" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ffffff"
            strokeWidth={2}
            dot={{ fill: "#ffffff", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBar;
