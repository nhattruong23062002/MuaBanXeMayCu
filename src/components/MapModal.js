import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useTranslation } from "react-i18next";

const redIcon = new L.Icon({
  iconUrl:
    "https://png.pngtree.com/png-clipart/20230806/original/pngtree-red-icon-locations-png-image_9441781.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -30],
});

const MapModal = ({ address, onClose }) => {
  const [dealerPosition, setDealerPosition] = useState(null);
  const { t } = useTranslation("mapModal");

  const HERE_API_KEY = "0UdWrbQZeilk9AJOCvqP7AlJAE1HKPW6bO8fD9GxK1w";

  useEffect(() => {
    if (address) {
      fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=${HERE_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.items && data.items[0]) {
            setDealerPosition({
              lat: data.items[0].position.lat,
              lng: data.items[0].position.lng,
            });
          } else {
            console.error("Không tìm thấy vị trí của dealer.");
          }
        })
        .catch((error) => {
          console.error("Lỗi khi lấy tọa độ từ địa chỉ:", error);
        });
    }
  }, [address]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[98%] max-w-[700px]">
        <div className="flex justify-between items-center border-b px-4 py-2">
          <h2 className="text-lg font-bold">{t("location")}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            <IoMdClose size={24} />
          </button>
        </div>
        <div className="p-4">
          <div className="h-96 w-full">
            <MapContainer
              center={dealerPosition || [16.06207715478747, 108.23763466897346]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {dealerPosition && (
                <Marker position={dealerPosition} icon={redIcon}>
                  <Popup>{t("dealerLocation")}</Popup>
                </Marker>
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
