import {Form} from "@/shared/ui/form";
import {Field, TextareaField} from "@/shared/ui/field";
import {useState} from "react";

const CreateTaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});


    const handleSubmit = () => {

    }
    return (
        <Form
            noValidate
            title="Создание задачи"
            btnText="Создать"
            isLoading={null}
            loaderText={"Идет создание..."}
            error={null}
            onSubmit={handleSubmit}
        >

            <Field
                name="title"
                label="Название задачи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название задачи"
                autoComplete="title"
                error={errors?.email}
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