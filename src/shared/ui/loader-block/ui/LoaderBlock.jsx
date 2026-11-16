import {Loader} from "@/shared/ui/loader";
import  './loader-block.scss';
const LoaderBlock = () => {
    return (
        <div className="container small">
            <div className="loader-block block">
                <Loader text="Загрузка..."/>
            </div>

        </div>
    )
}

export default LoaderBlock;