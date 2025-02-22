import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { Modal, Input, Button } from "antd";
import LayoutUser from "../../layout/layoutUser";
import MotoCard from "../../components/MotoCard";
import ContactModal from "../../components/ContactModal";
import { useTranslation } from "react-i18next";
import { decodeToken, getToken } from "../../utils/authUtils";
import { useNavigate } from "react-router-dom";
import { getAllCars } from "../../services/carService";
import { getAllDealer } from "../../services/dealerSevice";

function MyStore() {
    const { t } = useTranslation("storeDetail");
    const [isModalOpen, setModalOpen] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [cars, setCars] = useState([]);
    const [visibleCars, setVisibleCars] = useState(6);
    const [auctionCount, setAuctionCount] = useState(0);
    const [availableCount, setAvailableCount] = useState(0);
    const [soldCount, setSoldCount] = useState(0);
    const navigate = useNavigate();
    const isLogin = getToken();
    const seller = decodeToken();
    const [storeInfo, setStoreInfo] = useState({

    });


    const handleEditStoreInfo = () => {
        setEditModalVisible(true);
    };

    const handleUpdateStoreInfo = () => {
        setEditModalVisible(false);
    };

    const handleLoadMore = () => {
        setVisibleCars(prev => prev + 6);
    };

    useEffect(() => {
        if (!isLogin) {
            navigate("/login");
        }
    }, [isLogin, navigate]);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setStoreInfo({
                    ...storeInfo,
                    avatar: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };


    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await getAllCars({ status: "auction,available,sold" });
                const dataDealer = await getAllDealer({ sellerId: seller.id });
                const result = response.filter((car) => car.sellerId == seller.id);
                const auctionCars = result.filter(car => car.status === "auction").length;
                const availableCars = result.filter(car => car.status === "available").length;
                const soldCars = result.filter(car => car.status === "sold").length;

                setAuctionCount(auctionCars);
                setAvailableCount(availableCars);
                setSoldCount(soldCars);
                setCars(result);
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        };
        fetchCars();
    }, []);

    return (
        <LayoutUser>
            <div className="max-w-[800px] mx-auto bg-white pb-32">
                <div className="bg-white py-4 shadow-md flex items-center px-4">
                    <button
                        className="text-2xl mr-4 cursor-pointer"
                        onClick={() => window.history.back()}
                    >
                        <IoMdArrowRoundBack />
                    </button>
                    <h1 className="text-xl font-bold text-gray-800">Cửa hàng của tôi</h1>
                </div>

                <div className="bg-white rounded-b-lg p-6 text-center relative">
                    <div className="bg-white rounded-b-lg p-6 text-center relative">
                        <div className="bg-white rounded-b-lg p-6 text-center relative">
                            <div className="w-40 h-40 rounded-full mx-auto border-2 border-blue-400 overflow-hidden">
                                <img
                                    src="https://1nedrop.com/wp-content/uploads/2024/10/avatar-mac-dinh-30xJKPDu.jpg"
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button
                                className="text-blue-600 font-semibold mt-2"
                                onClick={() => document.getElementById('avatarInput').click()}
                            >
                                Chọn ảnh
                            </button>
                            <input
                                id="avatarInput"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleAvatarChange}
                            />
                        </div>
                    </div>

                    {/* <h2 className="text-2xl font-bold mt-4">{}</h2> */}
                </div>

                <div className="bg-white rounded-lg mt-4">
                    <div className="grid grid-cols-4 text-center py-4">
                        <div className="flex justify-center items-center flex-col border border-600 py-2 border-l-0">
                            <p className="text-[#868d93] font-medium text-sm m-0">Đang đấu giá</p>
                            <p className="text-lg font-bold">{auctionCount}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col border border-600 py-2 border-l-0">
                            <p className="text-[#868d93] font-medium text-sm m-0">Đang bán</p>
                            <p className="text-lg font-bold">{availableCount}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col border border-600 py-2 border-l-0">
                            <p className="text-[#868d93] font-medium text-sm m-0">Đã bán</p>
                            <p className="text-lg font-bold">{soldCount}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col border border-600 py-2 border-l-0 border-r-0">
                            <p className="text-[#868d93] font-medium text-sm m-0">Yêu thích</p>
                            <p className="text-lg font-bold">200</p>
                        </div>
                    </div>
                </div>

                <div className="mx-8 mt-6">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-bold mb-4">Thông tin đại lý</h1>
                        <button
                            className="text-blue-600 font-semibold cursor-pointer p-2"
                            onClick={handleEditStoreInfo}
                        >
                            Sửa
                        </button>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md pb-0">
                        <div className="flex justify-between items-center">
                            <div className="w-full">
                                <table className="min-w-full table-auto">
                                    <tbody>
                                        <tr>
                                            <td className="py-3 border-b text-[#868d93] font-medium">Tên đại lý</td>
                                            <td className="font-semibold py-2 border-b text-right">{storeInfo?.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 border-b text-[#868d93] font-medium">Địa chỉ</td>
                                            <td className="font-semibold py-2 border-b text-right">{storeInfo?.address}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 border-b text-[#868d93] font-medium">Mô tả</td>
                                            <td className="font-semibold py-2 border-b text-right truncate">{storeInfo?.description}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mx-8 mt-4">
                    <h1 className="text-xl font-bold mb-4">Danh sách xe</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cars.slice(0, visibleCars).map((car) => (
                            <MotoCard
                                key={car.id}
                                image={car.additionalImages[0]}
                                name={car.model}
                                year={car.year}
                                mileage={car.mileage}
                                price={car.price}
                            />
                        ))}
                    </div>
                    {visibleCars < cars.length && (
                        <div className="flex justify-center mt-4">
                            <button
                                className="w-full bg-[#d59600] text-white px-4 py-2 rounded-lg hover:bg-[#d59650]"
                                onClick={handleLoadMore}
                            >
                                Xem thêm
                            </button>
                        </div>
                    )}
                </div>

                <div className="w-full max-w-[800px] mx-auto fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white py-3 shadow-md flex justify-center rounded-lg px-6">
                    <button
                        className="flex justify-center items-center gap-2 bg-[#d59600] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#d59640] w-full"
                        onClick={() => setModalOpen(true)}
                    >
                        <FiPhoneCall />
                        {t("contactButton")}
                    </button>
                </div>

                {isModalOpen && <ContactModal onClose={() => setModalOpen(false)} />}

                <Modal
                    title="Sửa thông tin đại lý"
                    visible={editModalVisible}
                    onCancel={() => setEditModalVisible(false)}
                    onOk={handleUpdateStoreInfo}
                    width={800}
                >
                    <div>
                        <Input
                            value={storeInfo.name}
                            onChange={(e) =>
                                setStoreInfo({ ...storeInfo, name: e.target.value })
                            }
                            placeholder="Tên đại lý"
                        />
                        <Input
                            value={storeInfo.address}
                            onChange={(e) =>
                                setStoreInfo({ ...storeInfo, address: e.target.value })
                            }
                            placeholder="Địa chỉ đại lý"
                            className="mt-4"
                        />
                        <Input.TextArea
                            value={storeInfo.description}
                            onChange={(e) =>
                                setStoreInfo({ ...storeInfo, description: e.target.value })
                            }
                            placeholder="Mô tả"
                            className="mt-4"
                            rows={6}
                        />
                    </div>
                </Modal>
            </div>
        </LayoutUser>
    );
}

export default MyStore;