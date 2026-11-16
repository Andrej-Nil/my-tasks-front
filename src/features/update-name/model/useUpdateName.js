import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useUpdateNameModal} from "@/shared/model/update-name-modal";
import {updateName} from "@/entities/user";
import {UPDATE_NAME_ERRORS} from './error';

const getUpdateNameError = (error) => {
    if(error.response){
        const {status} = error.response;

        if(status === 403) {
            return UPDATE_NAME_ERRORS.FORBIDDEN;
        }

        if(status === 404) {
            return UPDATE_NAME_ERRORS.NOT_FOUND;
        }

        if(status === 422) {
            return UPDATE_NAME_ERRORS.INVALID_CREDENTIALS;
        }

        if(status === 500) {
            return UPDATE_NAME_ERRORS.SERVER_ERRORS;
        }

        return UPDATE_NAME_ERRORS.DEFAULT_ERROR;
    }

    if(error.request) {
        return UPDATE_NAME_ERRORS.NETWORK_ERROR;
    }

    return UPDATE_NAME_ERRORS.DEFAULT_ERROR;
}

export const useUpdateName = () => {
    const queryClient = useQueryClient();

    const closeUpdateNameModal = useUpdateNameModal((state) => state.close);

    return useMutation({
        mutationFn: async (newName) => {
            try{
                return await updateName(newName);
            } catch (error) {
                error.userMessage = getUpdateNameError(error);

                throw error;
            }
        },

        onSuccess: (updateUser, variables) => {
            queryClient.setQueryData(['user'], updateUser);
            closeUpdateNameModal();
        }
    })
}