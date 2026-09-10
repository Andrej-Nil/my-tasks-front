import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {registerByEmail} from "@/features/register-by-email";
import {validationRegisterForm} from "@/features/register-by-email/model/validation";
import {Form} from "@/shared/ui/form";
import {Field} from "@/shared/ui/field";
import {API_ERRORS} from "@/shared/errors";
import {REGISTER_ERRORS} from "@/features/register-by-email/model/errors";

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validationRegisterForm(name, email, password);
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length > 0){
            return;
        }

        setIsLoading(true);

        try{
            await registerByEmail(name, email, password);
            navigate('/', { replace: true });
        }catch (error){

            if(error.message === REGISTER_ERRORS.EMAIL_ALREADY_EXISTS){
                setErrors((prev) =>({...prev, form: "Пользователь с таким email уже зарегестрирован"}))
            }
            if(error.message === REGISTER_ERRORS.INVALID_CREDENTIALS){
                setErrors((prev) => ({...prev, form: "Что то пошло не так, попробуйте позже"}))
            }
            if(error.message === API_ERRORS.SERVER_ERRORS) {
                setErrors((prev) => ({...prev, form: "Проблемы с нашей стороны, попробуйте позже"}));
            }
            if(error.message === API_ERRORS.NETWORK_ERROR){
                setErrors((prev) => ({...prev, form: "Произошла ошибка, попробуйте позже"}))
            }

        }finally {
            setIsLoading(false);
        }
    }

    return(
      <Form
          noValidate
          title="Регистрация"
          btnText="Зарегистрироваться"
          to="/login"
          toText="Уже есть аккаунт? Войти"
          isLoading={isLoading}
          loaderText={"Регистрируем..."}
          error={errors?.form}
          onSubmit={handleSubmit}
      >
         <Field
             name="name"
             label="Имя"
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Ваше имя"
             autoComplete="name"
             error={errors?.userName}
         />

          <Field
              type="email"
              name="email"
              label="Ваша электроная почта"
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
              placeholder="Придумайте пароль"
              autoComplete="new-password"
              error={errors?.password}
          />
      </Form>
    )
}


export default RegisterForm;