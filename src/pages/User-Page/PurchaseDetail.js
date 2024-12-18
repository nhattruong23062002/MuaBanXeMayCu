import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import LayoutUser from "../../layout/layoutUser";
import { Steps } from "antd";

function PurchaseDetailPage() {
  const carDetail = {
    id: 1,
    name: "Honda SH 125i",
    year: 2020,
    mileage: "5000km",
    plateNumber: "92FA 23524",
    price: "60.000.000 đ",
    image:
      "https://media.moitruongvadothi.vn/images/2023/10/25/9883-1698207232-9883-1695003555-gia-xe-honda-sh-2023-1.jpg",
    shippingCost: "0đ",
    totalPrice: "60.000.000 đ",
    paymentMethod: "Thanh toán tiền mặt",
    deliveryMethod: "Nhận xe tại cửa hàng",
  };

  return (
    <LayoutUser>
      <div className="max-w-[800px] m-auto bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white mt-6 p-4 rounded-lg shadow-lg border border-blue-300">
          <div className="flex pb-3">
            <button className="text-2xl mr-4 cursor-pointer" onClick={() => window.history.back()}>
              <IoMdArrowRoundBack />
            </button>
            <h1 className="text-xl font-bold text-gray-800">
              Chi tiết xe đã mua
            </h1>
          </div>
          <div className="flex items-center h-[200px] px-10">
          <Steps
            current={3}
            items={[
              {
                title: "Đang chờ",
              },
              {
                title: "Giao dịch",
              },
              {
                title: "Đang vận chuyển",
              },
              {
                title: "Hoàn tất",
              },
            ]}
          />
          </div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold">
              N
            </div>
            <p className="ml-2 font-medium">Nhat moto</p>
          </div>

          <div className="border-t pt-4 mb-6 flex items-center">
            <img
              src={carDetail.image}
              alt={carDetail.name}
              className="w-24 h-20 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h2 className="font-bold text-lg">{carDetail.name}</h2>
              <p className="text-sm text-gray-600 m-0">
                {carDetail.year} &nbsp;&nbsp; {carDetail.mileage}
              </p>
              <p className="text-sm text-gray-600 m-0">
                Biển số: {carDetail.plateNumber}
              </p>
            </div>
            <p className="text-[#d59648] font-bold text-lg">
              {carDetail.price}
            </p>
          </div>

          {/* Table */}
          <div className="border-t">
            <table className="w-full text-sm text-gray-700">
              <tbody>
                <tr className="border-t">
                  <td className="py-2 px-4 font-medium">Địa chỉ giao xe</td>
                  <td className="py-2 px-4 text-right">
                    {carDetail.deliveryMethod}
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4 font-medium">Phí vận chuyển</td>
                  <td className="py-2 px-4 text-right">
                    {carDetail.shippingCost}
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4 font-medium">Thành tiền</td>
                  <td className="py-2 px-4 text-[#d59648] text-right font-bold">
                    {carDetail.totalPrice}
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4 font-medium">
                    Phương thức thanh toán
                  </td>
                  <td className="py-2 px-4 text-right">
                    {carDetail.paymentMethod}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
}

export default PurchaseDetailPage;
