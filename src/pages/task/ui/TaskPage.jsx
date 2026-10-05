import {useParams} from "react-router-dom";
import {useTask} from "@/entities/task";
import Task from "./task/Task";
import {Loader} from "@/shared/ui/loader";


const TaskPage = () => {

    const { taskId } = useParams();
    const {data: task, isPending, isError} = useTask(taskId);


    return(
        <div className="container middle">

            {isPending && <Loader className="block" text={'Загружаем задачу...'}/>}
            {isError && <p>Error</p>}
            {!isPending && !isError && <Task task={task}/>}

        </div>
    )
}


export default TaskPage;