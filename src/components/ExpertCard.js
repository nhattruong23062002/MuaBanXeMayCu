import React from "react";
import { useTranslation } from 'react-i18next';
import { GrView } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";

const ExpertCard = ({ avatar, fullname, nameStore, dob, hometown, address, phone, onContactClick, onShowExpertDetail }) => {
    const { t } = useTranslation("listExpert");

    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 border-2">
            <div className="flex items-start space-x-4">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                        src={avatar || "https://1nedrop.com/wp-content/uploads/2024/10/avatar-mac-dinh-30xJKPDu.jpg"}
                        alt="Expert Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1">
                    {fullname && <p className="text-base font-semibold">{t('fullname')}: {fullname}</p>}
                    {nameStore && <p className="text-base font-semibold">{t('nameStore')}: {nameStore}</p>}
                    {dob && <p className="text-base">{t('dob')}: {dob}</p>}
                    {address && <p className="text-base">{t('address')}: {address}</p>}
                    {phone && <p className="text-base">{t('phone')}: {phone}</p>}
                    {hometown && <p className="text-base">{t('hometown')}: {hometown}</p>}
                </div>
            </div>

            <hr className="my-4 border-t border-gray-300" />

            <div className="flex justify-around">
                <button
                    onClick={onShowExpertDetail}
                    className="flex items-center gap-2 px-3 py-1 bg-white text-gray-800  rounded-lg border-2 border-transparent shadow-[0_0_8px_2px_rgba(59,130,246,0.6)] hover:shadow-[0_0_12px_4px_rgba(59,130,246,0.8)] transition-shadow"
                >
                    <GrView />
                    {t('showDetailsButton')}
                </button>
                <button
                    onClick={onContactClick}
                    className="flex items-center gap-2 px-3 py-1 bg-white text-gray-800 rounded-lg border-2 border-transparent shadow-[0_0_8px_2px_rgba(107,114,128,0.6)] hover:shadow-[0_0_12px_4px_rgba(107,114,128,0.8)] transition-shadow"
                >
                    <AiOutlineMessage />
                    {t('contactButton')}
                </button>
            </div>
        </div>
    );
};

export default ExpertCard;
