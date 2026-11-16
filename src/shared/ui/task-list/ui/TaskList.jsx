import {TaskCard} from "@/entities/task";
import "./task-list.scss";
const TaskList = ({tasks, emptyListMessage = "Нет задач"}) => {

    if(!tasks.length) {
        return <p className="task-list__message">{emptyListMessage}</p>
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