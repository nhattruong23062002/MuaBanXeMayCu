import React from "react";
import LayoutUser from "../../layout/layoutUser";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useTranslation } from "react-i18next";

const MessageList = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("listSender");

  const messages = t("messages", { returnObjects: true });

  const handleShowChat = () => {
    navigate(`/chat`);
  };

  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-4">
          <button
            className="text-xl sm:text-2xl mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-bold text-gray-800">{t("header")}</h2>
          <button className="text-blue-600 text-sm hover:underline">
            {t("allButton")}
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.name}
              className="flex items-center border-b pb-4 last:border-b-0"
              onClick={handleShowChat}
            >
              <img
                src={message.avatar} 
                alt={message.name}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  {message.name}
                </h3>
                <p className="text-sm text-gray-600 truncate">
                  {message.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {message.date} - {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutUser>
  );
};

export default MessageList;
