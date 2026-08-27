import {create} from 'zustand';

export const useUserStore = create((set) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
    clearUser: () => set({ user: null }),
    isAuthChecked: false,
    checkAuth: async () => {
        try {
            const response = await api.get('/api/user');
            set({ user: response.data, isAuthChecked: true });
        } catch (error) {
            // Если Laravel вернул 401 (не авторизован), сбрасываем в null
            set({ user: null, isAuthChecked: true });
        }
    },
}));