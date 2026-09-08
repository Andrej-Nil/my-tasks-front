import api from "@/shared/api";
import {useUserStore} from "@/entities/user";

export const registerByEmail = async (name, email, password) => {
    await api.get('/sanctum/csrf-cookie');

    await api.post('/register', {
        name,
        email,
        password,
        password_confirmation: password
    });

    const response = await api.get('/api/user');
    useUserStore.getState().setUser(response.data);
    return response.data;
}