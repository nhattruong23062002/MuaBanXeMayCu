import axios from "axios";
import { API_URL } from "../config/apiUrls";
import { getToken } from "../utils/authUtils";

const getAllCars = async ({ status }) => {
    const response = await axios.get(`${API_URL}/cars?status=${status}`)
    return response.data.payload;
};

const getDetailCar = async (id) => {
    const response = await axios.get(`${API_URL}/cars/${id}`);
    return response.data.payload;
};

const addCar = async (userData) => {
    const token = getToken();
    const response = await axios.post(`${API_URL}/cars`, userData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    return response.data.payload;
};

const updateCar = async (carId, userData) => {
    const token = getToken();
    const response = await axios.patch(`${API_URL}/cars/${carId}`, userData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.payload;
};

const deleteCar = async (carId) => {
    const token = getToken();
    await axios.delete(`${API_URL}/cars/${carId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export { getAllCars, addCar, updateCar, deleteCar, getDetailCar };
