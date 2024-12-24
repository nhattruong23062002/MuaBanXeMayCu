import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";
function ShareModal({ isOpen, onClose, productLink }) {
  const { t } = useTranslation("shareModal");

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(productLink);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px]">
        <h3 className="text-xl font-bold mb-4">{t('title')}</h3>
        <div className="flex justify-around mb-4">
          <a href={`https://facebook.com/sharer/sharer.php?u=${productLink}`} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 text-2xl" />
          </a>
          <a href={`https://x.com/intent/tweet?url=${productLink}`} target="_blank" rel="noopener noreferrer">
            <SiX className="text-black text-2xl" /> {/* Biểu tượng X */}
          </a>
          <a href={`https://api.whatsapp.com/send?text=${productLink}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-600 text-2xl" />
          </a>
        </div>
        <input
          type="text"
          value={productLink}
          readOnly
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleCopyLink}
          className="w-full bg-[#d59648] text-white py-2 rounded-md hover:bg-[#b27939]"
        >
          {t("copy")}
        </button>
        <button
          onClick={onClose}
          className="flex m-auto text-center text-sm text-gray-600 pt-4"
        >
          {t("close")}
        </button>
      </div>
    </div>
  );
}

export default ShareModal;
