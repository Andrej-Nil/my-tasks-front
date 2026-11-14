import {useShallow} from "zustand/react/shallow";
import {useInformationModal} from "@/shared/model/information modal";
import {Button} from "@/shared/ui/button";
import {MdClose} from "react-icons/md";
import './information-modal.scss';
const InformationModal = () => {

    const { isOpen, close, message } = useInformationModal(
        useShallow((state) => ({
            isOpen: state.isOpen,
            close: state.close,
            message: state.message,
        }))
    )

    if(!isOpen) return null;

    return (
        <div className="information-modal">
            <Button
                onClick={close}
                className='btn--base information-modal-close'
                aria-label={`Закрыть окно`}
            >
                <MdClose aria-hidden="true" className="information-modal-close__icon" />
            </Button>
            <div className="information-modal__content">
                {message && <p className="information-modal__message">{message}</p>}
            </div>
        </div>
    )
}

export default InformationModal;