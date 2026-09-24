import {Loader} from "@/shared/ui/loader";

const FormLoader = ({text}) => {
    return(
        <div className="form-loader">
            <Loader text={text} />
        </div>
    )
}

export default FormLoader;