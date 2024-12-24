import React from "react";
import { useTranslation } from 'react-i18next';

const ExpertCard = ({ avatar, fullname, nameStore, dob, hometown, address, phone, onContactClick, onShowExpertDetail }) => {
    const { t } = useTranslation("listExpert");

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
                    {fullname && <p className="text-base font-semibold">{t('fullname')}: {fullname}</p>}
                    {nameStore && <p className="text-base font-semibold">{t('nameStore')}: {nameStore}</p>}
                    {dob && <p className="text-base">{t('dob')}: {dob}</p>}
                    {address && <p className="text-base">{t('address')}: {address}</p>}
                    {phone && <p className="text-base">{t('phone')}: {phone}</p>}
                    {hometown && <p className="text-base">{t('hometown')}: {hometown}</p>}
                </div>
            </div>

            {/* Đường kẻ ngang */}
            <hr className="my-4 border-t border-gray-300" />

            {/* Nút chức năng */}
            <div className="flex justify-around">
                <button onClick={onShowExpertDetail} className="px-4 py-2 bg-green-100 text-green-800 font-semibold rounded hover:bg-green-200">
                    {t('showDetailsButton')}
                </button>
                <button onClick={onContactClick} className="px-4 py-2 bg-green-100 text-green-800 font-semibold rounded hover:bg-green-200">
                    {t('contactButton')}
                </button>
            </div>
        </div>
    );
};

export default ExpertCard;
