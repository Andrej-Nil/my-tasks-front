import {create} from 'zustand';
import api from "@/shared/api/index.js";

export const useUserStore = create((set) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
    clearUser: () => set({ user: null }),
    isAuthChecked: false,
    checkAuth: async () => {

        try {
            const response = await api.get('/api/user');

            if(response.data.authenticated){
                set({ user: response.data.user, isAuthChecked: true });
            }else{
                set({ user: null, isAuthChecked: true });
            }


        } catch (error) {

            set({ user: null, isAuthChecked: true });
        }
    },
}));