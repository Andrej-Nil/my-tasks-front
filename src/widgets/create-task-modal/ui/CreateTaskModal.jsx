import {useCreateTaskModal} from "@/shared/model/create-task-modal";
import {Modal} from "@/shared/ui/modal";
import {CreateTaskForm} from "@/features/create-task";



const CreateTaskModal = () => {

    const isOpen = useCreateTaskModal((state) => state.isOpen);
    const close = useCreateTaskModal((state) => state.close);

    if(!isOpen) return null;

    return (
        <Modal onClose={close}>
            <CreateTaskForm />
        </Modal>
    )
}

export default CreateTaskModal;