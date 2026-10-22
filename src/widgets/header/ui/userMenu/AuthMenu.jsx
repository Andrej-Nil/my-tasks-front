import arrowDown from '@/shared/assets/icons/arrow-down.svg';
import { MdSettings } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { Button } from "@/shared/ui/button";
import './user-menu.scss';
import {useProfileModal} from "@/shared/model/profile-modal";


const AuthMenu = () => {
    // const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    // const handleClick = () => {
    //     setIsOpenDropdown(!isOpenDropdown);
    // }
    const openProfileModal = useProfileModal((state) => state.open)
    console.log(openProfileModal)
    return (
        <div className="user-menu">

            <Button onClick={() => openProfileModal()} aria-label="Настройки" className="btn--base user-menu__item">
                <FaUserLarge aria-hidden="true" className="user-menu__icon" />
            </Button>

            <Button aria-label="Настройки" className="btn--base user-menu__item">
                <FaGear aria-hidden="true" className="user-menu__icon"/>
            </Button>



            {/*<div onClick={handleClick} className="user-menu__top">*/}
            {/*    <span className="user-menu__icon"></span>*/}
            {/*    <span className="user-menu__name">{user.name}</span>*/}
            {/*    <img src={arrowDown} alt="" className="user-menu__arrow"/>*/}
            {/*</div>*/}

            {/*{isOpenDropdown && <UserMenuDropdown />}*/}

        </div>
    )
}

export default AuthMenu