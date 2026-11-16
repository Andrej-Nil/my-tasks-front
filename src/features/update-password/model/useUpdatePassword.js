
import {useMutation} from "@tanstack/react-query";
import {useUpdatePasswordModal} from "@/shared/model/update-password-modal";
import {updatePassword} from "@/entities/user";
import {UPDATE_PASSWORD_ERRORS} from "./errors";

const getUpdatePasswordError = (error) => {
    if(error.response){

        const {status} = error.response;
        if(status === 403) {
            return UPDATE_PASSWORD_ERRORS.FORBIDDEN;
        }

        if(status === 404) {
            return UPDATE_PASSWORD_ERRORS.NOT_FOUND;
        }

        if(status === 422) {
            return UPDATE_PASSWORD_ERRORS.INVALID_CREDENTIALS;
        }

        if(status === 500) {
            return UPDATE_PASSWORD_ERRORS.SERVER_ERRORS;
        }

        return UPDATE_PASSWORD_ERRORS.DEFAULT_ERROR
    }

    if(error.request){
        return UPDATE_PASSWORD_ERRORS.NETWORK_ERROR
    }

    return UPDATE_PASSWORD_ERRORS.DEFAULT_ERROR
}

export const useUpdatePassword = () => {

    const closeUpdatePasswordModal = useUpdatePasswordModal((state) => state.close);

    return useMutation({
        mutationFn: async ({currentPassword, newPassword}) => {
            try {
                return await updatePassword(currentPassword, newPassword);
            } catch (error) {
                error.userMessage = getUpdatePasswordError(error);
                throw error;
            }
        },
        onSuccess: () => {
            closeUpdatePasswordModal();
        }
    })
}