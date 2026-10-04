import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createTask} from "@/entities/task/api/createTask";
import {useCreateTaskModal} from "@/shared/model/create-task-modal";
import {CREATE_TASK_ERRORS} from "./errors";

const getCreateTaskError = (error) => {
    if (error.response) {
        const {status} = error.response;
        if (status === 401) {
            return CREATE_TASK_ERRORS.USER_NOT_AUTHORIZER;
        }

        if (status === 403) {
            return CREATE_TASK_ERRORS.FORBIDDEN;
        }

        if (status === 422) {
            return CREATE_TASK_ERRORS.INVALID_CREDENTIALS;
        }

        if (status >= 500) {
            return CREATE_TASK_ERRORS.SERVER_ERRORS;
        }

        return CREATE_TASK_ERRORS.DEFAULT_ERROR;
    }

    if (error.request) {
        return CREATE_TASK_ERRORS.NETWORK_ERROR;
    }

    return CREATE_TASK_ERRORS.DEFAULT_ERROR;
};

export  const useCreateTask = () => {
    const queryClient = useQueryClient();
    const createTaskModalClose = useCreateTaskModal((state) => state.close);

    return useMutation({
        mutationFn: async ({title, description}) => {
            try{
                return await createTask(title, description);
            } catch (error) {
                error.userMessage = getCreateTaskError(error)
                throw error;
            }
        },
        networkMode: 'always',
        onSuccess: (data) => {
            queryClient.setQueryData(['tasks'], (oldTasks = []) => {
                return [data.task, ...oldTasks]
            })
            createTaskModalClose();
        }
    })
}