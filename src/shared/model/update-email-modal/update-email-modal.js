import {create} from "zustand";

export const useUpdateEmailModal = create((set) =>({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false})
}));