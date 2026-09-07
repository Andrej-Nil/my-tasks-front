import logoutIcon from '@/shared/assets/icons/logout.svg';
import './logout.scss';
import { logout } from "../model/logout.js";
import {useNavigate} from "react-router-dom";
const Logout = () => {

    const navigate = useNavigate();
    const handleClick = async () => {
        try {
            await logout();
            // navigate('/', { replace: true });
        } catch (error){
            console.log(error)
        } finally {

        }
    }

    return (
        <button onClick={handleClick} type="button" className="logout">
            <img src={logoutIcon} alt="" className="logout__icon"/>
            <span className="logout__label">Выход</span>
        </button>
    )
}

export default Logout;