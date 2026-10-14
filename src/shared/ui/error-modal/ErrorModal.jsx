import {Modal} from "@/shared/ui/modal";
import {useErrorModal} from "@/shared/model/error-modal";
import ErrorMessage from "./ErrorMessage";
import {useShallow} from "zustand/react/shallow";


const ErrorModal =  () => {

    const { isOpen, status, close, title, message } = useErrorModal(
        useShallow((state) => ({
            isOpen: state.isOpen,
            status: state.status,
            close: state.close,
            title: state.title,
            message: state.message,
        }))
    )


    if(!isOpen) return null;

    return (
        <Modal onClose={close}>
            <ErrorMessage status={status} message={message} title={title} onClick={close} />
        </Modal>
    )
}

export default ErrorModal;