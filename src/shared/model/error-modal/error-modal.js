import {create} from "zustand";

export const useErrorModal = create((set) => ({
    isOpen: false,

    status: null,

    title: null,

    message: null,

    open: (status, title, message) => set({
        isOpen: true,
        status,
        title,
        message
    }),

    close: () => set({
        isOpen: false,
        status: null,
        title: null,
        message: null
    }),


}));