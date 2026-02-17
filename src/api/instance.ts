import axios from 'axios';

// 실제 서버 주소: https://ahp.aoldacloud.com
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});