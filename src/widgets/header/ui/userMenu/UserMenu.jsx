import {useUser} from "@/entities/user/index.js";
import AuthMenu from "./AuthMenu.jsx";
import GuestMenu from "./GuestMenu.jsx";

const UserMenu = () => {
    const {data: user} = useUser();
    return user ? <AuthMenu user={user}/> : <GuestMenu />
}

export default UserMenu;