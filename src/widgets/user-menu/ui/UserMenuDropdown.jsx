import {Link} from "react-router-dom";
import Logout from "@/features/logout/index.js";

const UserMenuDropdown = () => {
    return(
        <div className="user-menu__dropdown">
            <div className="user-menu__nav">
                <Link to={'/registration'} className={'user-menu__link'}>registration</Link>
                <Link to={'/login'} className={'user-menu__link'}>login</Link>
                <Link to={'/'} className={'user-menu__link'}>Ссылка</Link>
            </div>
            <Logout />
        </div>
    )
}

export default UserMenuDropdown;