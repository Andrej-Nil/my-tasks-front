import {Link} from "react-router-dom";
import logoImg from '@/shared/assets/image/logo.svg';
import  './logo.scss'

const Logo = () => {
    return (
        <Link to={'/'}>
            <img src={logoImg} alt="Логотоип" className="logo"/>
        </Link>
    )
}

export default Logo;