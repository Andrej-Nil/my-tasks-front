import {Loader} from "@/shared/ui/loader";
import  './loader-block.scss';
const LoaderBlock = () => {
    return (
        <div className="container small loader-block block">
            <Loader text="Загрузка..."/>
        </div>
    )
}

export default LoaderBlock;