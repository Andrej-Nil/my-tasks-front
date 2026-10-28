import {useProfileModal} from "@/shared/model/profile-modal";
import {useSettingModal} from "@/shared/model/setting-modal/setting-modal";
import { FaGear } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { Button } from "@/shared/ui/button";
import './user-menu.scss';

const AuthMenu = () => {
    const openProfileModal = useProfileModal((state) => state.open)
    const openSettingModal = useSettingModal((state) => state.open)
    return (
        <div className="user-menu">

            <Button onClick={() => openProfileModal()} aria-label="Настройки" className="btn--base user-menu__item">
                <FaUserLarge aria-hidden="true" className="user-menu__icon" />
            </Button>

            <Button onClick={() => openSettingModal()} aria-label="Настройки" className="btn--base user-menu__item">
                <FaGear aria-hidden="true" className="user-menu__icon"/>
            </Button>

        </div>
    )
}

export default AuthMenu