import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LayoutUser from '../layout/layoutUser';

const ChatMessage = ({ onBack }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]); // Lưu tin nhắn trong state
    const [file, setFile] = useState(null); // Lưu file được chọn
    const messageEndRef = useRef(null); // Dùng để cuộn xuống khi có tin nhắn mới

    // Lấy thông tin từ location.state mà bạn đã truyền qua từ trang ListExpert
    const location = useLocation();
    const expert = location.state?.expert;
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const onClickBackToExpert = (event) => {
        navigate(-1)
    }

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text: message,
                sender: 'Me',
                timestamp: new Date(),
            };
            setMessages([...messages, newMessage]); // Thêm tin nhắn mới vào list
            setMessage(''); // Reset ô nhập liệu
        }
    };

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile); // Lưu file vào state
            console.log("File uploaded: ", uploadedFile);
        }
    };

    // Hàm tự động cuộn xuống khi có tin nhắn mới
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <LayoutUser>
            <div className="bg-[#f5f5f5] min-h-screen flex justify-center items-center">
                <div className="flex flex-col w-[800px] h-[90vh] bg-white rounded-lg shadow-md">
                    {/* Chat Header */}
                    <div className="flex justify-between items-center bg-white p-4 border-b">
                        <div className="flex items-center space-x-4">
                            {/* Nút quay lại */}
                            <button onClick={onClickBackToExpert} className="text-xl text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5" />
                                </svg>
                            </button>

                            {/* Avatar và thông tin chuyên gia */}
                            <img
                                src={expert?.avatar || "https://th.bing.com/th/id/OIP.5hXmIPsRH8GsPN6eo1mHIgHaKe?w=132&h=187&c=7&r=0&o=5&pid=1.7"}
                                alt="Avatar"
                                className="w-12 h-12 rounded-full object-cover border border-gray-300"
                            />
                            <div className="flex flex-col text-left">
                                <span className="font-bold">{expert?.fullname}</span>
                                <span className="text-sm text-green-500">Đang hoạt động</span>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <span className="text-xl cursor-pointer">📞</span>
                            <span className="text-xl cursor-pointer">ℹ️</span>
                        </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex-grow p-4 bg-gray-50 overflow-auto">
                        <div className="space-y-4">
                            {/* Hiển thị các tin nhắn */}
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'Me' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-xs p-4 rounded-lg shadow-md ${msg.sender === 'Me' ? 'bg-green-100' : 'bg-gray-200'
                                            }`}
                                    >
                                        <p className="text-sm font-medium">{msg.text}</p>
                                        <span className="text-xs text-gray-500">{msg.timestamp.toLocaleTimeString()}</span>
                                    </div>
                                </div>
                            ))}

                            {/* Đảm bảo cuộn xuống khi có tin nhắn mới */}
                            <div ref={messageEndRef}></div>
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col p-4 bg-white border-t">
                        <div className="flex items-center mb-2 space-x-4">
                            {/* Icon cảm xúc */}
                            <span className="text-xl cursor-pointer">😊</span>

                            {/* Upload File Section */}
                            <div className="flex items-center space-x-4 mt-2">
                                <label htmlFor="file-upload" className="text-lg text-blue-500 cursor-pointer flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </label>
                                <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                                {file && (
                                    <div className="ml-4 text-sm text-gray-500">
                                        <span>File selected: {file.name}</span>
                                    </div>
                                )}
                            </div>

                            {/* Input message */}
                            <input
                                type="text"
                                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={message}
                                onChange={handleInputChange}
                                placeholder="Nhập tin nhắn"
                            />

                            {/* Nút gửi tin nhắn */}
                            <button
                                className="ml-4 p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
                                onClick={handleSendMessage}
                            >
                                ➤
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
};

export default ChatMessage;
