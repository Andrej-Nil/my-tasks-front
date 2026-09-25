import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {logout} from "@/entities/user";
import {LOGOUT_ERRORS} from "./errors";

const getLogoutError = (error) => {
    if (error.response) {
        const status = error.response.status;

        if (status === 401) {
            return;
        }

        if (status >= 500) {
            return LOGOUT_ERRORS.SERVER_ERRORS;
        }

        return;
    }

    if (error.request) {
        return LOGOUT_ERRORS.NETWORK_ERROR;
    }

    return LOGOUT_ERRORS.DEFAULT_ERROR;
};

export const useLogout = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async() => {
            try{
                return await logout();
            } catch (error) {
                error.userMessage = getLogoutError(error);
                throw error;
            }
        },
        networkMode: 'always',
        onSuccess: () => {
            queryClient.setQueryData(['user'], null);
            navigate('/', { replace: true });
        }
    })
}