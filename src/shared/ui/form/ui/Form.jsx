import './form.scss';
import Button from "@/shared/ui/button";
import {Link} from "react-router-dom";
import FormLoader from "./FormLoader.jsx";

const Form = (props) => {
    const {
        noValidate,
        children,
        title,
        btnText,
        to,
        toText = "Перейти",
        isLoading,
        loaderText,
        error,
        onSubmit
    } = props;


    return (
        <form noValidate={noValidate} className="form" onSubmit={onSubmit}>

            {isLoading ? <FormLoader text={loaderText} onClock={onSubmit}/> : null}

            <p className="form__title">{title}</p>

            {error && <p className="form__error">{error}</p>}

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