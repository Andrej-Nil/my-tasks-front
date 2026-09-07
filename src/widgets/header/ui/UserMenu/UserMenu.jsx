import {useUserStore} from "@/entities/user/index.js";
import AuthMenu from "./AuthMenu.jsx";
import GuestMenu from "./GuestMenu.jsx";

const UserMenu = () => {
    const user = useUserStore((state) => state.user);
    return user ? <AuthMenu /> : <GuestMenu />
}

export default UserMenu;