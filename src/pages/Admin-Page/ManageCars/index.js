import React, { useState, useEffect } from "react";
import { Table, Button, Input, Space, Popconfirm } from "antd";
import { useTranslation } from "react-i18next";
import { deleteCar, getAllCars } from "../../../services/carService";
import { getDetailUser } from "../../../services/userService";
import { ToastContainer } from "react-toastify";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ManageCars = () => {
    const { t } = useTranslation("managePosts");
    const [cars, setCars] = useState([]);
    const [users, setUsers] = useState({});
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const fetchCars = async () => {
        try {
            const response = await getAllCars({ status: "auction,available,sold" });
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

    const handleSearch = (selectedKeys, confirm) => {
        confirm();
        setSearchText(selectedKeys[0] || "");
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };

    const createFilterDropdown = (placeholder, dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    autoFocus
                    placeholder={placeholder}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        onFilter: (value, record) => record[dataIndex]?.toLowerCase().includes(value.toLowerCase()),
    });


    const handleEdit = (carId) => {
        navigate(`/admin/edit-car/${carId}`);
    };

    const handleDelete = async (carId) => {
        try {
            await deleteCar(carId);
            setCars((prevUsers) => prevUsers.filter((car) => car.id !== carId));
        } catch (error) {
            console.error("Error deleting car:", error);
        }
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
            ...createFilterDropdown("Search model", "model"),
        },
        {
            title: t("make"),
            dataIndex: "make",
            key: "make",
            ...createFilterDropdown("Search make", "make"),
        },
        {
            title: t("licensePlate"),
            dataIndex: "license_plate",
            key: "license_plate",
            ...createFilterDropdown("Search license plate", "license_plate"),
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
                    <Button icon={<EditOutlined />} onClick={() => handleEdit(record.id)} />
                    <Popconfirm
                        title="Do you want to delete?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button icon={<DeleteOutlined />} danger />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-6">{t("manageCarsTitle")}</h2>
            <Table columns={columns} dataSource={cars} rowKey="id" />
            <ToastContainer />
        </div>
    );
};

export default ManageCars;
