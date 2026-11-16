import api from "@/shared/api";

export const updateTaskCompletion = async (taskId, isCompleted) => {
    const response = await api.put(`/api/tasks/${taskId}`,
        {
            is_completed: isCompleted
        }
    );

    return response.data;
}