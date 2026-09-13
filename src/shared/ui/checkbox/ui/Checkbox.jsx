import './checkbox.scss';

import {MdCheck} from "react-icons/md";

const Checkbox = ({className, ...props}) => {
    return (
        <label className={`checkbox ${className}`}>
            <input type="checkbox" className="checkbox__input" {...props} />
            <span className="checkbox__fake">
               <MdCheck className="checkbox__icon"/>
            </span>
        </label>
    )
}

export default Checkbox;