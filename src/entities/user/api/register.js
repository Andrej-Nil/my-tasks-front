import api from "@/shared/api";

export const register = async (name, email, password) => {

    await api.get('/sanctum/csrf-cookie');

    await api.post('/register', {
        name,
        email,
        password,
        password_confirmation: password
    });

    const response = await api.get('/api/user');

    return response.data;
}
