import './field.scss';

const Field = (props) => {
    const {
        label,
        name = "",
        type = "text",
        onChange,
        placeholder="",
        autoComplete,
        error
    } = props;

    return (
        <div className="field">
            <label className="field__label" htmlFor={name}>{label}</label>
            {error && <p className="field__error">{error}</p>}
            <input
                className="field__input"
                type={type}
                name={name}
                id={name}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete={autoComplete}
            />
        </div>
    )
}

export default Field;