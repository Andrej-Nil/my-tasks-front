import {validationEmail, validationPassword, validationUserName} from "@/shared/validation";

export const validationRegisterForm = (userName, email, password) => {
    const errors = {};

    const userNameError = validationUserName(userName);
    const emailError = validationEmail(email);
    const passwordError = validationPassword(password);

    if(userNameError){
        errors.userName = userNameError;
    }

    if(emailError){
        errors.email = emailError;
    }

    if(passwordError) {
        errors.password = passwordError;
    }

    return errors
}