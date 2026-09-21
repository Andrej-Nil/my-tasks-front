import {useLogout} from "../model/useLogout";
import logoutIcon from '@/shared/assets/icons/logout.svg';
import './logout.scss';



const Logout = () => {

    const logoutMutation = useLogout()

    const handleClick = () => {
        logoutMutation.mutate();
    }

    return (
        <div className="logout">
            <button onClick={handleClick} type="button" className="logout__btn">
                <img src={logoutIcon} alt="" className="logout__icon"/>
                <span className="logout__label">Выход</span>
            </button>

            {
                logoutMutation.error?.message
                ? <p className="logout__error">
                    {logoutMutation.error?.message}</p> : ''
            }
        </div>

    )
}

export default Logout;