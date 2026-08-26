import './field.scss';

const Field = (props) => {
    const {label, name = "", type = "text",  placeholder=""} = props;
    return (
        <div className="field">
            <label className="field__label" htmlFor={name}>{label}</label>
            <input
                className="field__input"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Field;