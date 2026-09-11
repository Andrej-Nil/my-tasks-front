
import './tasksWrapper.scss';
import {CreateTask} from "@/features/create-task";

const TasksWrapper = () => {
    return (
        <div className="tasks-wrapper block">
            {/*<p>Задачи</p>*/}
           <CreateTask />
            <div className="tasks-search">
            </div>
            <div className="tasks-delete-all">

            </div>

            <div className="tasks-list">

            </div>
        </div>
    )
}

export default TasksWrapper;