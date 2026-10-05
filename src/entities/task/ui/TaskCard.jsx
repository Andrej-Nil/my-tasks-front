import {Link} from "react-router-dom";
import {useToggleTaskCompletion} from "@/features/toggle-task-completion";
import {useDeleteTask} from "@/features/delete-task";
import {Checkbox} from "@/shared/ui/checkbox";
import {Button} from "@/shared/ui/button";
import {MdDelete, MdOutlineDescription} from "react-icons/md";
import TackCardError from "@/entities/task/ui/TackCardError";
import './taskCard.scss';
const TaskCard = (props) => {
    const {id, title, description, isCompleted} = props;
    const deleteMutation = useDeleteTask();
    const toggleTasksCompletion = useToggleTaskCompletion();
    const handleDelete = () =>{
        deleteMutation.mutate(id);
    }

    const handleChange = (e) => {
        toggleTasksCompletion.mutate({taskId: id, isCompleted: e.target.checked});
    }
    const isPending = toggleTasksCompletion.isPending || deleteMutation.isPending;
    return (
        <div className="task-card">
            { deleteMutation.isPending && <div className="task-card__overlay"></div> }

            { deleteMutation.isError &&
                <TackCardError
                    message={deleteMutation.error?.userMessage}
                    onClose={deleteMutation.reset}
                    title={title} />
            }

            { toggleTasksCompletion.isError &&
                <TackCardError
                    message={toggleTasksCompletion.error?.userMessage}
                    onClose={toggleTasksCompletion.reset}
                    title={title} />
            }

            <Checkbox
                isChecked={isCompleted}
                onChange={handleChange}
                disabled={isPending}
                className="task-card__checkbox"
                aria-label={`Статус задачи: ${title}`}
                title="Отметка выполнено"
            />


                <Link to={`/tasks/${id}`} className="task-card__body">
                    <span className="task-card__title">{title}</span>
                    {
                        description &&
                        <MdOutlineDescription
                            className="task-card__icon"
                            aria-hidden="true"
                            title="Задача содержит описание" />
                    }

                </Link>

            <div className="task-card__controls">
                <Button
                    onClick={handleDelete}
                    className='btn--base task-card__btn'
                    aria-label={`Удалить задачу ${title}`}
                    disabled={isPending}
                    title={"Удалить задачу"}
                >
                    <MdDelete className="task-card__delete" aria-hidden="true" />
                </Button>
            </div>
        </div>
    )
}

export default TaskCard;