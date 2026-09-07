import api from "@/shared/api";
import {useUserStore} from "@/entities/user";

export const loginByEmail = async (email, password) => {

    await api.get('/sanctum/csrf-cookie');
    await api.post('/login', { email, password });

    const response = await api.get('/api/user');

    useUserStore.getState().setUser(response.data);

    return response.data;
}