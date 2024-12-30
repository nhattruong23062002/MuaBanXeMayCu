import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import {
  FaUsers,
  FaStore,
  FaMotorcycle,
  FaMoneyBillWave,
  FaUserTie,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation("dashboard");

  const topSellingData = [
    { name: "Jan", SH: 30, Winner: 20, Ware: 15 },
    { name: "Feb", SH: 32, Winner: 16, Ware: 20 },
    { name: "Mar", SH: 50, Winner: 30, Ware: 25 },
  ];

  const weeklyTransactionData = [
    { day: "Mon", amount: 5000000 },
    { day: "Tue", amount: 6000000 },
    { day: "Wed", amount: 7000000 },
    { day: "Thu", amount: 8000000 },
    { day: "Fri", amount: 6500000 },
    { day: "Sat", amount: 9000000 },
    { day: "Sun", amount: 7500000 },
  ];

  const topStores = [
    { name: "A", revenue: 50000000 },
    { name: "B", revenue: 40000000 },
    { name: "C", revenue: 30000000 },
  ];

  const topExperts = [
    { name: "A", expertise: t("expertise1"), cases: 120 },
    { name: "B", expertise: t("expertise2"), cases: 90 },
    { name: "C", expertise: t("expertise3"), cases: 80 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <FaUsers className="text-blue-600 text-2xl mr-2" />
              <h2 className="text-lg font-medium">{t("totalUser")}</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">1500</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <FaStore className="text-green-600 text-2xl mr-2" />
              <h2 className="text-lg font-medium">{t("totalStore")}</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">120</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <FaUserTie className="text-red-600 text-2xl" />
              <h2 className="text-lg font-medium">{t("totalExpert")}</h2>
            </div>
            <p className="text-3xl font-bold text-red-600">45</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <FaMotorcycle className="text-purple-600 text-3xl" />
              <h2 className="text-lg font-medium">{t("totalMoto")}</h2>
            </div>
            <p className="text-3xl font-bold text-purple-600">320</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <FaMoneyBillWave className="text-yellow-600 text-2xl" />
              <h2 className="text-lg font-medium">{t("totalRevenue")}</h2>
            </div>
            <p className="text-3xl font-bold text-yellow-600">
              2,3{t("money")}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">{t("topSellingCars")}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={topSellingData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line
                type="monotone"
                dataKey="SH"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Winner"
                stroke="#82ca9d"
                strokeWidth={2}
                dot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Ware"
                stroke="#ff7300"
                strokeWidth={2}
                dot={{ r: 5 }}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">{t("weeklyTransaction")}</h2>
          <ResponsiveContainer width="98%" height={300}>
            <BarChart
              data={weeklyTransactionData}
              margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">{t("topStore")}</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 font-medium">{t("nameStore")}</th>
                <th className="border-b p-2 font-medium">
                  {t("revenueStore")}
                </th>
              </tr>
            </thead>
            <tbody>
              {topStores.map((store, index) => (
                <tr key={index}>
                  <td className="border-b p-2">
                    {t("privateName")} {store.name}
                  </td>
                  <td className="border-b p-2">
                    {store.revenue.toLocaleString()} VND
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">{t("topExpert")}</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 font-medium">{t("nameExpert")}</th>
                <th className="border-b p-2 font-medium">{t("expertise")}</th>
                <th className="border-b p-2 font-medium">
                  {t("numberBooking")}
                </th>
              </tr>
            </thead>
            <tbody>
              {topExperts.map((expert, index) => (
                <tr key={index}>
                  <td className="border-b p-2">
                    {t("Expert")} {expert.name}
                  </td>
                  <td className="border-b p-2">{expert.expertise}</td>
                  <td className="border-b p-2">{expert.cases}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
