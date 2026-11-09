import {create} from "zustand";

export const useDeleteUserModal = create((set) => ({
    isOpen:false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}))