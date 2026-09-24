import api from "@/shared/api";

export const createShortTask = async (title) => {
    const response = await api.post('/api/tasks', {
        title
    });

    return response.data;
}