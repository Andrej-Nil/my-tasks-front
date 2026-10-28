import { create } from "zustand";

export const useSettingModal = create((set) => ({
    isOpen: false,

    open: () => set({isOpen: true}),

    close: () => set({isOpen: false})
}));