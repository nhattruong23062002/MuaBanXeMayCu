import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Profile = () => {
  const { t } = useTranslation("profile"); // Sử dụng namespace "profile"

  const [profileData, setProfileData] = useState({
    firstName: "Lee",
    lastName: "Minho",
    email: "minhoo@gmail.com",
    phone: "095871567",
    city: t("location"),
    Nation: t("nation"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
    alert(t("successMessage"));
    console.log("Saved Data:", profileData);
  };

  return (
    <div className="flex justify-center items-center p-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-900">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">
        {/* Left Panel */}
        <div className="flex flex-col items-center text-center border-r border-gray-200 pr-6">
          <img
            src="https://kenh14cdn.com/203336854389633024/2024/12/10/img6508jpg-1591784578-15917845-6209-7466-15917848032-1733854484177-17338544927331380039156.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold">{`${profileData.firstName} ${profileData.lastName}`}</h2>
          <p className="text-gray-500">{t("location")}</p>
          <p className="text-gray-400">{t("timeZone")}</p>
          <button className="mt-4 text-blue-600 hover:underline">
            {t("uploadPicture")}
          </button>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">{t("profileTitle")}</h2>
          <p className="text-gray-600 mb-4">{t("profileSubtitle")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Form Inputs */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="firstName"
              >
                {t("firstName")}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="lastName"
              >
                {t("lastName")}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email"
              >
                {t("emailAddress")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="phone"
              >
                {t("phoneNumber")}
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="state"
              >
                {t("city")}
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={profileData.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="city"
              >
                {t("country")}
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={profileData.Nation}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              {t("saveDetails")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
