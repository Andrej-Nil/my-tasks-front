import { useState } from "react";
import {Form} from "@/shared/ui/form";
import {Field, TextareaField} from "@/shared/ui/field";
import './createTask.scss';


const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('sdkljfjsd');
    const [errors, setErrors] = useState({});


    const handleSubmit = () => {

    }
    return (
        <div className="create-task">
            <div className="create-task__bg"></div>
            <div className="container middle">
                <div className="create-task__inner block">
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
                </div>

            </div>
        </div>
    )
}

export default CreateTask;