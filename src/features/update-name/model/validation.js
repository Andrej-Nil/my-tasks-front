import {validationUserName} from "@/shared/validation";

export const validationUpdateUserName = (newName) => {
    const errors = {};

    const errorName = validationUserName(newName);

    if(errorName){
        errors.name = errorName;
    }

    return errors;
}