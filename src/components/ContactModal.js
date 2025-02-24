import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MapModal from "./MapModal";

const ContactModal = ({ dealer, user, phoneUser, onClose }) => {
  const { t } = useTranslation("contactModal");
  const navigate = useNavigate();

  const [isMapModalOpen, setMapModalOpen] = useState(false);

  const handleCall = () => {
    window.location.href = `tel:${phoneUser}`;
  };

  const handleChat = () => {
    navigate("/chat", { state: { phoneUser } });
  };

  const handleViewAddress = () => {
    setMapModalOpen(true);
  };

  return (
    <div className="fixed bottom-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-[500px]">
        <div className="flex justify-between items-center border-b px-4 py-2">
          <h2 className="text-lg font-bold">{t("contactInfoTitle")}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            <IoMdClose size={24} />
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <img
              src={dealer?.avatarImage || "https://1nedrop.com/wp-content/uploads/2024/10/avatar-mac-dinh-30xJKPDu.jpg"}
              alt="Store Logo"
              className="w-16 h-16 rounded-full mr-4 border object-cover"
            />
            <div>
              <h3 className="font-bold text-lg">{user?.userName}</h3>
              <p className="text-gray-500">{user?.address}</p>
              <p className="text-[#d59600] font-bold">{user.phoneNumber}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-gray-100"
              onClick={handleCall}
            >
              <FiPhoneCall size={24} className="text-blue-500" />
              <span className="mt-2 text-sm font-medium">{t("call")}</span>
            </button>
            <button
              className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-gray-100"
              onClick={handleViewAddress}
            >
              <FaMapMarkerAlt size={24} className="text-blue-500" />
              <span className="mt-2 text-sm font-medium">{t("viewAddress")}</span>
            </button>
            {/* <button
              className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-gray-100"
              onClick={handleChat}
            >
              <IoChatboxEllipsesOutline size={24} className="text-blue-500" />
              <span className="mt-2 text-sm font-medium">{t("chat")}</span>
            </button> */}
          </div>
        </div>
      </div>

      {isMapModalOpen && <MapModal address={user?.address} onClose={() => setMapModalOpen(false)} />}
    </div>
  );
};

export default ContactModal;
