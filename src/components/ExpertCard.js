import React from "react";

const ExpertCard = ({ avatar, fullname, dob, hometown, onContactClick }) => {
    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 border-2">
            {/* Avatar và thông tin */}
            <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                        src={avatar}
                        alt="Expert Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Thông tin cá nhân */}
                <div className="flex-1">
                    <p className="text-base font-semibold">Họ và tên: {fullname}</p>
                    <p className="text-base">Ngày sinh: {dob}</p>
                    <p className="text-base">Quê quán: {hometown}</p>
                </div>
            </div>

            {/* Đường kẻ ngang */}
            <hr className="my-4 border-t border-gray-300" />

            {/* Nút chức năng */}
            <div className="flex justify-around">
                <button className="px-4 py-2 bg-green-100 text-green-800 font-semibold rounded hover:bg-green-200">
                    Chi tiết
                </button>
                <button onClick={onContactClick} className="px-4 py-2 bg-green-100 text-green-800 font-semibold rounded hover:bg-green-200">
                    Liên hệ
                </button>
            </div>
        </div>
    );
};

export default ExpertCard;