import {useMutation, useQueryClient} from "@tanstack/react-query";
import { createShortTask } from "@/entities/task/api/createShortTask";
import {SHORT_TASK_ERRORS} from "./errors";
import {useNavigate} from "react-router-dom";



const getShortTaskError = (error) => {
    if (error.response) {
        const {status} = error.response;
        if (status === 401) {
            return SHORT_TASK_ERRORS.USER_NOT_AUTHORIZER;
        }

        if (status === 422) {
            return SHORT_TASK_ERRORS.INVALID_CREDENTIALS;
        }

        if (status >= 500) {
            return SHORT_TASK_ERRORS.SERVER_ERRORS;
        }

        return SHORT_TASK_ERRORS.DEFAULT_ERROR;
    }

    if (error.request) {
        return SHORT_TASK_ERRORS.NETWORK_ERROR;
    }

    return SHORT_TASK_ERRORS.DEFAULT_ERROR;
};

export const useCreateShortTask = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation( {

        mutationFn: async (title) => {
            try{
                return await createShortTask(title);
            } catch (error) {
                error.userMessage = getShortTaskError(error);
                throw error;
            }
        },
        networkMode: 'always',
        onSuccess: (data) => {
            console.log(data);
            queryClient.setQueryData(['tasks'], (oldTasks = []) => {
                return [data.task, ...oldTasks];
            });
        },
        onError: (error) => {
            if(error.response?.status === 500){
                queryClient.setQueryData(['user'], null);
            }
        }
    })
}