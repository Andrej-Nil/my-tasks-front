import './field.scss';

const TextareaField = (props) => {
    const {
        label,
        name = "",
        type = "text",
        onChange,
        value,
        placeholder="",
        autoComplete,
        error
    } = props;

    return (
        <div className="field">
            {/*<label className="field__label" htmlFor={name}>{label}</label>*/}
            {error && <p className="field__error">{error}</p>}
            <textarea
                className="field__input"

            ></textarea>
            {/*<input*/}
            {/*    className="field__input"*/}
            {/*    type={type}*/}
            {/*    name={name}*/}
            {/*    id={name}*/}
            {/*    value={value}*/}
            {/*    onChange={onChange}*/}
            {/*    placeholder={placeholder}*/}
            {/*    autoComplete={autoComplete}*/}
            {/*/>*/}
        </div>
    )
}

export default TextareaField;