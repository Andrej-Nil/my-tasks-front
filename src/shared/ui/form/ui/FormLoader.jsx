import FormSpinner from "./FormSpinner.jsx";

const FormLoader = ({onClock}) => {
    return(
        <div onClick={onClock} className="form-loader">
            <FormSpinner />
        </div>
    )
}

export default FormLoader;