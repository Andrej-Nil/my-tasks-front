import {useState} from "react";
import {TaskCard, useTasks} from "@/entities/task";
import {Loader} from "@/shared/ui/loader";
import {Field} from "@/shared/ui/field";

import Pagination from "../pagination/Pagination";
import './taskList.scss';
const TasksList = () => {
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const {data: tasks = [], isPending, isError} = useTasks();

    const tasksPerPage = 7;

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

    const startIndex = (currentPage - 1) * tasksPerPage;

    const paginatedTasks = filteredTasks.slice(
        startIndex,
        startIndex + tasksPerPage
    )

    const handlePageChange = (page) => {
        if(page <= 1) {
            setCurrentPage(1);
            return;
        }
        if (page >= totalPages){
            setCurrentPage(totalPages);
            return;
        }
        setCurrentPage(page);
    }

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        setCurrentPage(1);
    }

    const renderTasks = () => {
        if(!tasks.length) {
            return <p className="task-list__message">Нет задач</p>
        }
        if(!filteredTasks.length) {
            return <p className="task-list__message">Задачи не найдены</p>
        }
       return paginatedTasks.map((item) => {
           return <TaskCard
               key={item.id}
               title={item.title}
               id={item.id}
               description={item.description}
               isCompleted={item.is_completed}
           />
       })
    }
    return (
        <div className="tasks-block">
            <Field
                value={searchValue}
                onChange={handleSearchChange}
                name="filterTasks"
                placeholder="Поиск по задачам"
                aria-label="Поиск по задачам"
            />

            <div className="task-list">
                {isPending && <Loader text="Загружаем задачи..." />}
                {isError && <p className="task-list__message error">ошибка</p> }
                {!isPending && !isError && renderTasks()}
            </div>

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />

        </div>
    )
}

export default TasksList;