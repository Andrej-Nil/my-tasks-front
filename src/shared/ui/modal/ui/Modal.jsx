import {useId} from "react";
import {MdClose} from "react-icons/md";
import {Button} from "@/shared/ui/button";
import './modal.scss';
const Modal = ({onClose, children}) => {
    const titleId = useId();
    return (
        <div className="modal"
             role="dialog"
             aria-modal="true"
             aria-labelledby={titleId}
        >
            <div onClick={onClose} className="modal__bg"></div>
            <div className="container middle">
                <div className="modal__inner block">
                    <Button
                        onClick={onClose}
                        className='btn--base modal-close'
                        aria-label={`Закрыть окно`}
                    >
                        <MdClose aria-hidden="true" className="modal-close__icon" />
                    </Button>
                    {children}
                </div>
            </div>
        </div>
    )

}

export default Modal;