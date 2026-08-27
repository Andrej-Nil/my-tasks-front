import Form from "@/shared/ui/form";
import Field from "@/shared/ui/field";
import {useState} from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Form
            title="Вход"
            btnText="Войти"
            to="/registration"
            toText="Нет аккаунта? Зарегистрироваться."
        >
            <Field
                type="email"
                name="email"
                label="Ваша электроная почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vasha@pochta.ru"
            />

            <Field
                type="password"
                name="password"
                label="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Придумайте пароль"
            />

        </Form>
    )
}


export default LoginForm;