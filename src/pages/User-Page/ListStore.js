import React, { useState } from "react";
import ExpertCard from "../../components/ExpertCard";
import { useNavigate } from "react-router-dom";
import LayoutUser from "../../layout/layoutUser";
import { useTranslation } from "react-i18next";
const ListStore = () => {
    const { t } = useTranslation("CarAuction");
    const stores = [
        {
            id: 1,
            nameStore: "Xe máy Út Tịch",
            phone: "0983727373",
            address: "Sơn Trà, Đà Nẵng",
            avatar: "https://aloinan.com/wp-content/uploads/2018/01/logo-xe-may-3.jpg",
        },
        {
            id: 2,
            nameStore: "Xe máy Nhật Trương",
            phone: "0986636828",
            address: "Hải Châu, Đà Nẵng",
            avatar: "https://png.pngtree.com/png-vector/20230513/ourlarge/pngtree-new-motorbike-logo-design-vector-png-image_7095431.png",
        },
        {
            id: 3,
            nameStore: "Xe máy Hải Thượng",
            phone: "0939929493",
            address: "Cầu Giấy, Hà Nội",
            avatar: "https://png.pngtree.com/png-clipart/20200727/original/pngtree-motorcycle-scooter-vector-logo-png-image_5430161.jpg",
        },
        {
            id: 4,
            nameStore: "Tùng Trần Moto",
            phone: "0999393743",
            address: "Hóc Môn, TP.Hồ Chí Minh",
            avatar: "https://img.pikbest.com/png-images/20241020/vintage-motorcycle-full-body-logo-design_10983166.png!bw700",
        },
        {
            id: 5,
            nameStore: "Xe máy Tiến Thành",
            phone: "0233384823",
            address: "Duy Xuyên, Quảng Nam",
            avatar: "https://png.pngtree.com/template/20200621/ourmid/pngtree-motorcycle-scooter-vector-logo-image_385190.jpg",
        },
        {
            id: 6,
            nameStore: "Tuấn Vũ Racing",
            phone: "0938482383",
            address: "Cầu Giấy, Hà Nội",
            avatar: "https://lzd-img-global.slatic.net/g/p/96c918c23e39723d180613bcbd39bb7c.jpg_720x720q80.jpg",
        },
        {
            id: 7,
            nameStore: "Minh An Moto",
            phone: "0986565837",
            address: "Long Thành, Đồng Nai",
            avatar: "https://xemaycugiarelongthanh.com/uploads/source/logo/6d87b9707f9abdc4e48b.png",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const filteredExperts = stores.filter((expert) =>
        expert.nameStore.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleContactClick = (store) => {
        navigate("/chat", { state: { store } });
    };

    const handleShowExpertDetail = () => {
        navigate("/storeDetail");
    };

    return (
        <LayoutUser>
            <div className="bg-[#f5f5f5] py-6 min-h-screen">
                <div className="max-w-[800px] mx-auto bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bolder text-center mb-6">
                        {t("listShopTitle")}
                    </h2>

                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder={t("searchPlaceStore")}
                            className="pl-4 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {filteredExperts.map((expert) => (
                            <ExpertCard
                                key={expert.id}
                                avatar={expert.avatar}
                                nameStore={expert.nameStore}
                                address={expert.address}
                                phone={expert.phone}
                                onContactClick={() =>
                                    handleContactClick(expert)
                                }
                                onShowExpertDetail={handleShowExpertDetail}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
};

export default ListStore;
