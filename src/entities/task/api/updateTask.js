import api from "@/shared/api";

export const updateTask = async (taskId, data) => {
    const response = await api.put(`api/tasks/${taskId}`,
        {
            ...data
        }
    )

    return response.data.task;
}