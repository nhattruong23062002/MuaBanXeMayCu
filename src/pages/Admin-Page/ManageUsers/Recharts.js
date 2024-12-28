import React from "react";
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

  const chartData = data[selectedCard] || [];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative bg-gray-900 text-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white focus:outline-none"
        >
          ✖
        </button>

        {/* Chart Title */}
        <h2 className="text-2xl font-bold text-center mb-4">
          {t(`map.${selectedCard}`)}
        </h2>

        {/* Line Chart */}
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
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
      </div>
    </div>
  );
};

export default ChartBar;
