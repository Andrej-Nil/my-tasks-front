import {useUpdateTaskModal} from "@/shared/model/update-task-modal";
import {Modal} from "@/shared/ui/modal";
import {UpdateTaskForm} from "@/features/update-task";
import {useShallow} from "zustand/react/shallow";
const UpdateTaskModal = () => {

    const {isOpen, close, taskId} = useUpdateTaskModal(
        useShallow((state) => ({
            isOpen: state.isOpen,
            close: state.close,
            taskId: state.taskId,
        }))
    )
    if(!isOpen) return null;

    return (
        <Modal onClose={close}>
            <UpdateTaskForm key={taskId} taskId={taskId}/>
        </Modal>
    )
}

export default UpdateTaskModal;