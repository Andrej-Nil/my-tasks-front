import {Field} from "@/shared/ui/field";
import {TaskCard} from "@/entities/task";
import Pagination from "../pagination/Pagination";
import './taskList.scss'

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

            <Pagination />

        </div>
    )
}

export default TasksList;