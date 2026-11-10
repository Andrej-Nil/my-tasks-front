import {validationCurrentPassword} from "@/shared/validation";

export const validationDeleteUser = (password) => {
    const errors = {};

    const errorPassword = validationCurrentPassword(password)

    if(errorPassword){
        errors.password = errorPassword;
    }

    return errors;
}