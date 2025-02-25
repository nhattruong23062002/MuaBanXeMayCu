import axios from "axios";
import { API_URL } from "../config/apiUrls";
import { getToken } from "../utils/authUtils";

const getAllDealer = async (query) => {
    const response = await axios.get(`${API_URL}/dealers?query=${query}`)
    return response.data.payload;
};

const getDetailDealer = async (dealerId) => {
    const response = await axios.get(`${API_URL}/dealers/${dealerId}`);
    return response.data.payload;
};

const addDealer = async (dealerData) => {
    const response = await axios.post(`${API_URL}/dealers`, dealerData);
    return response.data.payload;
};

const updateDealer = async (dealerId, dealerData) => {
    const token = getToken();
    const response = await axios.patch(`${API_URL}/dealers/${dealerId}`, dealerData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.payload;
};


export { getAllDealer, getDetailDealer, addDealer, updateDealer };
