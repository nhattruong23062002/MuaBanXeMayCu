import React, { useEffect, useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { useTranslation } from "react-i18next";

const redIcon = new L.Icon({
  iconUrl:
    "https://png.pngtree.com/png-clipart/20230806/original/pngtree-red-icon-locations-png-image_9441781.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -30],
});

const blueIcon = new L.Icon({
  iconUrl:
    "https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-devil-face-circle-icon-png-image_6594511.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const Routing = ({ currentPosition, destination }) => {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (!currentPosition || !destination || !map) return;

    if (!routingControlRef.current) {
      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(currentPosition.lat, currentPosition.lng),
          L.latLng(destination),
        ],
        routeWhileDragging: true,
        showAlternatives: false,
        addWaypoints: false,
        createMarker: () => null,
        lineOptions: {
          styles: [{ color: "#6FA1EC", weight: 4 }],
        },
        show: false,
        collapsible: true, 
        show: false
      }).addTo(map);
    } else {
      routingControlRef.current.setWaypoints([
        L.latLng(currentPosition.lat, currentPosition.lng),
        L.latLng(destination),
      ]);
    }

  }, [map, currentPosition, destination]);

  return null;
};

const MapModal = ({ onClose }) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [showRoute, setShowRoute] = useState(false);
  const destination = [16.06207715478747, 108.23763466897346]; 
  const { t } = useTranslation("mapModal");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Lỗi khi lấy vị trí hiện tại:", error);
        }
      );
    } else {
      console.error("Trình duyệt không hỗ trợ Geolocation.");
    }
  }, []);

  const handleShowRoute = () => {
    if (currentPosition) {
      setShowRoute(true);
    } else {
      alert("Không thể lấy vị trí hiện tại của bạn. Vui lòng thử lại.");
    }
  };

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
              center={destination}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {currentPosition && (
                <Marker
                  position={[currentPosition.lat, currentPosition.lng]}
                  icon={blueIcon}
                >
                  <Popup>{t("myLocation")}</Popup>
                </Marker>
              )}
              <Marker position={destination} icon={redIcon}>
                <Popup>Xe máy Út Tịch</Popup>
              </Marker>
              {showRoute && currentPosition && (
                <Routing
                  currentPosition={currentPosition}
                  destination={destination}
                />
              )}
            </MapContainer>
          </div>
          <div className="flex justify-end mt-4">
            {!showRoute && (
              <button
                onClick={handleShowRoute}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {t("directions")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
