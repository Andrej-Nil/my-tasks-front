import Form from "@/shared/ui/form";
import Field from "@/shared/ui/field/index.js";

const RegisterForm = () => {
    return(
      <Form
          title="Регистрация"
          btnText="Зарегистрироваться"
          // to="/login"
          toText="Уже зарегистрированы?"
      >
         <Field
             name="name"
             label="Имя"
             placeholder="Ваше имя"
         />

          <Field
              type="email"
              name="email"
              label="Ваша электроная почта"
              placeholder="vasha@pochta.ru"
          />

          <Field
              type="password"
              name="password"
              label="Пароль"
              placeholder="Придумайте пароль"
          />
      </Form>
    )
}


export default RegisterForm;