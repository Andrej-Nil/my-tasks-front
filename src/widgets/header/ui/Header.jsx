import './header.scss'
import Logo from "@/shared/ui/logo";
import {GuestMenu, UserMenu} from "@/widgets/user-menu";
import {useUserStore} from "@/entities/user";
const Header = () => {
    const user = useUserStore((state) => state.user);

    return (
        <header className="header">
            <div className="header__inner container">
                <Logo />
                <div className="header-nav">
                    {user ? <UserMenu /> : <GuestMenu />}
                </div>
            </div>

        </header>
    )

}

export default Header;