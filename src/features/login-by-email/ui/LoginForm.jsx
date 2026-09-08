import {useState} from "react";
import {loginByEmail} from "@/features/login-by-email/index.js";
import {Form} from "@/shared/ui/form";
import {Field} from "@/shared/ui/field";
import {validateLoginForm} from "@/features/login-by-email/model/validation";
import {LOGIN_ERRORS} from "@/features/login-by-email/model/errors";
import {API_ERRORS} from "@/shared/errors";
import {useNavigate} from "react-router-dom";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();

        if(isLoading){
            return;
        }

        const validationErrors = validateLoginForm(email, password)
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length > 0){
            return;
        }
        setIsLoading(true);

        try{
            await loginByEmail(email, password);

            navigate('/', { replace: true });
        }catch (error) {
            if(error.message === LOGIN_ERRORS.INVALID_CREDENTIALS) {
                setErrors((prev) => ({...prev, form: "Неверный логин пароль"}));
            }
            if(error.message === API_ERRORS.SERVER_ERRORS) {
                setErrors((prev) => ({...prev, form: "Проблемы с нашей стороны, попробуйте позже"}));
            }
            if(error.message === API_ERRORS.NETWORK_ERROR){
                setErrors((prev) => ({...prev, form: "Нет соединения с сервером."}));
            }
            if(error.message === API_ERRORS.DEFAULT_ERROR){
                setErrors((prev) => ({...prev, form: "Произошла ошибка, попробуйте позже"}));
            }
        } finally {
            setIsLoading(false);
            setPassword('');
        }
    }
    return (
        <Form
            noValidate
            title="Вход"
            btnText="Войти"
            to="/registration"
            toText="Нет аккаунта? Зарегистрироваться."
            isLoading={isLoading}
            loaderText={"Загрузка профиля..."}
            error={errors?.form}
            onSubmit={handleSubmit}
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