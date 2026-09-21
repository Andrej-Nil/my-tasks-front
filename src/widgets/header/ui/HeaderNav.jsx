import {useUser} from "@/entities/user";

import './header.scss';
import {Link} from "react-router-dom";

const HeaderNav = () => {

    const {data: user} = useUser();

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