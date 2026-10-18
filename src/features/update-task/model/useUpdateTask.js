import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateTask} from "@/entities/task";
import {UPDATE_TASK_ERRORS} from "./errors";
import {useUpdateTaskModal} from "@/shared/model/update-task-modal";
import task from "@/pages/task/ui/task/Task";

const getUpdateTaskError = (error) => {
    if(error.response){
        const {status} = error.response;

        if(status === 403) {
            return UPDATE_TASK_ERRORS.FORBIDDEN
        }

        if(status === 404) {
            return UPDATE_TASK_ERRORS.NOT_FOUND
        }


        if(status === 422) {
            return UPDATE_TASK_ERRORS.INVALID_CREDENTIALS;
        }

        if(status === 500) {
            return UPDATE_TASK_ERRORS.SERVER_ERROR;
        }


        return UPDATE_TASK_ERRORS.DEFAULT_ERROR
    }

    if(error.request) {
        return UPDATE_TASK_ERRORS.NETWORK_ERROR
    }

    return UPDATE_TASK_ERRORS.DEFAULT_ERROR
}

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    const closeUpdateModal = useUpdateTaskModal((state) => state.close);
    return useMutation({
        mutationFn: async ({taskId, data}) => {
            try{
                return await updateTask(taskId, data)
            } catch (error) {

                error.userMessage = getUpdateTaskError(error);
                throw error;
            }
        },

        onSuccess: (updateTask, variables) => {
            queryClient.setQueryData(['task', variables.taskId], updateTask)
            closeUpdateModal();
        }
    })
}