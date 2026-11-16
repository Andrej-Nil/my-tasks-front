import {useEffect, useRef, useState} from "react";
import {Form} from "@/shared/ui/form";
import {Field} from "@/shared/ui/field";
import {useDeleteProfile, validationDeleteUser} from "@/features/delete-profile/model";


const DeleteProfileForm = () => {

    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const passwordRef = useRef(null);

    useEffect(() => {
        passwordRef.current?.focus()
    }, [])


    const deleteUserMutation = useDeleteProfile();
    const text = "Внимание! Если вы удалите профиль, все ваши данные также будут удалены";

    const handleSubmit = (e) => {
        setErrors({});
        e.preventDefault();

        const validationErrors = validationDeleteUser(password);
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length > 0) return;

        deleteUserMutation.mutate(
            password,
            {
                onError: (error) => {
                    setErrors((prev)=>({
                        ...prev,
                        form: error.userMessage
                    }))
                    setPassword('');
                }
            }
        )
    }


    return (
        <Form
            title="Удалить профиль"
            text={text}
            className="block"
            onSubmit={handleSubmit}
            error={errors?.form}
            btnText="Удалить"
            isLoading={deleteUserMutation.isPending}
            loaderText={"Идет удаление..."}
        >
            <Field
                ref={passwordRef}
                type="password"
                name="password"
                label="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                autoComplete=""
                error={errors?.password}
            />
        </Form>
    )
}

export default DeleteProfileForm;