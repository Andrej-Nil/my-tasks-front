import api from "@/shared/api";

export const deleteTask = async (taskId) => {
    const response = await api.post(`/api/tasks/${taskId}`, {
        _method: 'DELETE',
        id: taskId
    })

    return response.data;

}