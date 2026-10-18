import './field.scss';

const Field = (props) => {
    const {
        label,
        isHideLabel,
        name,
        type = "text",
        error,
        ...inputProps

    } = props;

    return (
        <div className="field">
            {label && <label className="field__label" htmlFor={name}>{label}</label>}
            {error && <p className="field__error">{error}</p>}
            <input
                className="field__input"
                type={type}
                name={name}
                id={name}
                {...inputProps}
            />
        </div>
    )
}

export default Field;