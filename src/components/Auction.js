import React, { useState, useEffect } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import {
    FaHeart,
    FaRegHeart,
    FaBolt,
    FaArrowUp,
    FaArrowDown,
} from "react-icons/fa";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const Auction = () => {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false); // State quản lý việc mở/đóng modal
    const [modalIsOpen1, setModalIsOpen1] = useState(false); // State quản lý việc mở/đóng modal
    const [isExpanded, setIsExpanded] = useState(false); // State để điều khiển việc mở rộng/thu gọn
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    // Đặt thời gian ban đầu cho đồng hồ đếm ngược (ví dụ: 168 giờ, 42 phút, 7 giây)
    const initialTime = 168 * 3600 + 42 * 60 + 7; // Chuyển đổi tất cả thời gian sang giây

    // Tạo state để lưu trữ thời gian còn lại
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        // Thiết lập bộ đếm thời gian
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        // Dọn dẹp bộ đếm khi component unmount
        return () => clearInterval(interval);
    }, []);

    // Hàm chuyển giây thành giờ:phút:giây
    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };

    // Mở modal
    const openModal = () => {
        setModalIsOpen(true);
    };

    // Đóng modal
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const openModal1 = () => {
        setModalIsOpen1(true);
    };

    // Đóng modal
    const closeModal1 = () => {
        setModalIsOpen1(false);
    };

    const goToPayment = () => {
        navigate("/payment"); // Chuyển hướng đến trang payment
        closeModal(); // Đóng modal khi đã chuyển trang
    };
    // Hàm thay đổi trạng thái của văn bản
    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="flex flex-col space-y-6">
            {/* Phần đấu giá trực tiếp */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                {/* time */}
                <div className="text-3xl text-[#d59648]">
                    <div className="font-bold">Thời gian còn lại:</div>
                    {formatTime(timeLeft)}
                </div>

                {/* Thông tin đấu giá */}
                <div className="space-y-4">
                    {/* Thời gian và giá đấu giá */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Đang đấu giá</h3>
                        <div className="text-xl font-bold text-[#d59648]">
                            3.930 triệu won
                        </div>
                    </div>

                    {/* Các nút */}
                    <button
                        className="w-full bg-[#d59648] text-white py-2 rounded-md font-medium hover:bg-[#b27939] flex items-center justify-center space-x-2"
                        onClick={openModal}
                    >
                        <FaBolt className="text-white" />
                        <span>Nhận giá thầu ngay lập tức</span>
                    </button>
                    <Modal
                        isOpen={modalIsOpen} // Kiểm tra xem modal có đang mở hay không
                        onRequestClose={() => {}} // Đóng modal khi nhấn ngoài modal
                        contentLabel="Confirm Auction"
                        className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96 mx-auto"
                        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Bạn có muốn thắng ngay cuộc đấu giá trị giá 1,13
                            triệu won không?
                        </h2>
                        <div className="bg-orange-100 p-4 mb-4 rounded-md">
                            <p className="text-orange-500 font-semibold">
                                Hướng dẫn đấu giá ngay lập tức
                            </p>
                            <p>
                                Chiếc xe đã được đấu giá ngay lập tức. Đã xác
                                nhận mua hàng mà không cần xác nhận lại báo giá.
                                Có, điều đó hoàn toàn có thể. Hãy trả giá cẩn
                                thận.
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <button
                                className=" text-gray-700 py-2 px-4 rounded-md hover:text-blue-500"
                                onClick={closeModal}
                            >
                                Hủy bỏ
                            </button>
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                                onClick={goToPayment}
                            >
                                Vâng, tôi sẽ chấp nhận giá thầu
                            </button>
                        </div>
                    </Modal>
                    <button
                        className="w-full border border-gray-400 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100 mt-4"
                        onClick={openModal1}
                    >
                        Đưa ra mức giá đề nghị
                    </button>
                    <Modal
                        isOpen={modalIsOpen1} // Kiểm tra xem modal có đang mở hay không
                        onRequestClose={() => {}} // Đóng modal khi nhấn ngoài modal
                        contentLabel="Price Suggestion"
                        className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96 mx-auto"
                        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-center">
                            Đề xuất giá
                        </h2>
                        <div className="mb-4">
                            <p className="text-lg mb-2">
                                Mức giá càng gần với mức giá mong muốn của khách
                                hàng là {""}
                                <span className="text-blue-600">
                                    1,13 triệu won
                                </span>{" "}
                                thì khả năng được chấp nhận càng cao. Khi lời đề
                                nghị của bạn được chấp nhận, giao dịch sẽ được
                                hoàn tất ngay lập tức.
                            </p>
                            <input
                                type="text"
                                placeholder="mười ngàn won"
                                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                            />
                            <p className="text-blue-600">
                                Chúng tôi có thể cung cấp cho bạn mức giá khởi
                                điểm từ 680.000 won.
                            </p>
                        </div>

                        <div className="flex justify-between">
                            <button
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                                onClick={closeModal1} // Đóng modal khi nhấn "Hủy bỏ"
                            >
                                Hủy bỏ
                            </button>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                Đưa ra mức giá
                            </button>
                        </div>
                    </Modal>
                </div>
                <hr className="my-4 bg-gray-700" />

                {/* Thông tin thêm về giá mua và bán */}
                <div className="flex space-x-4 mt-6">
                    <button
                        className="flex items-center justify-center text-gray-600 text-xl hover:text-red-500 p-2 border border-gray-300 rounded-md w-full sm:w-auto"
                        onClick={toggleFavorite}
                    >
                        {isFavorite ? (
                            <FaHeart className="text-red-500" />
                        ) : (
                            <FaRegHeart />
                        )}
                    </button>
                    <button className="flex items-center justify-center text-gray-600 hover:text-[#d59648] border border-gray-300 rounded-md py-2 px-4 w-full sm:w-auto">
                        Giá mua
                    </button>
                    <button className="flex items-center justify-center text-gray-600 hover:text-[#d59648] border border-gray-300 rounded-md py-2 px-4 w-full sm:w-auto">
                        <FaShareFromSquare className="mr-2" />
                        Giá bán lẻ
                    </button>
                </div>
            </div>

            {/* Lịch sử giá */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Lịch sử giá cao nhất</h3>
                <div className="text-lg">25-02-12: 20,98 triệu won</div>
                <div className="text-sm text-gray-500">(31 người đấu giá)</div>
            </div>

            {/* Thông tin chi tiết */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-500">
                <h3 className="text-xl font-bold mb-4 text-green-600">
                    Đấu thầu trực tiếp
                </h3>
                <p className="text-gray-700 mb-2">
                    Đấu giá dễ dàng và nhanh chóng theo mức giá khách hàng mong
                    muốn <span className="text-yellow-400">⚡</span>
                </p>
                <p className="text-gray-700 mb-4">
                    Giao dịch mua được xác nhận ngay sau khi đấu giá{" "}
                    <span className="text-yellow-500">🎉</span>
                </p>
                {/* Đoạn văn bản có thể thu gọn */}
                <div className="space-y-2">
                    {/* Hiển thị thêm nội dung khi mở rộng */}
                    {isExpanded && (
                        <div>
                            <p>
                                {" "}
                                Tương tự như không có hoa hồng <br />
                                Đại lý chịu chi phí giao hàng <br />
                                Các biện pháp nghiêm ngặt đối với lỗi báo giá{" "}
                                <br />
                                Không đấu thầu xuất khẩu
                            </p>
                            <p className="mt-2 text-gray-500">
                                Lỗi chẩn đoán quan trọng có thể khiếu nại:
                            </p>
                            <ul className="list-disc pl-5 text-gray-500">
                                <li>
                                    Các trường hợp loại trừ khỏi chẩn đoán: cỗ
                                    tấm sơn...
                                </li>
                                <li>
                                    Chẩn đoán ngoài hành: Đánh giá dựa trên các
                                    tiêu chuẩn...
                                </li>
                                <li>
                                    Chẩn đoán có rủi ro: Đưa ra một khuyến
                                    nghị...
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="mt-4 flex justify-between">
                    <div className="text-blue-600 mb-2 underline hover:text-blue-400 cursor-pointer">
                        ⓘ Qui trình giao dịch
                    </div>
                    <div
                        className="text-gray-600 hover:text-gray-400 cursor-pointer flex items-center"
                        onClick={toggleDetails}
                    >
                        {isExpanded ? (
                            <>
                                chi tiết <FaArrowUp />
                            </>
                        ) : (
                            <>
                                chi tiết <FaArrowDown />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auction;
