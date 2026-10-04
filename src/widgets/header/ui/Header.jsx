import { Logo } from "@/shared/ui/logo";
import HeaderNav from "./HeaderNav";
import UserMenu from './userMenu/UserMenu'
import {OpenCreateTaskModal} from "@/features/create-task";
import './header.scss'
const Header = () => {
    return (
        <header className="header">
            <div className="header__inner container">
                <Logo />
                <HeaderNav />

                <div className="header-menu">
                    <OpenCreateTaskModal />
                    <UserMenu />
                </div>
            </div>

        </header>
    )
}

export default Header;