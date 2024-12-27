import React from "react";
import LayoutUser from "../../layout/layoutUser";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const FavoriteStores = () => {
  const { t, i18n } = useTranslation("favoriteStore");
  const navigation = useNavigate();

  const stores = [
    {
      name: "Xe Máy Đoàn Văn",
      rating: 5.0,
      sales: 2162,
      favourites: 1414,
      logo: "https://png.pngtree.com/png-vector/20230513/ourlarge/pngtree-new-motorbike-logo-design-vector-png-image_7095431.png",
      verified: true,
    },
    {
      name: "Xe máy Út Tịch",
      rating: 5.0,
      sales: 91,
      favourites: 173,
      logo: "https://aloinan.com/wp-content/uploads/2018/01/logo-xe-may-3.jpg",
      verified: true,
    },
  ];

  const handleShowStore = () => {
    navigation("/storeDetail")
  }

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto px-4 bg-white min-h-screen">
        <div className="max-w-[800px] mx-auto py-4 flex items-center">
          <button
            onClick={() => window.history.back()}
            className="text-2xl text-gray-600 hover:text-gray-800 mr-2"
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="text-left text-xl font-bold flex-grow">
            {t("title")}
          </h1>
        </div>
        {stores.map((store, index) => (
          <div
            key={index}
            className="flex items-center bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-sm"
            onClick={handleShowStore}
          >
            <img
              src={store.logo}
              alt={store.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{store.name}</h3>
              <div className="text-sm text-gray-500 flex items-center space-x-3 mt-1">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.684a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.127 2.266a1 1 0 00-.364 1.118l1.2 3.684c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.127 2.266c-.784.57-1.838-.197-1.54-1.118l1.2-3.684a1 1 0 00-.364-1.118L3.042 9.111c-.784-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.684z" />
                  </svg>
                  <span className="ml-1">{store.rating}</span>
                </span>
                <span>{t("sales")} {store.sales}</span>
                <span className="text-red-500">
                {t("favourite")} {store.favourites}
                </span>
              </div>
              {store.verified && (
                <span className="inline-block bg-teal-600 text-white text-xs font-semibold mt-2 px-3 py-1 rounded-full">
                   {t("trustedPartner")}
                </span>
              )}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        ))}
      </div>
    </LayoutUser>
  );
};

export default FavoriteStores;
