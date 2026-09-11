import {Field} from "@/shared/ui/field";
import {Button} from "@/shared/ui/button";
import './createTask.scss'
const CreateTask = () => {
    return (
        <div className="create-task">
            <Field
                placeholder="Быстрая заметка"
            />
            <Button className="btn--green">Создать</Button>
        </div>
    )
}

export default CreateTask;