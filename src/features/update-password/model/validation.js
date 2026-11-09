import {validationCurrentPassword, validationNewPassword} from "@/shared/validation";

export const validationUpdatePassword = (currentPasswordValue, newPasswordValue) => {
    const errors = {};

    const currentPassword = validationCurrentPassword(currentPasswordValue);
    const newPassword = validationNewPassword(currentPasswordValue, newPasswordValue);


    if(currentPassword){
        errors.currentPassword = currentPassword;
    }
    if(newPassword){
        errors.newPassword = newPassword;
    }
    return errors;
}