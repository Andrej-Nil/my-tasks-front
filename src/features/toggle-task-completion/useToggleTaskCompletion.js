import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateTaskCompletion} from "@/entities/task/api/updateTaskCompletion";
import {UPDATE_TASK_ERRORS} from "./errors";

const getToggleTaskCompletion = (error) => {
    if(error.response) {
        const {status} = error.response;

        if(status === 403){
            return UPDATE_TASK_ERRORS.FORBIDDEN;
        }
        if(status === 404){
            return UPDATE_TASK_ERRORS.NOT_FOUND;
        }

        if(status >= 500){
            return UPDATE_TASK_ERRORS.SERVER_ERROR;
        }

        return UPDATE_TASK_ERRORS.DEFAULT_ERROR;
    }

    if(error.request){
        return UPDATE_TASK_ERRORS.NETWORK_ERROR
    }
    return UPDATE_TASK_ERRORS.DEFAULT_ERROR;
}

export const useToggleTaskCompletion = () => {
    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: async ({taskId, isCompleted}) => {
            try {
                return await updateTaskCompletion(taskId, isCompleted);
            } catch (error){
                error.userMessage = getToggleTaskCompletion(error);
                throw error;
            }

        },

        onMutate: async ({ taskId, isCompleted }) => {
            await queryClient.cancelQueries({
                queryKey: ['tasks'],
            })

            const previousTasks = queryClient.getQueryData(['tasks']);

            queryClient.setQueryData(['tasks'], (oldTasks = []) =>
                oldTasks.map(task =>
                    task.id === taskId
                        ? {...task, is_completed: isCompleted }
                        : task
                )
            );

            return { previousTasks }
        },
        onError: (error, variables, context) => {
            queryClient.setQueryData(
                ['tasks'],
                context.previousTasks
            );
        },
        onSuccess: (data) => {
            console.log(data);
        }

    });
}