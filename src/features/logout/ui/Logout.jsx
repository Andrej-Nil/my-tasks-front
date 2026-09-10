import logoutIcon from '@/shared/assets/icons/logout.svg';
import './logout.scss';
import { logout } from "../api/logout.js";
import {useNavigate} from "react-router-dom";
import {LOGOUT_ERRORS} from "@/features/logout/model/errors";
import {API_ERRORS} from "@/shared/errors";
const Logout = () => {

    const navigate = useNavigate();
    const handleClick = async () => {
        try {
            await logout();
        } catch (error){

        } finally {
            navigate('/', { replace: true });
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