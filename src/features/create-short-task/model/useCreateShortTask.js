import {useMutation, useQueryClient} from "@tanstack/react-query";
import { createShortTask } from "@/entities/task/api/createShortTask";
import {SHORT_TASK_ERRORS} from "./errors";



const getShortTaskError = (error) => {
    if (error.response) {
        const {status, data} = error.response;
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
    const queryClient = useQueryClient();

    return useMutation( {

        mutationFn: async (title) => {
            try{
                return await createShortTask(title);
            } catch (error) {
                throw new Error(getShortTaskError(error));
            }
        },
        networkMode: 'always',
        onSuccess: (data) => {
            console.log(data);
        }
    })
}