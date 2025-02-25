import React, { useState, useEffect } from "react";
import { Table, Button, Space, Popconfirm } from "antd";
import { useTranslation } from "react-i18next";
import { getAllCars, updateCar } from "../../../services/carService";
import { getDetailUser } from "../../../services/userService";
import { toast, ToastContainer } from "react-toastify";
import CarDetailsModal from "../../../components/CarDetailsModal";
import { EyeOutlined } from "@ant-design/icons";

const ManagePosts = () => {
  const { t } = useTranslation("managePosts");
  const [cars, setCars] = useState([]);
  const [users, setUsers] = useState({});
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchCars = async () => {
    try {
      const response = await getAllCars({ status: "pending" });
      setCars(response);

      const sellerIds = response.map((car) => car.sellerId);
      const userPromises = sellerIds.map((id) => getDetailUser(id));
      const userResponses = await Promise.all(userPromises);
      const userMap = userResponses.reduce((acc, user) => {
        acc[user.id] = user.userName;
        return acc;
      }, {});
      setUsers(userMap);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const formatPrice = (price) => {
    return price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      .concat(" đ");
  };

  const handleAccept = async (carId) => {
    try {
      const updatedCar = await updateCar(carId, { status: "available" });
      toast.success(t("acceptSuccess"), { autoClose: 1500 });
      setTimeout(() => {
        fetchCars();
      }, 1500);
      console.log(`Accepted car with ID: ${carId}`);
    } catch (error) {
      console.error("Error accepting car:", error);
    }
  };

  const handleReject = async (carId) => {
    try {
      const updatedCar = await updateCar(carId, { status: "rejected" });
      toast.success(t("rejectSuccess"), { autoClose: 1500 });
      setTimeout(() => {
        fetchCars();
      }, 1500);
      console.log(`Rejected car with ID: ${carId}`);
    } catch (error) {
      console.error("Error rejecting car:", error);
    }
  };

  const handleRowClick = (car) => {
    setSelectedCar(car);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: t("stt"),
      key: "stt",
      render: (_, record, index) => index + 1,
    },
    {
      title: t("seller"),
      dataIndex: "sellerId",
      key: "sellerId",
      render: (sellerId) => users[sellerId] || t("loading"),
    },
    {
      title: t("model"),
      dataIndex: "model",
      key: "model",
    },
    {
      title: t("make"),
      dataIndex: "make",
      key: "make",
    },
    {
      title: t("licensePlate"),
      dataIndex: "license_plate",
      key: "license_plate",
    },
    {
      title: t("color"),
      dataIndex: "color",
      key: "color",
    },
    {
      title: t("year"),
      dataIndex: "year",
      key: "year",
      sorter: (a, b) => a.year - b.year,
    },
    {
      title: t("mileage"),
      dataIndex: "mileage",
      key: "mileage",
    },
    {
      title: t("price"),
      dataIndex: "price",
      key: "price",
      render: (price) => formatPrice(price),
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: t("status"),
      dataIndex: "status",
      key: "status",
    },
    {
      title: t("action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => handleAccept(record.id)}
            className="accept-button"
          >
            {t("accept")}
          </Button>
          <Popconfirm
            title={t("confirmReject")}
            onConfirm={() => handleReject(record.id)}
            okText={t("yes")}
            cancelText={t("no")}
          >
            <Button danger>{t("reject")}</Button>
          </Popconfirm>
          <Button onClick={() => handleRowClick(record)} icon={<EyeOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">{t("managePostsTitle")}</h2>
      <Table columns={columns} dataSource={cars} rowKey="id" />
      <CarDetailsModal
        visible={isModalVisible}
        car={selectedCar}
        onClose={() => setIsModalVisible(false)}
      />
      <ToastContainer />
    </div>
  );
};

export default ManagePosts;
