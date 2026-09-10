import {Link} from "react-router-dom";

const ButtonLink = ({to, className, children}) => {
    return(
        <Link to={to} className={`btn ${className}`}>
            {children}
        </Link>
    )
}

export default ButtonLink