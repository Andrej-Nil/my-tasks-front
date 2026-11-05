import {validationCurrentPassword, validationEmail} from "@/shared/validation";

export const validationUpdateEmail = (email, password) => {
    const errors = {};

    const errorEmail = validationEmail(email);

    const errorPassword = validationCurrentPassword(password)

    if(errorEmail){
        errors.email = errorEmail;
    }

    if(errorPassword){
        errors.password = errorPassword;
    }


    return errors;
}