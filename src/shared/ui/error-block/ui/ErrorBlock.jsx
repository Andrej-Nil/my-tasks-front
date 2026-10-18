
import {Button, ButtonLink} from "@/shared/ui/button";
import './error-block.scss';
const ErrorBlock = ({title, text, to, textTo, onClick, textOnClickBtn}) => {
    return (
        <div className="container small">
            <div className="block error-block">
                {title && <h1 className="error-block__title">{title}</h1>}
                {text && <p className="error-block__text">{text}</p>}
                <div className="error-block__actions">
                    {to && <ButtonLink to={to} className="btn--success">{textTo}</ButtonLink>}
                    {onClick && <Button onClick={onClick} className={"btn--primary"}>{textOnClickBtn}</Button>}
                </div>

            </div>
        </div>
    )
}

export default ErrorBlock;