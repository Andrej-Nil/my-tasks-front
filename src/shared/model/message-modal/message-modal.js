import {create} from "zustand";

export const useMessageModal = create((set) => ({
    isOpen: false,
    message: null,
    open: (message) => set({
        isOpen: true,
        message,
    }),
    close: () => set({
        isOpen: false,
        message: null,
    }),
}));