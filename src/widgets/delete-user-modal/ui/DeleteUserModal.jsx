import {Modal} from "@/shared/ui/modal";
import {useDeleteUserModal} from "@/shared/model/delete-user-modal";
import {DeleteProfileForm} from "@/features/delete-profile";

const DeleteUserModal = () => {
    const isOpen = useDeleteUserModal((state) => state.isOpen);
    const close = useDeleteUserModal((state) => state.close);

    if(!isOpen) return null;
    return (
        <Modal onClose={close} containerSize="small">
            <DeleteProfileForm />
        </Modal>
    )
}

export default DeleteUserModal;