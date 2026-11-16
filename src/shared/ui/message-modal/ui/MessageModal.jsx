import {Modal} from "@/shared/ui/modal";
import {useMessageModal} from "@/shared/model/message-modal";
import Message from "./Message";
import {useShallow} from "zustand/react/shallow";

const MessageModal = () => {
    const { isOpen, close, message } = useMessageModal(
        useShallow((state) => ({
            isOpen: state.isOpen,
            close: state.close,
            message: state.message,
        }))
    )

    if(!isOpen) return null;

    return (
        <Modal onClose={close} containerSize="small">
           <Message onClose={close} message={message} />
        </Modal>
    )
}

export default MessageModal;