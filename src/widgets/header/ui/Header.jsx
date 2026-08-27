import './header.scss'
import Logo from "@/shared/ui/logo";
import {GuestMenu, UserMenu, useUserStore} from "@/entities/user";
import {useEffect, useState} from "react";
const Header = () => {
    const user = useUserStore((state) => state.user);
    const isAuthChecked = useUserStore((state) => state.isAuthChecked);
    const checkAuth = useUserStore((state) => state.checkAuth);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);


    return (
        <header className="header">
            <div className="header__inner container">
                <Logo />
                <div className="header-nav">
                    {!isAuthChecked && 'жди..'}
                    {user ? <UserMenu /> : <GuestMenu />}
                </div>
            </div>

        </header>
    )

}

export default Header;