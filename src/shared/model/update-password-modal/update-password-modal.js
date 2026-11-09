import {create} from "zustand";

export const useUpdatePasswordModal = create((set) => ({
    isOpen: false,

    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}))