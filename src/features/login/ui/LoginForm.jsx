import {useState} from "react";
import {useLogin} from "../model/useLogin";
import {validateLoginForm} from "@/features/login/model/validation";
import {Form} from "@/shared/ui/form";
import {Field} from "@/shared/ui/field";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});



    const loginMutation = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateLoginForm(email, password);

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length > 0){
            return;
        }
        loginMutation.mutate({email, password})

    }

    return (
        <Form
            noValidate
            title="Вход"
            btnText="Войти"
            to="registration"
            toText="Нет аккаунта? Зарегистрироваться."
            isLoading={loginMutation.isPending}
            loaderText={"Загрузка профиля..."}
            error={loginMutation.error?.message || errors?.form}
            onSubmit={handleSubmit}
            className="block"
        >
            <Field
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
                label="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                autoComplete="current-password"
                error={errors?.password}
            />

        </Form>
    )
}


export default LoginForm;