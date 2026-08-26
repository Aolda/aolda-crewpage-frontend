import axios from 'axios';

// Browser requests remain on the frontend origin. `next.config.ts` forwards
// `/api/*` to BACKEND_INTERNAL_URL on the server.
const API_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '/api';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 15000,
});
