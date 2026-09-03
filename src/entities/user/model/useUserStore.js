import {create} from 'zustand';
import api from "@/shared/api/index.js";

export const useUserStore = create((set) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
    clearUser: () => set({ user: null }),
    isAuthChecked: false,
    checkAuth: async () => {
        console.log('CHECK AUTH');
        try {
            const response = await api.get('/api/user');
            set({ user: response.data, isAuthChecked: true });
        } catch (error) {

            set({ user: null, isAuthChecked: true });
        }
    },
}));