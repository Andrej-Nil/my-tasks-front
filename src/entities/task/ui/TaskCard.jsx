import {Link} from "react-router-dom";
import {Checkbox} from "@/shared/ui/checkbox";

import {useDeleteTask} from "../model/useDeleteTask";
import {Button} from "@/shared/ui/button";
import {MdDelete, MdClose} from "react-icons/md";
import './taskCard.scss';

const TaskCard = (props) => {
    const {id, title, description, isCompleted} = props;

    const deleteMutation = useDeleteTask();
    const handleDelete = () =>{
        if(deleteMutation.isPending) return;

        deleteMutation.mutate(id);
    }
    return (
        <div className="task-card">
            { deleteMutation.isPending && <div className="task-card__overlay"></div> }

            { deleteMutation.isError && (
                <div className="task-card-error" role="alert" aria-live="assertive">
                    <p className="task-card-error__message">sdfvsdfsdsdfdsf</p>
                    <Button onClick={deleteMutation.reset} className="btn btn--base task-card__btn" aria-label={`закрыть сообщение о ошибке задачи ${title}`}>
                        <MdClose aria-hidden="true" className="task-card-error__icon" />
                    </Button>
                </div>
                )
            }

            <Checkbox
                className="task-card__checkbox"
                aria-label={`Отметить задачу ${title} как выполнена`}
            />

            <div className="task-card__body">
                <Link to={`task/${id}`} className="task-card__title">{title}</Link>
                <div className="task-card__info"></div>
            </div>

            <div className="task-card__controls">
                <Button onClick={handleDelete} className='btn btn--base task-card__btn' aria-label={`Удалить задачу ${title}`}>
                    <MdDelete className="task-card__delete" aria-hidden="true" />
                </Button>
            </div>
        </div>
    )
}

export default TaskCard;