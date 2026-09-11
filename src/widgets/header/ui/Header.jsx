import './header.scss'
import { Logo } from "@/shared/ui/logo";
import HeaderNav from "./HeaderNav";
import UserMenu from './userMenu/UserMenu'
const Header = () => {
    return (
        <header className="header">
            <div className="header__inner container">
                <Logo />
                <HeaderNav />

                <div className="header-menu">
                    <UserMenu />
                </div>
            </div>

        </header>
    )

}

export default Header;