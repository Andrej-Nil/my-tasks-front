import {UPDATE_EMAIL_ERRORS} from "@/features/update-email/model/errors";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useUpdateEmailModal} from "@/shared/model/update-email-modal";
import {updateEmail} from "@/entities/user";

const getUpdateEmailError = (error) => {
    if (error.response) {
        const {status} = error.response;

        if(status === 403) {
            return UPDATE_EMAIL_ERRORS.FORBIDDEN;
        }

        if(status === 404) {
            return UPDATE_EMAIL_ERRORS.NOT_FOUND;
        }

        if(status === 422) {
            return UPDATE_EMAIL_ERRORS.INVALID_CREDENTIALS;
        }

        if(status === 500) {
            return UPDATE_EMAIL_ERRORS.SERVER_ERRORS;
        }

        return UPDATE_EMAIL_ERRORS.DEFAULT_ERROR;
    }


    if (error.request) {
        return UPDATE_EMAIL_ERRORS.NETWORK_ERROR;
    }

    return UPDATE_EMAIL_ERRORS.DEFAULT_ERROR;


}
export const useUpdateEmail = () => {
    const queryClient = useQueryClient();

    const closeUpdateEmailModal = useUpdateEmailModal((state) => state.close);

    return useMutation({
        mutationFn: async ({email,password}) => {
            try{
                return await updateEmail(email,password);
            }catch (error) {
                error.userMessage = getUpdateEmailError(error);

                throw error;
            }
        },
        onSuccess: (updateUser, variables) => {
            queryClient.setQueryData(['user'], updateUser);
            closeUpdateEmailModal();
        }
    })
}

