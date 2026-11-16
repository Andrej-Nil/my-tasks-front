import { MdArrowBackIosNew, MdArrowForwardIos, MdMoreHoriz  } from "react-icons/md";
import {Button} from "@/shared/ui/button";
import './pagination.scss';
const Pagination = ({totalPages, currentPage, onPageChange}) => {

    if(totalPages <= 1){
        return null;
    }


    return (
        <nav className="pagination" aria-label="Навигация по страницам задач">
            <Button
                disabled={currentPage === 1}
                onClick={()=> onPageChange(currentPage - 1)}
                className="btn--base pagination__link"
                aria-label="Предыдущая страница"

            >
                <MdArrowBackIosNew className="pagination__icon" aria-hidden="true" />
            </Button>


            <span className="pagination__number">{currentPage}</span>
            <span className="pagination__slash">/</span>
            <span className="pagination__number">{totalPages}</span>


            <Button
                disabled={currentPage === totalPages}
                onClick={()=> onPageChange(currentPage + 1)}
                className="btn--base pagination__link"
                aria-label="Следующая страница"
            >
                <MdArrowForwardIos className="pagination__icon" aria-hidden="true"/>
            </Button>
            {/*<Button className="btn btn--base pagination__link">*/}
            {/*    1*/}
            {/*</Button>*/}


            {/*<span className="pagination__link fake">*/}
            {/*    <MdMoreHoriz className="pagination__icon"/>*/}
            {/*</span>*/}

        </nav>
    )
}

export default Pagination;