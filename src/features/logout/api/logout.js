import api from "@/shared/api";
import {useUserStore} from "@/entities/user";
import {API_ERRORS} from "@/shared/errors";
import {LOGOUT_ERRORS} from "@/features/logout/model/errors";

export const logout = async () => {
    try{
        await api.post('/logout');

    } catch (error) {
        if(error.response){
            const status = error.response?.status;
            if(status >= 500){
                throw new Error(API_ERRORS.SERVER_ERRORS);
            }
            useUserStore.getState().setUser(null);
            throw new Error(LOGOUT_ERRORS.LOGOUT_ERROR);

        }

        if(error.request){
            throw new Error(API_ERRORS.NETWORK_ERROR);
        }

        throw new Error(API_ERRORS.DEFAULT_ERROR);
    } finally {
        useUserStore.getState().setUser(null);
    }
}