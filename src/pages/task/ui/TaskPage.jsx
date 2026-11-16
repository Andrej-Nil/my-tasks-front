import {useParams} from "react-router-dom";
import {useTask} from "@/entities/task";
import Task from "./task/Task";
import {Loader} from "@/shared/ui/loader";
import {ErrorBlock} from "@/shared/ui/error-block";


const TaskPage = () => {

    const { taskId } = useParams();
    const id = Number(taskId);
    const {data: task, isPending, isError, error, refetch} = useTask(id);

    const renderError = () => {
            const status = error?.response?.status;

            if(status === 404){
                return <ErrorBlock
                    title="404"
                    text="Задача не найдена или была удалена"
                    to={'/'}
                    textTo="На гдавную"
                    onClick={() => refetch()}
                    textOnClickBtn="Повторить"
                />

            }

            if(status === 500){
                return <ErrorBlock
                    title="500"
                    text="Сервер не доступен"
                    to={'/'}
                    textTo="На гдавную"
                    onClick={() => refetch()}
                    textOnClickBtn="Повторить"
                />
            }

            return <ErrorBlock
                text="Произошла ошибка"
                to={'/'}
                textTo="На гдавную"
                onClick={() => refetch()}
                textOnClickBtn="Повторить"
            />
    }

    return(
        <div className="container middle">

            {isPending && <Loader className="block" text={'Загружаем задачу...'}/>}
            {isError && renderError()}
            {!isPending && !isError && <Task task={task}/>}

        </div>
    )
}


export default TaskPage;