import api from "@/shared/api";
import {useUserStore} from "@/entities/user";
import {REGISTER_ERRORS} from "@/features/register-by-email/model/errors";
import {API_ERRORS} from "@/shared/errors";

export const registerByEmail = async (name, email, password) => {

    try{
        await api.get('/sanctum/csrf-cookie');

        await api.post('/register', {
            name,
            email,
            password,
            password_confirmation: password
        });

        const response = await api.get('/api/user');
        if(response.data.authenticated){
            useUserStore.getState().setUser(response.data.user)
        } else {
            set({ user: null, isAuthChecked: true });
        }
    } catch (error) {
        if(error.response){
            const {status, data} = error.response;

            if(status === 422){
                if(data.errors?.email?.includes('validation.unique')){
                    throw new Error(REGISTER_ERRORS.EMAIL_ALREADY_EXISTS);
                }
                throw new Error(REGISTER_ERRORS.INVALID_CREDENTIALS);
            }

            if(status >= 500){
                throw new Error(API_ERRORS.SERVER_ERRORS);
            }

            throw new Error(API_ERRORS.DEFAULT_ERROR);
        }

        if(error.request){
            throw new Error(API_ERRORS.NETWORK_ERROR);
        }

        throw new Error(API_ERRORS.DEFAULT_ERROR);

    }

}