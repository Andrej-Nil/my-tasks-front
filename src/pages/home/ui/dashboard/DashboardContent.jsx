import {CreateShortTask} from "@/features/create-short-task";
import DashboardStart from "./DashboardStart";
import {TaskList} from "@/shared/ui/task-list";
import {ButtonLink} from "@/shared/ui/button";
import {Analytics} from "@/widgets/analytics";

const DashboardContent = ({tasks}) => {
    const filteredTasks = tasks.filter((task) => !task.is_completed);
    const viewTasks = filteredTasks.slice(0, 5);
    return (
        <div className='dashboard__wrapper container small'>


            {tasks.length ? null : <DashboardStart />}
            <Analytics />
            <div className="dashboard__tasks block">

                <CreateShortTask />
                <div className="dashboard__list">
                    <p className="dashboard__text">Пять последних активных, которые были добавлены</p>
                    <TaskList
                        tasks={viewTasks}
                        emptyListMessage={"У вас нет активных задач"}
                    />

                    <ButtonLink to="tasks" className="btn--primary">
                        Перейти ко всем задачам
                    </ButtonLink>
                </div>

            </div>

        </div>
    )
}

export default DashboardContent;