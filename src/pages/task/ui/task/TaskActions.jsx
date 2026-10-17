import {useNavigate} from "react-router-dom";
import {useUpdateTaskModal} from "@/shared/model/update-task-modal";
import {useToggleTaskCompletion} from "@/features/toggle-task-completion";
import {useDeleteTask} from "@/features/delete-task";
import {Button} from "@/shared/ui/button";
import {useErrorModal} from "@/shared/model/error-modal";
import './task.scss';




const TaskActions = ({taskId, isCompleted}) => {
    const open = useErrorModal((state) => state.open);

    const navigate = useNavigate();
        const toggleTaskCompletion = useToggleTaskCompletion();
        const deleteTask = useDeleteTask();
        const openUpdateTaskModal = useUpdateTaskModal((state) => state.open)


    const handleToggleComplete = () => {
        const newStatusIsCompleted = !isCompleted;

        toggleTaskCompletion.mutate(
            {taskId, isCompleted: newStatusIsCompleted},
            {
                onError: (error) => {
                    const title = error.status ? `Ошибка ${error.status}` : 'Ошибка';
                    const status = error.status ? error.status : null;

                    open(status , title, error.userMessage);
                }
            }
            );
    }

    const handleOpenUpdateTaskModal = () => {
        openUpdateTaskModal(taskId);
    }

    const handleDelete = () => {
        deleteTask.mutate(taskId, {
            onSuccess: () => {
                navigate('/tasks', {replace: true});
            },

            onError: (error) => {
                const title = error.status ? `Ошибка ${error.status}` : 'Ошибка';
                const status = error.status ? error.status : null;

                open(status,title, error.userMessage);
            }
        });
    }

    const isPending = toggleTaskCompletion.isPending || deleteTask.isPending

    return (
        <div className="task__actions">
            <Button disabled={isPending} onClick={handleToggleComplete} className={isCompleted ? 'btn--success' : 'btn--outline-success'}>Выполнено</Button>
            <Button disabled={isPending} onClick={handleOpenUpdateTaskModal} className="btn--warning">Редактировать</Button>
            <Button disabled={isPending} onClick={handleDelete} className="btn--danger">Удалить</Button>
        </div>
    )
}

export default TaskActions;