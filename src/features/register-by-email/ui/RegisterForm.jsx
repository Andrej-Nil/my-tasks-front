import Form from "@/shared/ui/form";
import Field from "@/shared/ui/field/index.js";
import {useState} from "react";
import {registerByEmail} from "@/features/register-by-email";

const RegisterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
           const response = await registerByEmail(name, email, password);
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
          onSubmit={handleSubmit}
      >
         <Field
             name="name"
             label="Имя"
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Ваше имя"
         />

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


export default RegisterForm;