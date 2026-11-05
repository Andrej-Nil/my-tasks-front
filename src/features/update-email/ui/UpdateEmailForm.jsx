
import {useEffect, useRef, useState} from "react";
import {useUser} from "@/entities/user";
import {useUpdateEmail, validationUpdateEmail} from "@/features/update-email/model";
import {Form} from "@/shared/ui/form";
import {Field} from "@/shared/ui/field";

const UpdateEmailForm = () => {
    const {data: user} = useUser();
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const nameRef = useRef(null);

    const updateEmailMutation = useUpdateEmail();

    useEffect(() => {
        nameRef.current?.focus();
    }, []);

    const handleSubmit = (e) => {
        setErrors({});
        e.preventDefault();

        const validationErrors = validationUpdateEmail(email, password);
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length > 0){
            return;
        }

        updateEmailMutation.mutate(
            {email, password},
            {
                onError: (error) => {
                    setErrors((prev) => ({
                        ...prev,
                        form: error.userMessage
                    }));
                    setPassword('');
                }
            }
        )
    }


    return (
        <Form
            noValidate
            className="block"
            title="Редактировать почту"
            btnText="Сохранить"
            onSubmit={handleSubmit}
            error={errors?.form}
            isLoading={updateEmailMutation.isPending}
            loaderText={"Сохроняем..."}


        >
            <Field
                ref={nameRef}
                type="email"
                name="email"
                label="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vasha@pochta.ru"
                autoComplete="email"
                error={errors?.email}
            />

            <Field
                type="password"
                name="password"
                label="Для подтверждения введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                autoComplete=""
                error={errors?.password}
            />

        </Form>
    )
}

export default UpdateEmailForm;

