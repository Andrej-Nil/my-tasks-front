import api from "@/shared/api";

export const login = async (email, password) => {
    await api.get('/sanctum/csrf-cookie');

    await api.post('/login', { email, password });

    const response = await api.get('/api/user');
    return response.data;
}

