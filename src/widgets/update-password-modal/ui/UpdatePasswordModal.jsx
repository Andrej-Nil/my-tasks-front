import {Modal} from "@/shared/ui/modal";
import {useUpdatePasswordModal} from "@/shared/model/update-password-modal";
import {UpdatePasswordForm} from "@/features/update-password";

const UpdatePasswordModal = () => {
    const isOpen = useUpdatePasswordModal((state) => state.isOpen);
    const close = useUpdatePasswordModal((state) => state.close);

    if(!isOpen) return null;
    return (
        <Modal onClose={close} containerSize="small">
            <UpdatePasswordForm />
        </Modal>
    )
}

export default  UpdatePasswordModal;