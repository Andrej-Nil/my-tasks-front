import {MdCheck} from "react-icons/md";
import './checkbox.scss';
const Checkbox = ({className, isChecked, title, ...props}) => {

    return (
        <label className={`checkbox ${className}`} title={title}>
            <input type="checkbox" className="checkbox__input" checked={isChecked} {...props}  />
                <span className="checkbox__fake">
                   {isChecked && <MdCheck className="checkbox__icon" aria-hidden="true"/>}
                </span>

        </label>
    )
}

export default Checkbox;