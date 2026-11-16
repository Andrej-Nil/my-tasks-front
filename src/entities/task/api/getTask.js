import api from "@/shared/api";

export const getTask = async (taskId) => {
    const response = await api.get(`api/tasks/${taskId}`);

    return response.data.task;
}