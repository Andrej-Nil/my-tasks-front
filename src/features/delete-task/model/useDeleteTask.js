import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteTask} from "@/entities/task/api/deleteTask";
import {DELETE_TASK_ERRORS} from "./errors";

const getDeleteTaskError = (error) => {
    if(error.response) {
        const {status} = error.response;

        if(status === 403){
            return DELETE_TASK_ERRORS.FORBIDDEN;
        }
        if(status === 404){
            return DELETE_TASK_ERRORS.NOT_FOUND;
        }

        if(status >= 500){
            return DELETE_TASK_ERRORS.SERVER_ERROR;
        }

        return DELETE_TASK_ERRORS.DEFAULT_ERROR;
    }

    if(error.request){
        return DELETE_TASK_ERRORS.NETWORK_ERROR
    }
    return DELETE_TASK_ERRORS.DEFAULT_ERROR;
}

export const useDeleteTask = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (taskId) => {
            try{
                return await deleteTask(taskId);
            }catch (error) {
                error.userMessage = getDeleteTaskError(error);
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