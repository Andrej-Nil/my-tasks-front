import {Link} from "react-router-dom";
import './user-menu.scss';

const UserMenu = () => {
    return (
        <div className="user-menu">
            <div className="user-menu__header">
                <span className="user-icon"></span>
                {/*<img src={} className="user-icon"/>*/}
                <div className="user-name">Андрей</div>
                <span className="user-arrow">˅</span>
            </div>
            <div className="user-menu__nav">

            </div>
        </div>
    )
}

export default UserMenu