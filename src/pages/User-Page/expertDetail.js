import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import LayoutUser from "../../layout/layoutUser";
import { GoDot } from "react-icons/go";
import BookingModal from "../../components/BookingExpertModal";
import { useTranslation } from "react-i18next";

function ExpertDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation("expertDetail");

  const expert = {
    name: "Nguyễn Văn A",
    dob: "23/03/1994",
    address: "Sơn Trà, Đà Nẵng",
    phone: "0942348382",
    workingHours: [
      { day: "monday", time: "8:00-14:00" },
      { day: "tuesday", time: "8:00-14:00" },
      { day: "wednesday", time: "8:00-14:00" },
      { day: "thursday", time: "8:00-14:00" },
    ],
  };

  return (
    <LayoutUser>
      <div className="bg-gray-100 min-h-screen">
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

        <div className="max-w-[800px] mx-auto bg-white rounded-lg shadow-md">
          <img
            src="https://kiemtraxecu.com/wp-content/uploads/2022/05/IMG_8158-scaled.jpg"
            alt={t("expert")}
            className="w-full h-96 object-cover rounded-t-lg"
          />

          <div className="p-6 -mt-8 relative z-10 bg-white mx-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">
              {t("expert")}:{" "}
              <span className="text-[#f59e0b]">{expert.name}</span>
            </h2>
            <p className="text-gray-700">
              <strong>
                {t("dob")}: {expert.dob}
              </strong>
            </p>
            <p className="text-gray-700">
              <strong>
                {t("address")}: {expert.address}
              </strong>
            </p>
            <p className="text-gray-700">
              <strong>
                {t("phone")}: {expert.phone}
              </strong>
            </p>
          </div>

          <div className="p-8">
            <h3 className="text-xl font-bold mb-2">{t("workingHours")}:</h3>
            <div className="grid grid-cols-2 gap-y-2 text-blue-600">
              {expert.workingHours.map((item, index) => (
                <strong key={index} className="text-lg">
                  {t(`days.${item.day.toLowerCase()}`)}: {item.time}
                </strong>
              ))}
            </div>
          </div>

          <div className="px-8 pb-6">
            <h3 className="text-xl font-bold mb-2">{t("services")}</h3>
            {t("serviceItems", { returnObjects: true }).map(
              (service, index) => (
                <p key={index} className="text-gray-500 flex items-center">
                  <GoDot />
                  {service}
                </p>
              )
            )}
          </div>

          <div className="text-center pb-6">
            <button
              className="bg-[#f59e0b] text-white px-6 py-3 rounded-full hover:bg-[#d97706]"
              onClick={() => setIsModalOpen(true)}
            >
              {t("bookNow")}
            </button>
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </LayoutUser>
  );
}

export default ExpertDetailPage;
