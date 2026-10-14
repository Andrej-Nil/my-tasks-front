import {create} from "zustand";

export  const useUpdateTaskModal = create((set) => ({
    isOpen: false,

    open: () => set({isOpen: true}),

    close: () => set({isOpen: false})
}))