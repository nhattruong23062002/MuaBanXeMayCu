import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import {
  FaCalendarAlt,
  FaTachometerAlt,
  FaCogs,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import LayoutUser from "../../layout/layoutUser";
import { useNavigate } from 'react-router-dom';

function DetailMoto() {
  const images = [
    "https://media.moitruongvadothi.vn/images/2023/10/25/9883-1698207232-9883-1695003555-gia-xe-honda-sh-2023-1.jpg",
    "https://xemayanhloc.com.vn/wp-content/uploads/2022/05/z3403832730322_3dc7bd30894c8821da2984ba662a860e.jpg",
  ];
  const navigate = useNavigate();

  const onClickChat = (event) => {
    navigate("/chat");
  }

  const onClickPayment = (event) => {
    navigate("/payment");
  }

  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <LayoutUser>
      <div className="max-w-[800px] mx-auto py-6 px-4 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={activeImage}
              alt="Honda SH 125i"
              className="w-full h-[350px] object-cover rounded-md"
            />

            <div className="flex mt-4 space-x-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setActiveImage(image)}
                  className={`w-32 h-24 object-cover rounded-md cursor-pointer hover:ring-2 ring-[#d59648] ${activeImage === image ? "ring-2 ring-[#d59648]" : ""
                    }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2 text-left">Honda SH 125i</h1>
            <p className="text-2xl text-[#d59648] font-bold mb-4 text-left">
              60.000.000 đ
            </p>

            <div className="space-y-2 text-gray-700">
              <p className="flex items-center">
                <FaCalendarAlt className="mr-2 text-[#d59648]" />{" "}
                <strong>Năm:</strong> 2019
              </p>
              <p className="flex items-center">
                <FaTachometerAlt className="mr-2 text-[#d59648]" />{" "}
                <strong>Số km:</strong> 15,000 km
              </p>
              <p className="flex items-center">
                <FaCogs className="mr-2 text-[#d59648]" />{" "}
                <strong>Động cơ:</strong> 749cc
              </p>
              <p className="flex items-center">
                <FaCheckCircle className="mr-2 text-[#d59648]" />{" "}
                <strong>Tình trạng: </strong> Đã sử dụng
              </p>
            </div>

            <div className="mt-4 text-left">
              <h3 className="font-bold mb-1">Mô tả</h3>
              <p className="text-gray-600 leading-relaxed">
                Honda SH 125i 2019 - Xe cũ chính chủ, máy móc nguyên bản, odo
                15,000 km, ngoại hình đẹp, vận hành êm ái. Giá 60.000.000 VNĐ
                (thương lượng). Liên hệ ngay để xem xe! 🚀
              </p>
            </div>

            <div className="mt-6 flex space-x-4">
              <button onClick={onClickPayment} className="bg-[#d59648] text-white px-6 py-2 rounded-md font-medium hover:bg-[#b27939]">
                Mua hàng
              </button>
              <button onClick={onClickChat} className="border border-gray-400 px-6 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100">
                Liên hệ
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
              N
            </div>
            <div>
              <p className="font-bold">Nhat moto</p>
              <div className="flex">
                <p className="text-sm text-gray-500 mr-1">5</p>
                <IoStar />
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold mt-4">Mô tả chi tiết</h3>
          <div className="mt-8 text-gray-700 text-sm leading-relaxed text-left">
            <h3 className="text-lg font-bold mb-2">Honda Sh 125i</h3>
            <hr className="mb-4" />
            <p>
              <strong>Màu sắc:</strong> Đen
            </p>
            <p>
              <strong>ODO:</strong> 15.000km
            </p>
            <p>
              <strong>Biển số:</strong> 92FA 33523
            </p>
            <p>
              <strong>Năm sản xuất:</strong> 2019
            </p>
            <p>
              <strong>Tình trạng:</strong> Xe gần như mới, tình trạng hoàn hảo.
            </p>
            <hr className="my-4" />

            <ul className="space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-[#d59648] mr-2" />
                Bảo hành 12 tháng với 10 hạng mục, tổng giá trị lên tới 3,3
                triệu đồng
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#d59648] mr-2" />
                Cam kết 100% xe đạt chất lượng với bài kiểm định 77 điểm
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#d59648] mr-2" />
                Cam kết 100% xe pháp lý đầy đủ
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#d59648] mr-2" />
                Thông tin xe chính xác
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#d59648] mr-2" />
                Nhận thu đổi xe khi có yêu cầu
              </li>

              <li className="flex items-center">
                <FaClock className="text-[#d59648] mr-2" />
                Thủ tục thanh toán nhanh gọn
              </li>
              <li className="flex items-center">
                <FaClock className="text-[#d59648] mr-2" />
                Có chính sách hỗ trợ trả góp linh hoạt, chỉ cần giấy tờ chứng
                minh thu nhập
              </li>
              <p className="flex items-center">
                <FaMapMarkerAlt className="text-[#d59648] mr-2" />
                Trạm Dịch Vụ Xe Máy Nhat Moto - Hải Châu (92 Nguyễn Văn Linh - Hải Châu -
                Đà Nẵng)
              </p>
              <p className="flex items-center">
                <FaClock className="text-[#d59648] mr-2" />
                Thời gian làm việc: từ 8h00 - 19h00, tất cả các ngày trong tuần
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="text-[#d59648] mr-2" />
                Hotline/Zalo: 0325 316 689
              </p>
            </ul>

            <p className="mt-6 font-bold text-center text-[#d59648]">
              ĐẶT LỊCH HẸN ĐỂ GIỮ XE VÀ ĐƯỢC PHỤC VỤ TỐT NHẤT!
            </p>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
}

export default DetailMoto;
