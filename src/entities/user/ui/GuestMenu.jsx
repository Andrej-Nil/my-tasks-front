import {Link} from "react-router-dom";
import './user-menu.scss';

const GuestMenu = () => {
    return (
        <div className="guest-menu">
            <Link to="/login" className="guest-menu__link">Вход</Link>
            <Link to="/registration" className="guest-menu__link">Регистрация</Link>
        </div>
    )
}

export default GuestMenu