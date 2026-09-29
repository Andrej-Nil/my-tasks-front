import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteTask} from "@/entities/task/api/deleteTask";



export const useDeleteTask = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (taskId) => {
            try{
                return await deleteTask(taskId);
            }catch (error) {
                throw error;
            }
        },
        networkMode: 'always',
        onSuccess: (data, taskId) => {
            queryClient.setQueryData(['tasks'], (oldTasks = []) =>
                oldTasks.filter(task => task.id !== taskId)
            )

        }
    })
}