import {useLogout} from "../model/useLogout";
import logoutIcon from '@/shared/assets/icons/logout.svg';
import {ButtonDanger} from "@/shared/ui/button-danger";



const Logout = () => {

    const logoutMutation = useLogout()

    const handleClick = () => {
        logoutMutation.mutate();
    }

    return (
        <ButtonDanger
            onClick={handleClick}
            icon={logoutIcon}
            text="Выйти из аккаунта"
            error={logoutMutation.error} />

    )
}

export default Logout;