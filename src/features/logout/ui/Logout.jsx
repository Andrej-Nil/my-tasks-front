import logoutIcon from '@/shared/assets/icons/logout.svg';
import './logout.scss';
const Logout = () => {
    return (
        <button type="button" className="logout">

            <img src={logoutIcon} alt="" className="logout__icon"/>
            <span className="logout__label">Выход</span>
        </button>
    )
}

export default Logout;