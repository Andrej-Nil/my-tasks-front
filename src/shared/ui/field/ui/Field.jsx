import './field.scss';

const Field = (props) => {
    const {label, name = "", type = "text", onChange,  placeholder="", autoComplete} = props;
    return (
        <div className="field">
            <label className="field__label" htmlFor={name}>{label}</label>
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