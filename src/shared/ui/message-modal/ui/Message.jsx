import {Button} from "@/shared/ui/button";
import "./message.scss";

const Message = ({onClose, message}) => {
    return (
        <div className="message block">
            <div className="message__content">
                <p className="message__text">{message}</p>
                <Button onClick={onClose} className="btn--primary">ОК</Button>
            </div>

        </div>
    )
}

export default Message;