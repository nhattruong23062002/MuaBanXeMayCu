import React, { useState } from "react";
import { FaStar, FaSmile, FaFrown } from "react-icons/fa";

function RatingModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(4); 
  const [comment, setComment] = useState("");

  const handleStarClick = (index) => {
    setRating(index);
  };

  const getFeedback = () => {
    if (rating <= 2) {
      return { icon: <FaFrown className="text-5xl text-red-500" />, text: "Thất vọng" };
    }
    return { icon: <FaSmile className="text-5xl text-green-500" />, text: "Hài lòng" };
  };

  if (!isOpen) return null;

  const feedback = getFeedback(); 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Đánh giá sản phẩm</h2>

        <div className="flex flex-col items-center mb-4">
          {feedback.icon}
          <p className="text-lg font-medium mt-2">{feedback.text}</p>
        </div>

        <div className="flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((index) => (
            <FaStar
              key={index}
              className={`text-3xl cursor-pointer ${
                index <= rating ? "text-orange-400" : "text-gray-300"
              }`}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 text-left">
            Góp ý chi tiết:
          </label>
          <textarea
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            Hủy
          </button>
          <button
            onClick={() => alert("Đã gửi đánh giá!")}
            className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500"
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatingModal;
