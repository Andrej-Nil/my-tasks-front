import api from "@/shared/api";

export const logout = async () => {
    await api.post('/logout');
}