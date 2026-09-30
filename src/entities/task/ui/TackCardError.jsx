import {Button} from "@/shared/ui/button";
import {MdClose} from "react-icons/md";

const TackCardError = ({message, onClose, title}) => {

 console.log(message)
    return (
        <div className="task-card-error" role="alert">
            <p className="task-card-error__message">
                {message ?? 'Произошла ошибка. Попробуйте позже'}
            </p>

            <Button onClick={onClose}
                    className="btn btn--base task-card__btn"
                    aria-label={`Закрыть сообщение об ошибке задачи ${title}`}
            >
                <MdClose aria-hidden="true" className="task-card-error__icon" />

            </Button>

        </div>
    )
}


export default TackCardError;