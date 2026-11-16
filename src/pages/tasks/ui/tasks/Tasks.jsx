import {useState} from "react";
import {useTasks} from "@/entities/task";
import {TaskList} from "@/shared/ui/task-list";
import {Loader} from "@/shared/ui/loader";
import {Field} from "@/shared/ui/field";
import Pagination from "../pagination/Pagination";
import './tasks.scss';

const Tasks = () => {
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

        if(!filteredTasks.length) {
            return <p className="tasks__message">Задачи не найдены</p>
        }
       return (
           <TaskList tasks={paginatedTasks} />
       )
    }
    return (
        <div className="tasks">
            <Field
                value={searchValue}
                onChange={handleSearchChange}
                name="filterTasks"
                placeholder="Поиск по задачам"
                aria-label="Поиск по задачам"
            />

            <div className="tasks__block">
                {isPending && <Loader text="Загружаем задачи..." />}
                {isError && <p className="tasks__message error">ошибка</p> }
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

export default Tasks;