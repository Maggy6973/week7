import axios from 'axios';

const API_URL = 'http://localhost:5550/api/auth/';

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}register`, userData, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}login`, userData, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};