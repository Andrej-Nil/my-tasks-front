import axios from 'axios';

const index = axios.create({
    // Главный адрес вашего Laravel бэкенда на Open Server
    baseURL: 'http://my-tasks-backend.local',

    // 🔥 КРИТИЧЕСКИ ВАЖНО для Laravel Breeze:
    // Разрешает автоматическую отправку и получение Cookies (кук авторизации)
    withCredentials: true,

    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    }
});

export default index;