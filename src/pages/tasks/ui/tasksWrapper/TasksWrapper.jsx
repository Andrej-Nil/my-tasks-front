import {CreateShortTask} from "@/features/create-short-task";
import TasksList from "../task-list/TasksList";
import './tasksWrapper.scss';
const TasksWrapper = () => {
    return (
        <div className="tasks-wrapper block">

           <CreateShortTask />

           <TasksList />

        </div>
    )
}

export default TasksWrapper;