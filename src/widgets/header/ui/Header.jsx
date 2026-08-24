import './header.scss'
import Logo from "@/shared/ui/logo";
import {GuestMenu, UserMenu} from "@/entities/user";
import {useState} from "react";
const Header = () => {
    const [user, setUser] = useState(false);


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