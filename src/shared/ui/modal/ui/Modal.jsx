import {MdClose} from "react-icons/md";
import {Button} from "@/shared/ui/button";
import './modal.scss';
import {useEffect} from "react";
const Modal = ({onClose, containerSize = "middle",  children, }) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };

    }, [onClose])


    return (
        <div className="modal"
             role="dialog"
             aria-modal="true"
        >
            <div onClick={onClose} className="modal__bg"></div>
            <div className={`container ${containerSize}`}>
                <div className="modal__inner">
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