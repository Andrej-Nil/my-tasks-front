import {useMutation, useQueryClient} from "@tanstack/react-query";
import {DELETE_USER_ERRORS} from "./errors";
import {deleteUser} from "@/entities/user";
import {useDeleteUserModal} from "@/shared/model/delete-user-modal";

const getDeleteUserError = (error) => {
    if(error.response){
        const {status} = error.response;

        if(status === 403) {
            return DELETE_USER_ERRORS.FORBIDDEN
        }

        if(status === 404) {
            return DELETE_USER_ERRORS.NOT_FOUND
        }

        if(status === 422) {
            return DELETE_USER_ERRORS.INVALID_CREDENTIALS
        }

        if(status >= 500) {
            return DELETE_USER_ERRORS.SERVER_ERRORS
        }

        return DELETE_USER_ERRORS.DEFAULT_ERROR
    }

    if(error.request){
        return DELETE_USER_ERRORS.NETWORK_ERROR
    }

    return DELETE_USER_ERRORS.DEFAULT_ERROR
}

export const useDeleteProfile = () => {

    const queryClient = useQueryClient();

    const closeDeleteUserModal = useDeleteUserModal((state) => state.close)

    return useMutation({
        mutationFn: async (password) => {
            try {
                return await deleteUser(password);
            } catch (error) {
                error.userMessage = getDeleteUserError(error);

                throw error;
            }
        },
        onSuccess: () => {
            queryClient.setQueryData(['user'], null);

            closeDeleteUserModal();
        }
    })
}