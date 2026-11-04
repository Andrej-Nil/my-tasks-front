import {useEffect, useRef, useState} from "react";
import {useUser} from "@/entities/user";
import {Form} from "@/shared/ui/form";
import {Field} from "@/shared/ui/field";

import {useUpdateName, validationUpdateUserName} from "@/features/update-name/model";

const UpdateNameForm = () => {
    const {data: user} = useUser();
    const [name, setName] = useState(user.name);
    const [errors, setErrors] = useState({});
    const nameRef = useRef(null);

    const updateNameMutation = useUpdateName();

    useEffect(() => {
        nameRef.current?.focus();
    }, []);

    const handleSubmit = (e) => {
        setErrors({});
        e.preventDefault();

        const validationErrors = validationUpdateUserName(name);


        if(Object.keys(validationErrors).length > 0){
            return;
        }

        updateNameMutation.mutate(
            name,
            {
                onError: (error) => {
                    setErrors((prev) => ({
                        ...prev,
                        form: error?.userMessage
                    }))
                },
            });
    }
    console.log(errors?.form)
    return (
        <Form
            noValidate
            className="block"
            btnText="Сохранить"
            title="Редактировать имя"
            onSubmit={handleSubmit}
            error={errors?.form}
            isLoading={updateNameMutation.isPending}
            loaderText="Сохроняем..."
        >

            <Field
                ref={nameRef}
                name="name"
                value={name}
                aria-label="Редактирование имяни"
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                autoComplete="name"
                error={errors?.name}
            />

        </Form>
    )
}

export default UpdateNameForm;