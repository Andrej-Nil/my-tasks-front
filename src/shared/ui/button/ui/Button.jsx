import './button.scss';

const Button = (props) => {
    const {children, type = "button", className = ''} = props;
    return (
        <button type={type} className={`btn ${className}`}>{children}</button>
    )
}

export default Button;