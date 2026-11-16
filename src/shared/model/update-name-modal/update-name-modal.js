import {create} from "zustand";
export const useUpdateNameModal = create((set) => ({
    isOpen: false,

    open: () => set({isOpen: true}),

    close: () => set({isOpen: false})
}));



