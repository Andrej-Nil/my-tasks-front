import {useUser} from "@/entities/user";
import {useCreateTaskModal} from "@/shared/model/create-task-modal";
import { MdAdd } from "react-icons/md";
import {Button} from "@/shared/ui/button";
import './openCreateTaskModal.scss';

const OpenCreateTaskModal = () => {
    const {data: user} = useUser();
    const open = useCreateTaskModal((state) => state.open);
    if(!user) return null;

    return (
        <Button
            onClick={open}
            className={'open-create-task'}
        >
            <span className="open-create-task__name">Добавить задачу</span>
            <MdAdd className="open-create-task__plus" aria-hidden="true"/>
        </Button>

    )
}

export default OpenCreateTaskModal;