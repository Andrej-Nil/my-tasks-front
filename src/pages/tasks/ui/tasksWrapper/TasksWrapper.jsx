import {CreateShortTask} from "@/features/create-short-task";
import Tasks from "../tasks/Tasks";
import './tasksWrapper.scss';
const TasksWrapper = () => {
    return (
        <div className="tasks-wrapper block">

           <CreateShortTask />

           <Tasks />

        </div>
    )
}

export default TasksWrapper;