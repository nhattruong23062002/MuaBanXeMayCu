import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import LayoutUser from "../../layout/layoutUser";
import MotoCard from "../../components/MotoCard";
import ContactModal from "../../components/ContactModal";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getDetailDealer } from "../../services/dealerSevice";
import { getAllCars } from "../../services/carService";
import { getDetailUser } from "../../services/userService";
import { Empty } from "antd";

function StoreDetailPage() {
  const { t } = useTranslation("storeDetail");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cars, setCars] = useState([]);
  const [dealer, setDealer] = useState();
  const [user, setUser] = useState();
  const [visibleCars, setVisibleCars] = useState(6);
  const [auctionCount, setAuctionCount] = useState(0);
  const [availableCount, setAvailableCount] = useState(0);
  const [soldCount, setSoldCount] = useState(0);
  const dealerId = useParams();


  useEffect(() => {
    const fetchCars = async () => {
      try {
        const detailDealer = await getDetailDealer(dealerId.id);
        const dataCars = await getAllCars({ status: "auction,available,sold" });
        const dataUser = await getDetailUser(detailDealer.userId);
        const result = dataCars.filter((car) => car.sellerId == dataUser.id);
        const auctionCars = result.filter(car => car.status === "auction").length;
        const availableCars = result.filter(car => car.status === "available").length;
        const soldCars = result.filter(car => car.status === "sold").length;

        setDealer(detailDealer);
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


  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleLoadMore = () => {
    setVisibleCars(prev => prev + 6);
  };

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto bg-white min-h-screen pb-24">
        <div className="bg-white py-4 shadow-md flex items-center px-4">
          <button
            className="text-2xl mr-4 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="text-xl font-bold text-gray-800">{t("pageTitle")}</h1>
        </div>

        <div className="bg-white rounded-b-lg p-6 text-center relative">
          <div className="w-40 h-40 rounded-full mx-auto border-2 border-blue-400 overflow-hidden">
            <img
              src={dealer?.avatarImage || "https://1nedrop.com/wp-content/uploads/2024/10/avatar-mac-dinh-30xJKPDu.jpg"}
              alt={t("storeName")}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-2xl text-gray-600"
            onClick={toggleFavorite}
          >
            {isFavorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <h2 className="text-2xl font-bold mt-4">{user?.userName}</h2>
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

        <div className="mx-4 mt-4">
          <h1 className="text-xl font-bold mb-4">{t("bikeListTitle")}</h1>
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

        <div className="w-full max-w-[800px] mx-auto fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white py-3 shadow-md flex justify-center rounded-lg px-6">
          <button
            className="flex justify-center items-center gap-2 bg-[#d59600] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#d59640] w-full"
            onClick={() => setModalOpen(true)}
          >
            <FiPhoneCall />
            {t("contactButton")}
          </button>
        </div>

        {isModalOpen && <ContactModal dealer={dealer} user={user} onClose={() => setModalOpen(false)} />}
      </div>
    </LayoutUser>
  );
}

export default StoreDetailPage;
