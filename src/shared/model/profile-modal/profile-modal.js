import {create} from "zustand";

export const useProfileModal = create((set) => ({
    isOpen: false,

    open: () => set({isOpen: true}),

    close: () => set({isOpen: false})
}))