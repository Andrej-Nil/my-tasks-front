import {validationEmail, validationPassword} from "@/shared/validation";

export const validateLoginForm = (email, password) => {
    const errors= {};

    const emailError = validationEmail(email);
    const passwordError = validationPassword(password);

    if(emailError){
        errors.email = emailError;
    }

    if(passwordError) {
        errors.password = passwordError;
    }

    return errors;
}