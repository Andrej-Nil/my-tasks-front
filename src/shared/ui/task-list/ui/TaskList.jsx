import {TaskCard} from "@/entities/task";
import "./task-list.scss";
const TaskList = ({tasks}) => {

    if(!tasks.length) {
        return <p className="task-list__message">Нет задач</p>
    }

    return (
        <div className="task-list">
            {
                tasks.map((item) => {
                    return <TaskCard
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        description={item.description}
                        isCompleted={item.is_completed}
                    />
                })
            }

        </div>
    )
}

export default TaskList;