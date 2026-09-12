import {Field} from "@/shared/ui/field";
import {Button} from "@/shared/ui/button";
import './createTask.scss'
const CreateTask = () => {

    const name = "shortTask";
    return (
        <div className="create-task">
            <Field
                name={name}
                placeholder="Быстрая заметка"
                ariaLabel="Название заметки"
            />
            <Button ariaControls={name} className="btn--green">Создать</Button>
        </div>
    )
}

export default CreateTask;