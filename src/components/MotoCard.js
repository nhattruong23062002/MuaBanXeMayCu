import React from "react";
import { useNavigate } from "react-router-dom";

function MotoCard({ id, image, name, year, mileage, price, status }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detailcar/${id}`);
    };

    const formatPrice = (price) => {
        const priceString = price.toString();
        const formattedPrice =
            priceString[0] + "xx" + "." + "xxx" + "." + "xxx";
        return formattedPrice;
    };

    const statusClasses = {
        available: "bg-green-500 text-white",
        auction: "bg-blue-500 text-white",
    };

    return (
        <div
            onClick={handleClick}
            className="border rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-92 hover:-translate-y-1 duration-300 pb-8"
        >
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-52 md:h-72 object-cover rounded-t-lg "
                />
                <div
                    className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-full ${statusClasses[status]} italic capitalize`}
                >
                    {status}
                </div>

            </div>

            <div className="p-4">
                <div>
                    <h3 className="text-lg font-bold mb-1">{name}</h3>
                    <p className="text-sm text-gray-600 m-0">
                        {year} &nbsp;&nbsp; {mileage}km
                    </p>
                </div>
            </div>

            <div className="absolute bottom-4 left-4 text-[#d59648] font-bold text-lg">
                {formatPrice(price)} đ
            </div>
        </div>
    );
}

export default MotoCard;
