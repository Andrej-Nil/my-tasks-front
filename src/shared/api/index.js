import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.my-tasks.local',

    withCredentials: true,
    withXSRFToken: true,

    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    }
});

export default api;