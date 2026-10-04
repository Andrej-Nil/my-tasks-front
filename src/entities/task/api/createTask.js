import api from "@/shared/api";

export const createTask = async (title, description) => {
    const response = await api.post('/api/tasks', {
        title,
        description
    });

    return response.data;
}