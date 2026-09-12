import {Field} from "@/shared/ui/field";
import './taskList.scss'
const TasksList = () => {
    return (
        <div className="tasks-block">
            <Field
                name="filterTasks"
                placeholder="Поиск по задачам"
                ariaLabel="Поиск по задачам"
            />
            <div className="task-list">
                <div className="task-card">
                    <p className="task-card__title">sdfdsik sdefsdiogf</p>
                    <div className="task-card__info"></div>
                    <div className="task-card__controls"></div>
                </div>

                <div className="task-card">
                    <p className="task-card__title">sdfdsik sdefsdiogf</p>
                    <div className="task-card__info"></div>
                    <div className="task-card__controls"></div>
                </div>
                <div className="task-card">
                    <p className="task-card__title">sdfdsik sdefsdiogf</p>
                    <div className="task-card__info"></div>
                    <div className="task-card__controls"></div>
                </div>

            </div>

            <div className="pagination">

            </div>
        </div>
    )
}

export default TasksList;