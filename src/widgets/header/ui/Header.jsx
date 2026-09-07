import './header.scss'
import Logo from "@/shared/ui/logo";
import UserMenu from './UserMenu/UserMenu'
const Header = () => {


    return (
        <header className="header">
            <div className="header__inner container">
                <Logo />
                <div className="header-nav">
                    <UserMenu />

                </div>
            </div>

        </header>
    )

}

export default Header;