import {create} from "zustand";

export  const useUpdateTaskModal = create((set) => ({
    isOpen: false,

    taskId: null,

    open: (taskId) => set({
        isOpen: true,
        taskId: taskId
    }),

    close: () => set({
        isOpen: false,
        taskId: null
    }),
}))