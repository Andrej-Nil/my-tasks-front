import {Button} from "@/shared/ui/button";
import  './errorMessage.scss'

const ErrorMessage = ({status, title, message, onClick}) => {
    return (
        <div  className="error-message">
            <div className="error-message__content">
                {status && <span className="error-message__status">{status}</span>}
                {title && <h2 className="error-message__title">{title}</h2>}
                {message && <p className="error-message__text">{message}</p>}
            </div>


            <Button onClick={onClick} className="btn--primary">Закрыть</Button>
        </div>
    )
}


export default ErrorMessage;