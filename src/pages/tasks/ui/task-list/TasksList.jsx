import {TaskCard, useTasks} from "@/entities/task";
import {Loader} from "@/shared/ui/loader";
import {Field} from "@/shared/ui/field";
import './taskList.scss'
const TasksList = () => {

    const {data: tasks, isPending, isError} = useTasks();
    const renderTasks = () => {

        if(!tasks) return null;

        if(!tasks.length) {
            return <p className="task-list__message">Нет задач</p>
        }

       if(tasks){
           return tasks.map((item) => {
               return <TaskCard key={item.id} title={item.title} id={item.id} />
           })
       }
    }
    return (
        <div className="tasks-block">
            <Field
                name="filterTasks"
                placeholder="Поиск по задачам"
                aria-label="Поиск по задачам"
            />



            <div className="task-list">
                {isPending && <Loader text="Загружаем задачи..." />}
                {isError && <p className="task-list__message error">ошибка</p> }
                {renderTasks()}
            {/*    <TaskCard title={'Задача номер1'} id={'1'} />*/}
            </div>

            {/*<Pagination />*/}

        </div>
    )
}

export default TasksList;