import {useNameEditModal} from "@/shared/model/name-edit-modal";
import {Modal} from "@/shared/ui/modal";
const NameEditModal = () => {

    const isOpen = useNameEditModal((state)  => state.isOpen);
    const close = useNameEditModal((state)  => state.close);

    if(!isOpen) return;
    return (
        <Modal onClose={close} containerSize="small">
            Name
        </Modal>
    )
}

export default NameEditModal;