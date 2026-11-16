import {useUser} from "@/entities/user";
import AuthMenu from "./AuthMenu";
import GuestMenu from "./GuestMenu";

const UserMenu = () => {
    const {data: user, isPending} = useUser();
    if(isPending) return null;

    return user ? <AuthMenu user={user}/> : <GuestMenu />
}

export default UserMenu;