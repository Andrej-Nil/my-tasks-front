import {useState} from "react";
import {useTask} from "@/entities/task";
import {Form} from "@/shared/ui/form";
import {Field, TextareaField} from "@/shared/ui/field";


const UpdateTaskForm = ({taskId}) => {
    const {data: task} = useTask(taskId);
    const [title, setTitle] = useState(task.title || '');
    const [description, setDescription] = useState(task.title || '');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        setErrors({});
        e.preventDefault();

        const validationErrors = {}

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length > 0){
            return;
        }
    }


    return (
        <Form
            noValidate
            title="Редактирование задачи"
            btnText="Сохранить"
            isLoading={null}
            loaderText={"Идет создание..."}
            error={errors?.form}
            onSubmit={handleSubmit}
        >

            <Field
                name="update_title"
                label="Название задачи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название задачи"
                autoComplete=""
                error={errors?.title}
            />

            <TextareaField
                name="update_description"
                label="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание"
                error={errors?.description}
                autoComplete=""

            />

        </Form>
    )
}


export default UpdateTaskForm;