import {Spinner} from "@/shared/ui/spinner";

const FormLoader = ({text}) => {
    return(
        <div className="form-loader">
            <div className="form-loader__inner">
                <Spinner />
                <p className="form-loader__text" >{text}</p>
            </div>

        </div>
    )
}

export default FormLoader;