import {Form} from "@/shared/ui/form";
import {Field, TextareaField} from "@/shared/ui/field";
import {useState} from "react";
import {useCreateTask} from "../model/useCreateTask";
import {validationCreateTask} from "../model/validation";

const CreateTaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const createMutation = useCreateTask();

    const handleSubmit = (e) => {
        setErrors({});
        e.preventDefault();

        const validationErrors = validationCreateTask(title);
        setErrors(validationErrors);
        console.log(validationErrors)
        if(Object.keys(validationErrors).length > 0){
            return;
        }

        createMutation.mutate(
            {title, description},
            {
                onError: (error) => {
                    setErrors((prev) => ({
                        ...prev,
                        form: error?.userMessage
                    }));
                }
            }
        )
    }
    return (
        <Form
            noValidate
            title="Создание задачи"
            btnText="Создать"
            isLoading={null}
            loaderText={"Идет создание..."}
            error={errors?.form}
            onSubmit={handleSubmit}
        >

            <Field
                name="title"
                label="Название задачи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название задачи"
                autoComplete="title"
                error={errors?.title}
            />

            <TextareaField
                name="description"
                label="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание"
                error={errors?.description}
                autoComplete="description"

            />
        </Form>
    )
}

export default CreateTaskForm;