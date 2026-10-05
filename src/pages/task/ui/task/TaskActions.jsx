import {Button} from "@/shared/ui/button";
import './task.scss';

const TaskActions = ({taskId, isCompleted}) => {
    return (
        <div className="task__actions">
            <Button className={isCompleted ? 'btn--success' : 'btn--outline-success'}>Выполнено</Button>
            <Button className="btn--warning">Редактировать</Button>
            <Button className="btn--danger">Удалить</Button>
        </div>
    )
}

export default TaskActions;