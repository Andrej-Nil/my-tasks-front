import Form from "@/shared/ui/form";
import Field from "@/shared/ui/field";
import {useState} from "react";
import {loginByEmail} from "@/features/login-by-email/index.js";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await loginByEmail(email, password);
            console.log(response)
        }catch (e) {
            console.log(e);
        } finally {

        }

    }
    return (
        <Form
            title="Вход"
            btnText="Войти"
            to="/registration"
            toText="Нет аккаунта? Зарегистрироваться."
            onSubmit={handleSubmit}
        >
            <Field
                type="email"
                name="email"
                label="Ваша электроная почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vasha@pochta.ru"
                autoComplete="email"
            />

            <Field
                type="password"
                name="password"
                label="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Придумайте пароль"
                autoComplete="current-password"
            />

        </Form>
    )
}


export default LoginForm;