import React, { useState } from "react";
import ExpertCard from "../../components/ExpertCard";
import { useNavigate } from "react-router-dom";
import LayoutUser from "../../layout/layoutUser";
const ListExpert = () => {
    const experts = [
        {
            id: 1,
            fullname: "Phạm Văn Nga",
            dob: "2002-08-04",
            hometown: "Sơn Trà, Đà Nẵng",
            avatar: "https://th.bing.com/th/id/OIP.VEkcMuJjFuq2p_J4nODZ3wHaHa?w=178&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
        },
        {
            id: 2,
            fullname: "Mèo Hoàng Thượng",
            dob: "1998-02-10",
            hometown: "Cầu Giấy, Hà Nội",
            avatar: "https://th.bing.com/th/id/OIP.yA3dRicJCxc2af7vPXvrjwHaHV?w=185&h=183&c=7&r=0&o=5&dpr=2&pid=1.7"
        },
        {
            id: 3,
            fullname: "Trần Nhật C",
            dob: "1988-01-12",
            hometown: "Hóc Môn, TP.Hồ Chí Minh",
            avatar: "https://th.bing.com/th/id/OIP.3NDMaKiACD9IXxMHSpnJzgHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            id: 4,
            fullname: "Chúa Sơn Lâm",
            dob: "1994-02-02",
            hometown: "Hải Châu, Đà Nẵng",
            avatar: "https://th.bing.com/th/id/OIP.fpNP0BTDZkr4e7gJc3fxugHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            id: 5,
            fullname: "Songoku SSJ 4",
            dob: "1998-02-10",
            hometown: "Cầu Giấy, Hà Nội",
            avatar: "https://th.bing.com/th/id/OIP.6MMFhc7tSCocJAqgAlrYswHaOF?w=115&h=185&c=7&r=0&o=5&pid=1.7"
        },
        {
            id: 6,
            fullname: "Mystic Gohan",
            dob: "1998-02-10",
            hometown: "Cầu Giấy, Hà Nội",
            avatar: "https://th.bing.com/th/id/OIP.PUKDsrVox_rLxQXblQ094wHaOn?w=115&h=184&c=7&r=0&o=5&pid=1.7"
        },
        {
            id: 7,
            fullname: "Vegeta SSJ Blue",
            dob: "1998-02-10",
            hometown: "Cầu Giấy, Hà Nội",
            avatar: "https://th.bing.com/th/id/OIP.k3-H3EmSiXWCeJ68OjSZVQHaIG?w=203&h=223&c=7&r=0&o=5&pid=1.7"
        },
        {
            id: 8,
            fullname: "Sơn Tùng MTP",
            dob: "1998-02-10",
            hometown: "Cầu Giấy, Hà Nội",
            avatar: "https://th.bing.com/th/id/OIP.o3y1Rp5DunvsYhHFepiCjQHaJQ?w=168&h=210&c=7&r=0&o=5&pid=1.7"
        },
        {
            id: 9,
            fullname: "Picollo",
            dob: "1998-02-10",
            hometown: "Cầu Giấy, Hà Nội",
            avatar: "https://th.bing.com/th/id/OIP.gvcSiPmPygFp8QOgFl9-6wHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7"
        },
        {
            id: 10,
            fullname: "Naruto",
            dob: "1998-02-10",
            hometown: "Cầu Giấy, Hà Nội",
            avatar: "https://th.bing.com/th/id/OIP.efATY6p5-5aINwEzOqYKFwAAAA?w=233&h=180&c=7&r=0&o=5&pid=1.7"
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // Lọc danh sách các expert theo tên, không phân biệt chữ hoa chữ thường
    const filteredExperts = experts.filter((expert) =>
        expert.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Hàm xử lý khi nhấn nút "Contact"
    const handleContactClick = (expert) => {
        // Chuyển đến trang chat và truyền thông tin của chuyên gia
        navigate("/chat", { state: { expert } });
    };

    return (
        <LayoutUser>
            <div className="bg-[#f5f5f5] py-6 min-h-screen"> {/* Viền ngoài với background #f5f5f5 */}
                <div className="max-w-[800px] mx-auto bg-white p-4 rounded-lg shadow-md"> {/* Khung ListExpert với background trắng */}
                    <h2 className="text-2xl font-bolder text-center mb-6">DANH SÁCH CÁC CHUYÊN GIA KIỂM ĐỊNH XE</h2>

                    {/* Thanh tìm kiếm */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Tìm chuyên gia..."
                            className="search-bar pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {/* Biểu tượng tìm kiếm */}
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 5a6 6 0 1112 0 6 6 0 01-12 0zM19 19l-4-4"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Danh sách các Expert */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {filteredExperts.map((expert) => (
                            <ExpertCard
                                key={expert.id}
                                avatar={expert.avatar}
                                fullname={expert.fullname}
                                dob={expert.dob}
                                hometown={expert.hometown}
                                onContactClick={() => handleContactClick(expert)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
};

export default ListExpert;