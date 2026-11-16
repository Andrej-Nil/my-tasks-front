import api from "@/shared/api";

export const getUser = async () => {
    try{
        const response = await api.get('/api/user');
        return response.data.user;
    } catch (error){
        return null;
    }
}