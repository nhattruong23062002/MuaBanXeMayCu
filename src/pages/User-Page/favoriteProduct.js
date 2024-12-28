import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import LayoutUser from "../../layout/layoutUser";
import MotoCard from "../../components/MotoCard";
import { useTranslation } from "react-i18next";

function FavoriteProducts() {
  const { t } = useTranslation("favoriteProduct");

  const bikes = [
    {
      id: 2,
      name: "Honda Sh mode",
      year: "2023",
      mileage: "1400km",
      price: "5x.000.000đ",
      image:
        "https://kuongngan.com/wp-content/uploads/2023/08/nqWK6azOcQk9GhvZvtcS.png",
    },
    {
      id: 3,
      name: "BMW R1250GS",
      year: "2021",
      mileage: "3000km",
      price: "14x.000.000đ",
      image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838",
    },
  ];

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto bg-white min-h-screen">
        <div className="bg-white py-4 flex items-center px-4">
          <button
            className="text-2xl mr-4 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="text-xl font-bold text-gray-800">{t("title")}</h1>
        </div>

        <div className="mx-8 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bikes.map((bike) => (
              <MotoCard
                key={bike.id}
                image={bike.image}
                name={bike.name}
                year={bike.year}
                mileage={bike.mileage}
                price={bike.price}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutUser>
  );
}

export default FavoriteProducts;
