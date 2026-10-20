import {useTasks} from "@/entities/task";
import {LoaderBlock} from "@/shared/ui/loader-block";
import {ErrorBlock} from "@/shared/ui/error-block";
import DashboardContent from "./DashboardContent";
import './dashboard.scss'

const Dashboard = () => {
    const {data: tasks = [], isPending, isError} = useTasks();


    return (
        <div className="dashboard">
            <h1 className="visually-hidden">Главная</h1>
            {isPending && <LoaderBlock />}
            {isError && <ErrorBlock
                text="Произошла ошибка!"
                onClick={() => refetch()}
                textOnClickBtn="Повторить"
            /> }

            {!isPending && !isError && <DashboardContent tasks={tasks}/>}
        </div>
    )
}

export default Dashboard;