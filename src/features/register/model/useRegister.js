import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {register} from "@/entities/user";
import {REGISTER_ERRORS} from "./errors";

const getRegisterError = (error) => {
    if (error.response) {
        const {status, data} = error.response.status;

        if (status === 422) {
            if(data.errors?.email?.includes('validation.unique')){
                throw new Error(REGISTER_ERRORS.EMAIL_ALREADY_EXISTS);
            }
            return REGISTER_ERRORS.INVALID_CREDENTIALS;
        }

        if (status >= 500) {
            return REGISTER_ERRORS.SERVER_ERRORS;
        }

        return REGISTER_ERRORS.DEFAULT_ERROR;
    }

    if (error.request) {
        return REGISTER_ERRORS.NETWORK_ERROR;
    }

    return REGISTER_ERRORS.DEFAULT_ERROR;
};

export const useRegister = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({name, email, password}) => {
            try {
                return await register(name, email, password);
            } catch (error) {
                throw new Error(getRegisterError(error))
            }

        },
        networkMode: 'always',
        onSuccess: (data) => {
            queryClient.setQueryData(['user'], data.user);
            navigate('/', {replace: true});
        }

    })
}