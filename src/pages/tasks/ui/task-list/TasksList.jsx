import {Field} from "@/shared/ui/field";
import './taskList.scss'
import {TaskCard} from "@/entities/task";

const TasksList = () => {
    return (
        <div className="tasks-block">
            <Field
                name="filterTasks"
                placeholder="Поиск по задачам"
                aria-label="Поиск по задачам"
            />
            <div className="task-list">

                <TaskCard title={'Задача номер1'} id={'1'} />


            </div>

            <div className="pagination">

            </div>
        </div>
    )
}

export default TasksList;