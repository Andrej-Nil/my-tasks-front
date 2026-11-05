import {Modal} from "@/shared/ui/modal";
import {useUpdateEmailModal} from "@/shared/model/update-email-modal";
import {UpdateEmailForm} from "@/features/update-email";

const UpdateEmailModal = () => {
    const isOpen = useUpdateEmailModal((state) => state.isOpen);
    const close = useUpdateEmailModal((state) => state.close);
    if(!isOpen) return null;
    return (
        <Modal onClose={close} containerSize="small">
            <UpdateEmailForm />
        </Modal>
    )
}

export default UpdateEmailModal;