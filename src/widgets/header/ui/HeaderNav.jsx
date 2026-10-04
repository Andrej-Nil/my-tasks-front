import {useUser} from "@/entities/user";
import {Link} from "react-router-dom";
import './header.scss';
const HeaderNav = () => {

    const {data: user} = useUser();

    if(!user) return null;

    return (
        <nav className="header-nav" aria-label="Основная навигация">
            <Link to="tasks" className="header-nav__item">Задачи</Link>
        </nav>
    )
}

export default HeaderNav;