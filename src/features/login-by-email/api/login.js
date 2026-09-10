import api from "@/shared/api";
import {useUserStore} from "@/entities/user";
import {LOGIN_ERRORS} from "@/features/login-by-email/model/errors";
import {API_ERRORS} from "@/shared/errors";


export const loginByEmail = async (email, password) => {
    try{
        await api.get('/sanctum/csrf-cookie');
        await api.post('/login', { email, password });

        const response = await api.get('/api/user');

        if(response.data.authenticated){
            useUserStore.getState().setUser(response.data.user)
        } else {
            set({ user: null, isAuthChecked: true });
        }

    } catch (error) {
        if(error.response){
            const status = error.response?.status;

            if(status === 422){
                throw new Error(LOGIN_ERRORS.INVALID_CREDENTIALS);
            }

            if(status >= 500){
                throw new Error(API_ERRORS.SERVER_ERRORS);
            }

            throw new Error(API_ERRORS.DEFAULT_ERROR);
        }

        if(error.request){
            throw new Error(API_ERRORS.NETWORK_ERROR)
        }

        throw new Error(API_ERRORS.DEFAULT_ERROR);
    }
}