import {create} from "zustand";
export const useNameEditModal = create((set) => ({
    isOpen: false,

    open: () => set({isOpen: true}),

    close: () => set({isOpen: false})
}));



