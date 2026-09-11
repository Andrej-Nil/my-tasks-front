import {useUserStore} from "@/entities/user";

import './header.scss';
import {Link} from "react-router-dom";

const HeaderNav = () => {

    const user = useUserStore((state) => state.user);

    if(!user) return null;

    return (
        <div className="header-nav">
            <Link to="tasks" className="header-nav__item">Задачи</Link>
            <Link to="tasks" className="header-nav__item">Задачи</Link>
            <Link to="tasks" className="header-nav__item">Задачи</Link>
            <Link to="tasks" className="header-nav__item">Задачи</Link>
        </div>
    )
}

export default HeaderNav;