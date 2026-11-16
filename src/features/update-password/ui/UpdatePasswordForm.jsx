import {Form} from "@/shared/ui/form";
import {useRef, useState} from "react";
import {Field} from "@/shared/ui/field";
import {validationUpdatePassword, useUpdatePassword} from "@/features/update-password/model";


const UpdatePasswordForm = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errors, setErrors] =  useState({});
    const currentPasswordRef = useRef(null);

    const updatePasswordMutation = useUpdatePassword();

    const handleSubmit = (e) => {

        setErrors({});
        e.preventDefault();

        const validationErrors = validationUpdatePassword(currentPassword, newPassword);
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length > 0) return;


        updatePasswordMutation.mutate(
            {currentPassword,newPassword},
            {
                onError: (error) =>  {
                    setErrors((prev) =>({
                        ...prev,
                        form: error.userMessage
                    }))
                    setCurrentPassword('');
                    setNewPassword('');
                }
            }
        )
    }

    return (
            <Form
                noValidate
                title="Изменение пароля"
                className="block"
                btnText="Сохранить"
                onSubmit={handleSubmit}
                error={errors?.form}
                isLoading={updatePasswordMutation.isPending}
            >

                <Field
                    ref={currentPasswordRef}
                    type="password"
                    name="current-password"
                    label="Введите текущий пароль"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Текущий пароль"
                    autoComplete=""
                    error={errors?.currentPassword}
                />
                <Field
                    type="password"
                    name="new-password"
                    label="Введите новый пароль"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Новый пароль"
                    autoComplete=""
                    error={errors?.newPassword}
                />

            </Form>
    )
}

export default UpdatePasswordForm;