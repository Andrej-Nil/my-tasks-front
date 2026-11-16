import {Spinner} from "@/shared/ui/spinner";
import './loader.scss';
const Loader = ({className, text}) => {
    return (
        <div className={`loader ${className ? className : ''}`}>
            <Spinner />
            <p className="loader__text">{text}</p>
        </div>
    )
}

export default Loader;