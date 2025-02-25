import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { Modal, Input, Button, Spin, InputNumber } from "antd";
import LayoutUser from "../../layout/layoutUser";
import MotoCard from "../../components/MotoCard";
import ContactModal from "../../components/ContactModal";
import { useTranslation } from "react-i18next";
import { decodeToken, getToken } from "../../utils/authUtils";
import { useNavigate } from "react-router-dom";
import { getAllCars } from "../../services/carService";
import { getAllDealer, updateDealer } from "../../services/dealerSevice";
import { Empty } from 'antd';
import { getDetailUser, updateUser } from "../../services/userService";

function MyStore() {
    const { t } = useTranslation("myStore");
    const [isModalOpen, setModalOpen] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [cars, setCars] = useState([]);
    const [dealer, setDealer] = useState();
    const [visibleCars, setVisibleCars] = useState(6);
    const [auctionCount, setAuctionCount] = useState(0);
    const [availableCount, setAvailableCount] = useState(0);
    const [soldCount, setSoldCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const isLogin = getToken();
    const userToken = decodeToken();

    const handleEditStoreInfo = () => {
        setEditModalVisible(true);
    };

    const handleLoadMore = () => {
        setVisibleCars(prev => prev + 6);
    };

    useEffect(() => {
        if (!isLogin) {
            navigate("/login");
        }
    }, [isLogin, navigate]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const dataCars = await getAllCars({ status: "auction,available,sold" });
                const dataUser = await getDetailUser(userToken.id);
                const dataDealer = await getAllDealer({ userId: userToken.id });
                const result = dataCars.filter((car) => car.sellerId == userToken.id);
                const auctionCars = result.filter(car => car.status === "auction").length;
                const availableCars = result.filter(car => car.status === "available").length;
                const soldCars = result.filter(car => car.status === "sold").length;

                setDealer(dataDealer[0]);
                setAuctionCount(auctionCars);
                setAvailableCount(availableCars);
                setSoldCount(soldCars);
                setCars(result);
                setUser(dataUser);
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        };
        fetchCars();
    }, []);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('avatarImage', file);

            updateAvatar(formData);
        }
    };

    const updateAvatar = async (formData) => {
        setLoading(true);
        try {
            const response = await updateDealer(dealer.id, formData);
            if (response) {
                const file = formData.get('avatarImage');
                const tempImageUrl = URL.createObjectURL(file);

                setDealer(prevState => ({
                    ...prevState,
                    avatarImage: tempImageUrl,
                }));

                if (response.data?.avatarImage) {
                    setDealer(prevState => ({
                        ...prevState,
                        avatarImage: response.avatarImage,
                    }));
                }
            }
        } catch (error) {
            console.error("Error updating avatar:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateStoreInfo = async () => {
        setEditModalVisible(false);
        try {
            const dataUser = {
                userName: user.userName,
                address: user.address,
                phoneNumber: user.phoneNumber
            }
            const dataDealer = {
                description: dealer.description
            }
            const responseDealer = await updateDealer(dealer.id, dataDealer);
            const responseUser = await updateUser(userToken.id, dataUser);
            setDealer(responseDealer);
            setUser(responseUser);
        } catch (error) {
            console.error("Error updating:", error);
        } finally {
            setLoading(false);
        }
    };

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
                    <h1 className="text-xl font-bold text-gray-800">{t("storeTitle")}</h1>
                </div>

                <div className="bg-white rounded-b-lg p-6 text-center relative">
                    <div className="bg-white rounded-b-lg p-6 text-center relative">
                        <div className="bg-white rounded-b-lg text-center relative">
                            <div className="w-40 h-40 rounded-full mx-auto border-2 border-blue-400 overflow-hidden grid place-items-center">
                                {loading ? (
                                    <Spin size="large" />
                                ) : (
                                    <img
                                        src={dealer?.avatarImage || "https://1nedrop.com/wp-content/uploads/2024/10/avatar-mac-dinh-30xJKPDu.jpg"}
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <button
                                className="text-blue-600 font-semibold mt-2"
                                onClick={() => document.getElementById('avatarInput').click()}
                            >
                                {t("chooseImage")}
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
                    {userToken?.userName ? (
                        <h2 className="text-2xl font-bold">{userToken.userName}</h2>
                    ) : (
                        <></>
                    )}
                </div>

                <div className="bg-white rounded-lg mt-4">
                    <div className="grid grid-cols-4 text-center py-4">
                        <div className="flex justify-center items-center flex-col border border-600 py-2 border-l-0">
                            <p className="text-[#868d93] font-medium text-sm m-0">{t("auction")}</p>
                            <p className="text-lg font-bold">{auctionCount}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col border border-600 py-2 border-l-0">
                            <p className="text-[#868d93] font-medium text-sm m-0">{t("available")}</p>
                            <p className="text-lg font-bold">{availableCount}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col border border-600 py-2 border-l-0">
                            <p className="text-[#868d93] font-medium text-sm m-0">{t("sold")}</p>
                            <p className="text-lg font-bold">{soldCount}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col border border-600 py-2 border-l-0 border-r-0">
                            <p className="text-[#868d93] font-medium text-sm m-0">{t("favorite")}</p>
                            <p className="text-lg font-bold">200</p>
                        </div>
                    </div>
                </div>

                <div className="mx-4 mt-6">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-bold mb-4">{t("dealerInfo")}</h1>
                        <button
                            className="text-blue-600 font-semibold cursor-pointer p-2"
                            onClick={handleEditStoreInfo}
                        >
                            {t("editButton")}
                        </button>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md pb-0">
                        <div className="flex justify-between items-center">
                            <div className="w-full">
                                <table className="min-w-full table-auto">
                                    <tbody>
                                        <tr>
                                            <td className="py-3 border-b text-[#868d93] font-medium">{t("dealerName")}</td>
                                            <td className="font-semibold py-2 border-b text-right">{user?.userName}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 border-b text-[#868d93] font-medium">{t("phoneNumber")}</td>
                                            <td className="font-semibold py-2 border-b text-right">{user?.phoneNumber}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 border-b text-[#868d93] font-medium">{t("address")}</td>
                                            <td className="font-semibold py-2 border-b text-right">{user?.address}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 border-b text-[#868d93] font-medium">{t("description")}</td>
                                            <td className="font-semibold py-2 border-b text-right truncate">{dealer?.description}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mx-4 mt-4">
                    <h1 className="text-xl font-bold mb-4">{t("carList")}</h1>
                    {cars.length === 0 ? (
                        <Empty className="" description="No data" />
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                            {cars.slice(0, visibleCars).map((car) => (
                                <MotoCard
                                    key={car.id}
                                    image={car.additionalImages[0]}
                                    name={car.model}
                                    year={car.year}
                                    mileage={car.mileage}
                                    price={car.price}
                                    status={car.status}
                                />
                            ))}
                        </div>
                    )}
                    {visibleCars < cars.length && (
                        <div className="flex justify-center mt-4">
                            <button
                                className="w-full bg-[#d59600] text-white px-4 py-2 rounded-lg hover:bg-[#d59650]"
                                onClick={handleLoadMore}
                            >
                                {t("loadMore")}
                            </button>
                        </div>
                    )}
                </div>

                <div className="w-full max-w-[800px] mx-auto fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white py-3 shadow-md flex justify-center rounded-lg px-4">
                    <button
                        className="flex justify-center items-center gap-2 bg-[#d59600] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#d59640] w-full"
                        onClick={() => setModalOpen(true)}
                    >
                        <FiPhoneCall />
                        {t("contactButton")}
                    </button>
                </div>

                {isModalOpen && <ContactModal dealer={dealer} user={user} onClose={() => setModalOpen(false)} />}

                <Modal
                    title={t("editStoreTitle")}
                    visible={editModalVisible}
                    onCancel={() => setEditModalVisible(false)}
                    onOk={handleUpdateStoreInfo}
                    width={800}
                >
                    <div>
                        <Input
                            value={user?.userName}
                            onChange={(e) => setUser({ ...user, userName: e.target.value })}
                            placeholder={t("dealerNamePlaceholder")}
                        />
                        <Input
                            type="number"
                            value={user?.phoneNumber}
                            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                            placeholder={t("phoneNumberPlaceholder")}
                            className="mt-4 w-full"
                        />
                        <Input
                            value={user?.address}
                            onChange={(e) => setUser({ ...user, address: e.target.value })}
                            placeholder={t("addressPlaceholder")}
                            className="mt-4"
                        />
                        <Input.TextArea
                            value={dealer?.description}
                            onChange={(e) => setDealer({ ...dealer, description: e.target.value })}
                            placeholder={t("descriptionPlaceholder")}
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