import './form.scss';
import Button from "@/shared/ui/button";
import {Link} from "react-router-dom";

const Form = (props) => {
    const {children, title, btnText, to, toText = "Перейти", onSubmit} = props;
    return (
        <form className="form" onSubmit={onSubmit}>

            <p className="form__title">{title}</p>

            <div className="form__body">
                {children}
            </div>

            <div className="form__bottom">
                <Button
                    type="submit"
                    className="btn--blue"
                >
                    {btnText}
                </Button>

                {to && <Link to={to} className="form__link">{toText}</Link>}
            </div>
        </form>
    )
}

export default Form;