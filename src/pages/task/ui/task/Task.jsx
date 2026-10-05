import {FaCheckSquare, FaCircle, FaExclamationTriangle} from "react-icons/fa";
import TaskActions from "./TaskActions";
import './task.scss';

const Task = ({task}) => {
    const {id, title, description, is_completed} = task;
    const color = "#002aff";
    return (
        <div className="task block">
            <div className="task__header">
                <h1 className="task__title">{title}</h1>

                <div className="task-info">
                    {is_completed &&
                        <FaCheckSquare
                            className="task-info__icon done"
                            aria-hidden="true"
                            title={"Выполнено"}/>
                    }


                {/*    <FaExclamationTriangle
                        className="task-info__icon important"
                        aria-hidden="true"
                        title={"Важная"}/>

                    <FaCircle
                        className="task-info__icon"
                        style={{color: color}}
                        aria-hidden="true"
                        title={"Выбраный цвет для выделения в списке"}/>*/}
                </div>
            </div>


            {/*<div className="task__body">*/}

            {/*</div>*/}

            {description && <p className="task__description">{description}</p>}



            {/*<div className="task__bottom">*/}
                <TaskActions tackId={id} isCompleted={is_completed}/>

            {/*</div>*/}

        </div>
    )
}


export default Task;