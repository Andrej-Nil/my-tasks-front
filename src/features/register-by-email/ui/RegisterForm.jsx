import Form from "@/shared/ui/form";
import Field from "@/shared/ui/field/index.js";
import {useState} from "react";
import {registerByEmail} from "@/features/register-by-email";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
           const response = await registerByEmail(name, email, password);
            if (response.authenticated) {
                navigate('/', { replace: true });
            }
        }catch (error){

        }finally {

        }
    }

    return(
      <Form
          title="Регистрация"
          btnText="Зарегистрироваться"
          to="/login"
          toText="Уже есть аккаунт? Войти"
          isLoading={isLoading}
          onSubmit={handleSubmit}
      >
         <Field
             name="name"
             label="Имя"
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Ваше имя"
             autoComplete="name"
         />

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
              autoComplete="new-password"
          />
      </Form>
    )
}


export default RegisterForm;