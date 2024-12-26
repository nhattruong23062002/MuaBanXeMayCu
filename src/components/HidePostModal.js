import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const HidePostModal = ({ isOpen, onClose, onConfirm }) => {
  const [reason, setReason] = useState("");
  const { t } = useTranslation("hidePost");

  const handleConfirm = () => {
    if (!reason) {
      alert(t("alert.noReason"));
      return;
    }
    onConfirm(reason);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-11/12 max-w-lg rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
          {t("title", { name: t("carName") })}
        </h2>
        <p className="text-gray-600 text-sm mb-4">{t("description")}</p>
        <p className="text-gray-700 font-medium mb-2">{t("reasonPrompt")}</p>

        <form className="space-y-3">
          {t("reasons", { returnObjects: true }).map((reasonText, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                name="reason"
                value={reasonText}
                onChange={(e) => setReason(e.target.value)}
                className="text-[#d59648] focus:ring-[#d59648]"
              />
              <label className="text-gray-700">{reasonText}</label>
            </div>
          ))}
        </form>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
            onClick={onClose}
          >
            {t("cancel")}
          </button>
          <button
            className="px-4 py-2 bg-[#d59648] text-white rounded-md hover:bg-[#b27939] transition"
            onClick={handleConfirm}
          >
            {t("hidePost")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HidePostModal;
