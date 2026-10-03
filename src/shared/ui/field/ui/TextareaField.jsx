import './field.scss';

const TextareaField = (props) => {
    const {
        label,
        name = "",
        onChange,
        value,
        placeholder = "",
        autoComplete,
        error
    } = props;

    return (
        <div className="field">
            <label className="field__label" htmlFor={name}>{label}</label>
            {error && <p className="field__error">{error}</p>}
            <textarea
                className="field__input field__input--textarea"
                name={name}
                id={name}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
            ></textarea>

        </div>
    )
}

export default TextareaField;