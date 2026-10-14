import {Modal} from "@/shared/ui/modal";
import {useUpdateTaskModal} from "@/shared/model/update-task-modal";

const UpdateTaskModal = () => {

    const isOpen = useUpdateTaskModal((state) => state.isOpen);
    const onClose = useUpdateTaskModal((state) => state.close)
    if(!isOpen) return null;

    return (
        <Modal onClose={onClose}>
            sdgfsdfsd
        </Modal>
    )
}

export default UpdateTaskModal;