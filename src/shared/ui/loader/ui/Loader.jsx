import {Spinner} from "@/shared/ui/spinner";
import './loader.scss';
const Loader = ({text}) => {
    return (
        <div className="loader">
            <Spinner />
            <p className="loader__text">{text}</p>
        </div>
    )
}

export default Loader;