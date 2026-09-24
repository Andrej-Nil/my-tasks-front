import {Link} from "react-router-dom";
import {Checkbox} from "@/shared/ui/checkbox";
import {Button} from "@/shared/ui/button";
import { MdDelete} from 'react-icons/md';
import './taskCard.scss';


const TaskCard = ({id, title}) => {
    return (
        <div className="task-card">


            <Checkbox
                className="task-card__checkbox"
                aria-label={`Отметить задачу ${title} как выполнена`}
            />

            <div className="task-card__body">
                <Link to={`task/${id}`} className="task-card__title">{title}</Link>
                <div className="task-card__info"></div>
            </div>

            <div className="task-card__controls">

                 <Button className='btn--base task-card__btn' aria-label={`Удалить задачу ${title}`}>
                     <MdDelete className="task-card__icon" aria-hidden="true" />
                 </Button>

            </div>
        </div>
    )
}

export default TaskCard;