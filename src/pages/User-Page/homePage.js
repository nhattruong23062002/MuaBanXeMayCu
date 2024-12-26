import React, { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LayoutUser from "../../layout/layoutUser";
import BannerSwiper from "../../components/BannerSwipper";
import FilterBar from "../../components/FilterBar";
import MotoCard from "../../components/MotoCard";
import AdBanner from "../../components/AdBanner";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

function HomePage() {
  const { t } = useTranslation("homepage");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    price: 100,
    year: "",
    location: "",
  });
  const [image, setImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [matchingBikes, setMatchingBikes] = useState([]);
  const [model, setModel] = useState(null);
  const [scanComplete, setScanComplete] = useState(false);

  const bikes = [
    {
      id: 1,
      name: "Honda Sh 125i",
      year: "2020",
      type: t("scooter"),
      mileage: "1000km",
      price: 20,
      location: "Hà Nội",
      image: "https://res.cloudinary.com/dtq8qjauq/image/upload/v1735100812/ocqmgrzseb4zsq7hwkcj.jpg",
    },
    {
      id: 2,
      name: "Ducati Monster 821",
      year: "2023",
      type: t("big_bike"),
      mileage: "1600km",
      price: 40,
      location: "TP.HCM",
      image: "https://res.cloudinary.com/dtq8qjauq/image/upload/v1735100902/locb1d3w3wperlkryebe.jpg",
    },
    {
      id: 3,
      name: "BMW R1250GS",
      year: "2021",
      type: t("big_bike"),
      mileage: "3000km",
      price: 50,
      location: "Hà Nội",
      image: "https://res.cloudinary.com/dtq8qjauq/image/upload/v1735101961/ohqgvomzmnkg7swzjvjg.jpg",
    },
    {
      id: 4,
      name: "Honda Sh mode",
      year: "2023",
      mileage: "1400km",
      price: 70,
      type: t("scooter"),
      location: "TP.HCM",
      image: "https://res.cloudinary.com/dtq8qjauq/image/upload/v1735102422/ug5dxpfhfp2m5dvfwzhn.png",
    },
    {
      id: 5,
      name: "Honda Sh 125i",
      year: "2021",
      type: t("scooter"),
      mileage: "3000km",
      price: 68,
      location: "Đà Nẵng",
      image: "https://res.cloudinary.com/dtq8qjauq/image/upload/v1735102448/ifazvuf84dbqm6aeue0f.jpg",
    },
    {
      id: 6,
      name: "Xe moto Honda CB190R",
      year: "2017",
      type: t("big_bike"),
      mileage: "12000km",
      price: 77,
      location: "Đà Nẵng",
      image: "https://res.cloudinary.com/dtq8qjauq/image/upload/v1735102484/pq2v5lfbxls5xjzjdqnm.png",
    },
  ];

  useEffect(() => {
    async function loadModel() {
      const mobilenetModel = await mobilenet.load();
      setModel(mobilenetModel);
    }
    loadModel();
  }, []);

  const compareImages = async (userImage) => {
    if (!model) return;

    setMatchingBikes([]);
    const userPrediction = await model.classify(userImage);

    for (let bike of bikes) {
      const bikeImage = new Image();
      bikeImage.crossOrigin = "Anonymous";
      bikeImage.src = bike.image;

      await new Promise((resolve) => {
        bikeImage.onload = async () => {
          if (!model) return;
          const bikePrediction = await model.classify(bikeImage);

          if (userPrediction[0].className === bikePrediction[0].className) {
            setMatchingBikes((prevState) => [...prevState, bike]);
          }
          resolve();
        };
      });
    }

    setScanComplete(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setIsScanning(true);

      const userImage = new Image();
      userImage.crossOrigin = "Anonymous";
      userImage.src = imageUrl;

      userImage.onload = () => {
        setTimeout(() => {
          compareImages(userImage);
          setIsScanning(false);
        }, 2000);
      };
    }
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredBikes = bikes.filter((bike) => {
    const actualPrice = bike.price * 10;
    const filterPrice = filters.price * 10;

    return (
      (!filters.type || bike.type === filters.type) &&
      (!filters.year || bike.year === filters.year) &&
      (!filters.location || bike.location === filters.location) &&
      actualPrice <= filterPrice &&
      bike.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const formatPrice = (price) => {
    return `${Math.floor(price / 10)}x.000.000đ`;
  };

  return (
    <LayoutUser>
      <AdBanner />
      <div className="max-w-[800px] mx-auto relative bg-white">
        <div className="mb-8 relative">
          <BannerSwiper />
          <FilterBar onFilter={handleFilter} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-1/2 z-10">
            <div className="relative">
              <input
                type="text"
                placeholder={t("search_placeholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-4 pr-12 text-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#0e0f2b]"
              />
              <label
                htmlFor="file-input"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <FaCamera className="text-xl text-gray-500 hover:text-[#0e0f2b]" />
              </label>
              <input
                type="file"
                id="file-input"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-14 bg-white rounded-md" style={{ marginTop: "4rem" }}>
        <h2 className="text-2xl font-bold mb-4">{t("quality_bikes")}</h2>

        {!image && !scanComplete && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredBikes.map((bike) => (
              <MotoCard
                key={bike.id}
                image={bike.image}
                name={bike.name}
                year={bike.year}
                mileage={bike.mileage}
                price={formatPrice(bike.price)}
              />
            ))}
          </div>
        )}

        {image && isScanning && (
          <div className="fixed inset-0 bg-gray-200 bg-opacity-90 flex justify-center items-center z-50">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-4">{t("scanning_image")}</h3>
              <img
                src={image}
                alt="Selected"
                className="mx-auto max-w-sm h-auto mt-4 opacity-70 rounded-lg"
              />
              <div className="loader mt-6 mx-auto"></div>
            </div>
          </div>
        )}

        {image && !isScanning && scanComplete && matchingBikes.length === 0 && (
          <div className="text-center text-gray-600 mt-6">
            <h3 className="font-bold text-lg">{t("no_bikes_found")}</h3>
          </div>
        )}

        {image && !isScanning && scanComplete && matchingBikes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {matchingBikes.map((bike) => (
              <MotoCard
                key={bike.id}
                image={bike.image}
                name={bike.name}
                year={bike.year}
                mileage={bike.mileage}
                price={formatPrice(bike.price)}
              />
            ))}
          </div>
        )}
      </div>
    </LayoutUser>
  );
}

export default HomePage;
