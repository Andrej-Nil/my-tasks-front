import {Modal} from "@/shared/ui/modal";
import {CreateTaskForm} from "@/features/create-task";


const CreateTaskModal = () => {

    return (
        <Modal onClose={()=> console.log('close')}>
            <CreateTaskForm />
        </Modal>
    )
}

export default CreateTaskModal;