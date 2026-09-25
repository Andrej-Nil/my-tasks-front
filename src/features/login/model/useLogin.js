import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {login} from "@/entities/user";
import {LOGIN_ERRORS} from "@/features/login/model/errors";

const getLoginError = (error) => {
    if (error.response) {
        const status = error.response.status;

        if (status === 422) {
            return LOGIN_ERRORS.INVALID_CREDENTIALS;
        }

        if (status >= 500) {
            return LOGIN_ERRORS.SERVER_ERRORS;
        }

        return LOGIN_ERRORS.DEFAULT_ERROR;
    }

    if (error.request) {
        return LOGIN_ERRORS.NETWORK_ERROR;
    }

    return LOGIN_ERRORS.DEFAULT_ERROR;
};

export const useLogin = () => {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ email, password }) => {
            try{
                 return await login(email, password);
            }catch (error){
                error.userMessage = getLoginError(error);
                throw error;
            }
        },
        networkMode: 'always',

        onSuccess: (data) => {
            queryClient.setQueryData(['user'], data.user);
            navigate('/', { replace: true });
        }
    });
}