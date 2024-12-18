import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

function AdBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="rounded-lg w-11/12 sm:max-w-[400px] max-w-[300px] relative">
        <img
          src="/k-sparta.png"
          alt="Banner Quảng Cáo"
          className="w-full rounded-md"
        />

        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-3xl text-gray-100 hover:text-gray-800"
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
}

export default AdBanner;
