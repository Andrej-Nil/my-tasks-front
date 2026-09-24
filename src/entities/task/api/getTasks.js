import api from "@/shared/api";

export const getTasks = async () => {
    const response = await api.get('/api/tasks');

    return response.data.tasks;
}