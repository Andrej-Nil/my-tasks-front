import {UserMenuDropdown} from "@/widgets/user-menu";
import arrowDown from '@/shared/assets/icons/arrow-down.svg';
import './user-menu.scss';
import {useState} from "react";

const UserMenu = () => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const handleClick = () => {
        setIsOpenDropdown(!isOpenDropdown);
    }
    return (
        <div className="user-menu">
            <div onClick={handleClick} className="user-menu__top">
                <span className="user-menu__icon"></span>
                <span className="user-menu__name">Андрей</span>
                <img src={arrowDown} alt="" className="user-menu__arrow"/>
            </div>

            {isOpenDropdown && <UserMenuDropdown />}

        </div>
    )
}

export default UserMenu