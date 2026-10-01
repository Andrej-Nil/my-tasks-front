import './button.scss';

const Button = (props) => {
    const {
        children,
        type = "button",
        className = '',
        ...btnProps
    } = props;
    return (
        <button type={type} className={`btn ${className}`} {...btnProps}>{children}</button>
    )
}

export default Button;