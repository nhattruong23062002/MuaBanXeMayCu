import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LayoutUser from "../layout/layoutUser";
import { useTranslation } from "react-i18next";

const ChatMessage = () => {
  const { t } = useTranslation("chat");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);
  const [isOfferOpen, setOfferOpen] = useState(false);
  const [offerPrice, setOfferPrice] = useState("");
  const [error, setError] = useState("");
  const [hasOffered, setHasOffered] = useState(false);
  const messageEndRef = useRef(null);

  const location = useLocation();
  const product = location.state?.product; 
  const expert = location.state?.expert; 
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const onClickBackToPrevious = () => {
    navigate(-1);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "Me",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      console.log("File uploaded: ", uploadedFile);
    }
  };

  const handleOfferSubmit = () => {
    if (offerPrice.trim()) {
      const formattedPrice = parseInt(offerPrice.replace(/\./g, ""), 10); 
      const priceValue = formattedPrice;
      if (priceValue < 60000000) {
        setError(t("priceError"));
      } else {
        const offerMessage = {
          id: messages.length + 1,
          text: t("messageSend") + ` ${priceValue.toLocaleString()} VND`, 
          sender: "Me",
          timestamp: new Date(),
          productName: product.name,
          productImage: product.image,
        };
        setMessages([...messages, offerMessage]);
        setOfferOpen(false);
        setOfferPrice("");
        setError("");
        setHasOffered(true);
      }
    }
  };
  

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <LayoutUser>
      <div className="bg-[#f5f5f5] flex justify-center mt-20">
        <div className="flex flex-col w-[600px] h-[75vh] bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center bg-white p-4 border-b">
            <div className="flex items-center space-x-4">
              <button
                onClick={onClickBackToPrevious}
                className="text-xl text-purple-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5"
                  />
                </svg>
              </button>

              <img
                src={
                  expert?.avatar ||
                  "https://th.bing.com/th/id/OIP.5hXmIPsRH8GsPN6eo1mHIgHaKe?w=132&h=187&c=7&r=0&o=5&pid=1.7"
                }
                alt="Avatar"
                className="w-12 h-12 rounded-full object-cover border border-gray-300"
              />
              <div className="flex flex-col text-left">
                <span className="font-bold">{expert?.fullname || t("Chat")}</span>
                <span className="text-sm text-green-500">{t("active")}</span>
              </div>
            </div>
          </div>

          <div className="flex-grow p-4 bg-gray-50 overflow-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "Me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs p-4 rounded-lg shadow-md ${
                      msg.sender === "Me" ? "bg-green-100" : "bg-gray-200"
                    }`}
                  >
                    <p className="text-sm font-medium">{msg.text}</p>
                    {msg.productName && (
                      <div className="mt-2 flex items-center space-x-2">
                        <img
                          src={msg.productImage}
                          alt={msg.productName}
                          className="w-10 h-10 rounded object-cover"
                        />
                        <span className="text-sm font-bold">{msg.productName}</span>
                      </div>
                    )}
                    <span className="text-xs text-gray-500">
                      {msg.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messageEndRef}></div>
            </div>
          </div>

          {product && !hasOffered && (
            <div className="p-4 bg-gray-100 border-t flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-bold">{product.name}</span>
                  <span className="text-sm text-gray-500">{product.price}</span>
                </div>
              </div>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setOfferOpen(true)}
              >
                 {t("offer")}
              </button>
            </div>
          )}

          <div className="flex items-center p-4 bg-white border-t space-x-4">
            <span className="text-xl cursor-pointer">😊</span>

            <label
              htmlFor="file-upload"
              className="text-lg text-blue-500 cursor-pointer flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            {file && (
              <div className="ml-4 text-sm text-gray-500">
                <span>File selected: {file.name}</span>
              </div>
            )}

            <input
              type="text"
              className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={message}
              onChange={handleInputChange}
              placeholder={t("placeholder")}
            />

            <button
              className="ml-4 p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              onClick={handleSendMessage}
            >
              ➤
            </button>
          </div>

          {isOfferOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
              <div className="bg-white p-6 rounded shadow-lg w-80">
                <h2 className="text-lg font-bold mb-4"> {t("enterPrice")}</h2>
                <input
                  type="number"
                  className="w-full p-2 border rounded mb-4"
                  value={offerPrice}
                  onChange={(e) => setOfferPrice(e.target.value)}
                  placeholder= {t("enterPricePlaceholder")}
                />
                {error && (
                  <div className="text-red-500 text-sm mb-4">{error}</div>
                )}
                <div className="flex justify-end space-x-4">
                  <button
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    onClick={() => setOfferOpen(false)}
                  >
                     {t("cancel")}
                  </button>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={handleOfferSubmit}
                  >
                     {t("submit")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </LayoutUser>
  );
};

export default ChatMessage;
