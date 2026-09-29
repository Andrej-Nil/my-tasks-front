import axios from 'axios';
import {queryClient} from "./queryClient";

const api = axios.create({
    baseURL: 'http://api.my-tasks.local',

    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    }
});


api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            queryClient.setQueryData(['user'], null);
        }

        return Promise.reject(error);
    }
);

export default api;