import api from "@/shared/api/index.js";
import {useUserStore} from "@/entities/user/index.js";

export const logout = async () => {
    await api.post('/logout');

    useUserStore.getState().setUser(null);
}