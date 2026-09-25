import {useState} from "react";
import {useCreateShortTask} from "../model/useCreateShortTask";
import {Field} from "@/shared/ui/field";
import {Button} from "@/shared/ui/button";
import {validationShortTask} from "../model/validation";
import './createTask.scss'

const CreateShortTask = () => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const createMutation = useCreateShortTask();

    const handleChange = (e) => {
        setTitle(e.target.value);
        setError('');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        const validationErrors = validationShortTask(title);
        setError(validationErrors);
        if(validationErrors) return;


        createMutation.mutate(
            title,
            {
                onSuccess: () => {
                    setTitle('');
                },
                onError: (error) => {
                    setError(error?.userMessage);
                }
            })

    }

    return (
        <form onSubmit={handleSubmit} className="create-task">
            <Field
                value={title}
                name="title"
                error={error}
                placeholder="Быстрая заметка"
                aria-label="Название заметки"
                onChange={handleChange}
            />
            <Button disabled={createMutation.isPending} type="submit" className="btn--green">Создать</Button>
        </form>
    )
}

export default CreateShortTask;