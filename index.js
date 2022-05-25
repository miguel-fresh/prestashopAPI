import axios from "axios";
import dotenv from 'dotenv';

dotenv.config('.env');


export const API = {
    key: process.env.API_KEY,
    baseURL: process.env.API_BASE_URL,
};

export const api = axios.create({
    baseURL: API.baseURL,
    auth: {
        username: API.key,
        password: API.key,
    }
});