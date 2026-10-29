import {Button} from "@/shared/ui/button";
import './button-banger.scss';


const ButtonDanger = ({onClick, icon, text, error }) => {
    return (
        <div className="button-danger">
            <Button onClick={onClick} className="btn--base button-danger__btn">
                <img src={icon} alt="" className="button-danger__icon"/>
                <span className="button-danger__label">{text}</span>
            </Button>

            {
                error?.userMessage &&
                <p className="button-danger__error"> {error?.userMessage}</p>
            }
        </div>
    )
}

export default ButtonDanger;