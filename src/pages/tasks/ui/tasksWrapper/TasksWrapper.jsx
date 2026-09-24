
import {CreateTask} from "@/features/create-short-task";
import TasksList from "../task-list/TasksList";
import './tasksWrapper.scss';
const TasksWrapper = () => {
    return (
        <div className="tasks-wrapper block">
            {/*<p>Задачи</p>*/}
           <CreateTask />


           <TasksList />



        </div>
    )
}

export default TasksWrapper;