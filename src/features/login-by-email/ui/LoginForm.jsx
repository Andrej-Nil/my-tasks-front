import {useState} from "react";
import {loginByEmail} from "@/features/login-by-email/index.js";

import {Form} from "@/shared/ui/form";
import {Field} from "@/shared/ui/field";
import {validateLoginForm} from "@/features/login-by-email/model/validation";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        if(isLoading){
            return;
        }

        const errors = validateLoginForm(email, password);

        setErrors(errors);

        if(Object.keys(errors).length > 0){
            return;
        }

        setIsLoading(true);
        try{
            const response = await loginByEmail(email, password);
            console.log(response);
        }catch (error) {
            console.log(error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <Form
            title="Вход"
            btnText="Войти"
            to="/registration"
            toText="Нет аккаунта? Зарегистрироваться."
            isLoading={isLoading}
            loaderText={"Загрузка профиля..."}
            onSubmit={handleSubmit}
        >
            <Field
                // type="email"
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