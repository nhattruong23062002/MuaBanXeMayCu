import React, { useEffect, useState } from "react";
import ExpertCard from "../../components/ExpertCard";
import { useNavigate } from "react-router-dom";
import LayoutUser from "../../layout/layoutUser";
import { useTranslation } from 'react-i18next';
import { getAllDealer } from "../../services/dealerSevice";
import { getUsers } from "../../services/userService";
import { getAllCars } from "../../services/carService";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const ListStore = () => {
  const { t } = useTranslation("listExpert");
  const [searchTerm, setSearchTerm] = useState("");
  const [dealers, setDealers] = useState([]);
  const [provinces, setProvinces] = useState(["Toàn Quốc"]);
  const [selectedProvince, setSelectedProvince] = useState("Toàn Quốc");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get("https://provinces.open-api.vn/api/?depth=1");
        const provinceNames = response.data.map((item) => item.name);
        setProvinces(["Toàn Quốc", ...provinceNames]);
      } catch (error) {
        console.log("Lỗi khi lấy danh sách tỉnh thành:", error);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const getListData = async () => {
      try {
        const responseDealer = await getAllDealer();
        const responseUser = await getUsers();
        const responseCars = await getAllCars({ status: "auction,available,sold" });

        const filteredUsers = responseUser.filter(user =>
          responseCars.some(car => car.sellerId == user.id)
        );

        const combinedData = filteredUsers.map(user => {
          const dealer = responseDealer.find(dealer => dealer.userId === user.id);
          return {
            id: user.id,
            userName: user.userName,
            address: user.address,
            phoneNumber: user.phoneNumber,
            avatarImage: dealer ? dealer.avatarImage : "",
          };
        });

        setDealers(combinedData);
      } catch (err) {
        console.log("Lỗi khi lấy dữ liệu:", err);
      }
    };

    getListData();
  }, []);

  const normalizeProvinceName = (province) => {
    return province.replace(/^(Thành phố|Tỉnh)\s+/i, "").trim();
  };

  const filterUsers = dealers.filter((user) => {
    const normalizedProvince = normalizeProvinceName(selectedProvince);
    const userAddress = user.address.toLowerCase();
    return (
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedProvince === "Toàn Quốc" || userAddress.includes(normalizedProvince.toLowerCase()))
    );
  });


  const handleContactClick = (store) => {
    navigate("/chat", { state: { store } });
  };

  const handleShowExpertDetail = (store) => {
    navigate(`/storeDetail/${store.id}`);
  };

  return (
    <LayoutUser>
      <div className="bg-[#f5f5f5] py-6">
        <div className="max-w-[800px] min-h-screen mx-auto bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bolder text-center mb-6">
            {t('listShopTitle')}
          </h2>

          <div className="relative mb-2">
            <input
              type="text"
              placeholder={t('searchPlaceStore')}
              className="pl-4 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative mb-2 flex justify-end">
            <button
              className="flex justify-between items-center rounded-lg focus:outline-none gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="flex items-center gap-1">
                <FaLocationDot className="text-red-600" /> {selectedProvince}
              </span>
              <IoIosArrowDown />
            </button>
            {isDropdownOpen && (
              <ul className="absolute z-10 right-0 bg-white border border-gray-300 rounded-lg mt-1 shadow-md max-h-80 overflow-auto">
                {provinces.map((province) => (
                  <li
                    key={province}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${selectedProvince === province ? "bg-gray-300" : ""
                      }`}
                    onClick={() => {
                      setSelectedProvince(province);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {province}
                  </li>
                ))}
              </ul>
            )}
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filterUsers.map((store) => (
              <ExpertCard
                key={store.id}
                avatar={store.avatarImage}
                nameStore={store.userName}
                address={store.address}
                phone={store.phoneNumber}
                onContactClick={() => handleContactClick(store)}
                onShowExpertDetail={() => handleShowExpertDetail(store)}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default ListStore;
