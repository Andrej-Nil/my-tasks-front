import {Link} from "react-router-dom";
import { MdArrowBackIosNew, MdArrowForwardIos, MdMoreHoriz  } from "react-icons/md";
import './pagination.scss';
const Pagination = () => {
    return (
        <div className="pagination">
            <Link to={"/"} className="pagination__link">
                <MdArrowBackIosNew className="pagination__icon" />
            </Link>

            <Link to={"/"} className="pagination__link">
                1
            </Link>

            <Link to={"/"} className="pagination__link active">
                2
            </Link>

            <span className="pagination__link fake">
                <MdMoreHoriz className="pagination__icon"/>
            </span>

            <Link to={"/"} className="pagination__link">
                9
            </Link>
            <Link to={"/"} className="pagination__link">
                10
            </Link>

            <Link to={"/"} className="pagination__link">
                <MdArrowForwardIos className="pagination__icon" />
            </Link>
        </div>
    )
}

export default Pagination;