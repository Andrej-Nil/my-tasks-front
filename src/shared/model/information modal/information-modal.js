import {create} from "zustand";

let timeout = null;

export const useInformationModal = create((set) => ({
    isOpen: false,

    message: 'Задача успешно создана',

    open: (message) => {
        clearTimeout(timeout);

        set({ isOpen: true, message });
        timeout = setTimeout(() => {
            set({ isOpen: false, message: null });
            timeout = null;
        }, 10000);

    },

    close: (message) => {
        clearTimeout(timeout);
        timeout = null;
        set({ isOpen: false, message });
    },
}));