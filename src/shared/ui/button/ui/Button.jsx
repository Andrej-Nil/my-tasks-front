import './button.scss';

const Button = (props) => {
    const {children, type = "button", className = '', ariaControls} = props;
    return (
        <button type={type} className={`btn ${className}`} aria-controls={ariaControls}>{children}</button>
    )
}

export default Button;