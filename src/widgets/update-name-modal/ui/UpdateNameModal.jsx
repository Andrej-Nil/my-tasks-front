import {Modal} from "@/shared/ui/modal";
import {UpdateNameForm} from "@/features/update-name";
import {useUpdateNameModal} from "@/shared/model/update-name-modal";
const UpdateNameModal = () => {

    const isOpen = useUpdateNameModal((state)  => state.isOpen);
    const close = useUpdateNameModal((state)  => state.close);

    if(!isOpen) return;
    return (
        <Modal onClose={close} containerSize="small">
            <UpdateNameForm />
        </Modal>
    )
}

export default UpdateNameModal;