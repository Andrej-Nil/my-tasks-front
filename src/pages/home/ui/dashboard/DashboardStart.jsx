import {OpenCreateTaskModal} from "@/features/create-task";

const DashboardStart = () => {
    return (
        <div className="dashboard__start block">
            <h2 className="dashboard__title">У тебя нет задач</h2>
            <p className="dashboard__text">Давай добавим одну или несколько задач удобным для тебя способом.</p>

            <p className="dashboard__text">Нажми на кнопку "Добавить задачу +", что бы открыть форму создания.</p>
            <div className="dashboard__btn">
                <OpenCreateTaskModal />
            </div>

            <p className="dashboard__text">Или используй поле для быстрой заметки, которое находится чуть ниже.</p>
        </div>
    )
}


export default DashboardStart;