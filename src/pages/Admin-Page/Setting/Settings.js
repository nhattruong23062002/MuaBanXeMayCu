import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Settings = () => {
  const { t } = useTranslation("settings"); // Sử dụng namespace "settings"

  const [emailSettings, setEmailSettings] = useState({
    productUpdates: true,
    securityUpdates: false,
  });

  const [phoneSettings, setPhoneSettings] = useState({
    productUpdates: true,
    securityUpdates: false,
  });

  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleEmailChange = (key) => {
    setEmailSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePhoneChange = (key) => {
    setPhoneSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveChanges = () => {
    alert(t("messages.saved"));
    console.log("Email Settings:", emailSettings);
    console.log("Phone Settings:", phoneSettings);
  };

  const handleUpdatePassword = () => {
    if (password.password === password.confirmPassword) {
      alert(t("messages.passwordUpdated"));
      console.log("Password:", password.password);
    } else {
      alert(t("messages.passwordMismatch"));
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>

      {/* Notifications Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {t("notifications.title")}
        </h2>
        <p className="text-gray-600 mb-4">{t("notifications.subtitle")}</p>
        <hr className="border-t border-gray-200 my-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email Notifications */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">
              {t("notifications.email")}
            </h3>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="email-product-updates"
                checked={emailSettings.productUpdates}
                onChange={() => handleEmailChange("productUpdates")}
                className="mr-2"
              />
              <label htmlFor="email-product-updates" className="text-gray-600">
                {t("notifications.productUpdates")}
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email-security-updates"
                checked={emailSettings.securityUpdates}
                onChange={() => handleEmailChange("securityUpdates")}
                className="mr-2"
              />
              <label htmlFor="email-security-updates" className="text-gray-600">
                {t("notifications.securityUpdates")}
              </label>
            </div>
          </div>

          {/* Phone Notifications */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">
              {t("notifications.phone")}
            </h3>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="phone-product-updates"
                checked={phoneSettings.productUpdates}
                onChange={() => handlePhoneChange("productUpdates")}
                className="mr-2"
              />
              <label htmlFor="phone-product-updates" className="text-gray-600">
                {t("notifications.productUpdates")}
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="phone-security-updates"
                checked={phoneSettings.securityUpdates}
                onChange={() => handlePhoneChange("securityUpdates")}
                className="mr-2"
              />
              <label htmlFor="phone-security-updates" className="text-gray-600">
                {t("notifications.securityUpdates")}
              </label>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-200 my-4" />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSaveChanges}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            {t("buttons.saveChanges")}
          </button>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{t("password.title")}</h2>
        <p className="text-gray-600 mb-4">{t("password.subtitle")}</p>
        <hr className="border-t border-gray-200 my-4" />
        <div className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="password"
              className="text-gray-700 font-medium mb-1 block"
            >
              {t("password.password")}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={t("password.placeholders.password")}
              value={password.password}
              onChange={(e) =>
                setPassword({ ...password, password: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="text-gray-700 font-medium mb-1 block"
            >
              {t("password.confirmPassword")}
            </label>

            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder={t("password.placeholders.confirmPassword")}
              value={password.confirmPassword}
              onChange={(e) =>
                setPassword({ ...password, confirmPassword: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <hr className="border-t border-gray-200 my-4" />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleUpdatePassword}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            {t("buttons.update")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
